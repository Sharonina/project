import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#be8ee3" });
const mesh = new THREE.Mesh(geometry, material);
/* mesh.position.x = 1.7;
mesh.position.y = -0.6;
mesh.position.z = 1; */
mesh.position.set(1.7, -0.6, 1);

//scale (v3)
mesh.scale.set(2, 0.5, 0.5);

//rotation (Euler)
mesh.rotation.reorder("YXZ");
mesh.rotation.y = 0.5;
mesh.rotation.x = 0.5;

scene.add(mesh);

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

camera.lookAt(mesh.position);

// Get distance of the object from the camera
console.log(mesh.position.distanceTo(camera.position));

// Canvas
const canvas = document.querySelector("canvas.webgl");

// ...

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
