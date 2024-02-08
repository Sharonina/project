import * as THREE from "three";
import gsap from "gsap";

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

//Clock
const clock = new THREE.Clock();

//Animation
gsap.to(group.position, { duration: 1, delay: 1, y: -2 });
gsap.to(group.position, { duration: 1, delay: 2, y: 0 });

const tick = () => {
  /*  const elapsedTime = clock.getElapsedTime();

  group.rotation.y = Math.sin(elapsedTime);
  group.position.y = Math.sin(elapsedTime);
 */
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
