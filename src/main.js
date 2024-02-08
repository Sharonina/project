import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

//object
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 3;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#f3679b" })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#f7891b" })
);

cube2.position.x = 2;

group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#17919d" })
);

cube3.position.x = -2;

group.add(cube3);

// Guides 3D
const AxesHelper = new THREE.AxesHelper();
scene.add(AxesHelper);

//take the vector to 1 (you can use it to see further objects)
//mesh.position.normalize();

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
/* camera.position.y = 1;
camera.position.x = 1; */
scene.add(camera);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// ...

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
