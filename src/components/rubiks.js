import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import RubiksContainer from './rubiksContainer';

/**
 * Component created inspired by the following code:
 * 
 * @see https://codepen.io/dilums/pen/ExVQmNB
 * @author Dilum Sanjaya (@dilums)
 */

const Rubiks = () => {
  let scene, camera, renderer, controls, rollObject, group;

  const refContainer = useRef();
  const [initialized, setInitialized] = useState(false);

  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );

  const rotateConditions = {
    right: { axis: "x", value: 1 },
    left: { axis: "x", value: -1 },
    top: { axis: "y", value: 1 },
    bottom: { axis: "y", value: -1 },
    front: { axis: "z", value: 1 },
    back: { axis: "z", value: -1 }
  };

  const colorConditions = [
    ["x", 1, "green"],
    ["x", -1, "orange"],
    ["y", 1, "red"],
    ["y", -1, "yellow"],
    ["z", 1, "blue"],
    ["z", -1, "white"]
  ];

  const step = Math.PI / 100;
  const faces = ["front", "back", "left", "right", "top", "bottom"];
  const directions = [-1, 1];
  const cPositions = [-1, 0, 1];
  let cubes = [];

  const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

  const fragmentShader = `
varying vec2 vUv;
uniform vec3 faceColor;

void main() {
    vec3 border = vec3(0.533);
    float bl = smoothstep(0.0, 0.03, vUv.x);
    float br = smoothstep(1.0, 0.97, vUv.x);
    float bt = smoothstep(0.0, 0.03, vUv.y);
    float bb = smoothstep(1.0, 0.97, vUv.y);
    vec3 c = mix(border, faceColor, bt*br*bb*bl);
    gl_FragColor = vec4(c, 1.0);
}
`;
  const createMaterial = (color) =>
    new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: { faceColor: { type: "v3", value: color } }
    });

  const materials = Object.entries({
    blue: new THREE.Vector4(0 / 255, 0 / 255, 289 / 255),
    red: new THREE.Vector4(244 / 255, 24 / 255, 7 / 255),
    white: new THREE.Vector4(1, 1, 1),
    green: new THREE.Vector4(0 / 255, 155 / 255, 72 / 255),
    yellow: new THREE.Vector4(255 / 255, 226 / 255, 0 / 255),
    orange: new THREE.Vector4(255 / 255, 89 / 255, 0 / 255),
    gray: new THREE.Vector4(226 / 255, 232 / 255, 240 / 255)
  }).reduce((acc, [key, val]) => ({ ...acc, [key]: createMaterial(val) }), {});

  function onWindowResize(scW, scH) {
    camera.aspect = scW / scH;
    camera.updateProjectionMatrix();
    renderer.setSize(scW, scH);
  }

  class Roll {
    constructor(face, direction) {
      this.face = face;
      this.stepCount = 0;
      this.active = true;
      this.init();
      this.direction = direction;
    }

    init() {
      cubes.forEach((item) => {
        if (item.position[this.face.axis] == this.face.value) {
          scene.remove(item);
          group.add(item);
        }
      });
    }
    rollFace() {
      if (this.stepCount != 50) {
        group.rotation[this.face.axis] += this.direction * step;
        this.stepCount += 1;
      } else {
        if (this.active) {
          this.active = false;
          this.clearGroup();
        }
      }
    }

    clearGroup() {
      for (var i = group.children.length - 1; i >= 0; i--) {
        let item = group.children[i];
        item.getWorldPosition(item.position);
        item.getWorldQuaternion(item.rotation);
        item.position.x = Math.round(item.position.x);
        item.position.y = Math.round(item.position.y);
        item.position.z = Math.round(item.position.z);
        group.remove(item);
        scene.add(item);
      }
      group.rotation[this.face.axis] = 0;
    }
  }

  function createObjects() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    let createCube = (position) => {
      let mat = [];
      for (let i = 0; i < 6; i++) {
        let cnd = colorConditions[i];
        if (position[cnd[0]] == cnd[1]) {
          mat.push(materials[cnd[2]]);
        } else {
          mat.push(materials.gray);
        }
      }
      const cube = new THREE.Mesh(geometry, mat);
      cube.position.set(position.x, position.y, position.z);
      cubes.push(cube);
      scene.add(cube);
    };

    cPositions.forEach((x) => {
      cPositions.forEach((y) => {
        cPositions.forEach((z) => {
          createCube({ x, y, z });
        });
      });
    });

    group = new THREE.Group();
    scene.add(group);
    rollObject = new Roll(rotateConditions["top"], -1);
  }

  function update() {
    if (rollObject) {
      if (rollObject.active) {
        rollObject.rollFace();
      } else {
        rollObject = new Roll(
          rotateConditions[faces[Math.floor(Math.random() * faces.length)]],
          directions[Math.floor(Math.random() * directions.length)]
        );
      }
    }
  }

  const render = () => {
    if (initialized) return;

    requestAnimationFrame(render);
    update();
    renderer.render(scene, camera);

    setInitialized(true);
  }

  useEffect(() => {
    const { current: container } = refContainer

    const scW = container.clientWidth;
    const scH = container.clientHeight;
    const scale = scH * 0.005 + 4.8;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(scW, scH);

    container.appendChild(renderer.domElement);

    camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    );

    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);
    controls = new OrbitControls(camera, renderer.domElement);

    window.addEventListener("resize", () => onWindowResize(scW, scH), false);
    createObjects();

    render();
  }, []);

  return (
    <RubiksContainer ref={refContainer}></RubiksContainer>
  );
}

export default Rubiks;