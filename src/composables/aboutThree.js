import * as THREE from "three";
import { gsap } from "gsap/gsap-core";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { generateUUID } from "three/src/math/MathUtils";

const AboutThree = () => {
  //Debug
  // const gui = new dat.GUI();

  //Loading Manager
  const manager = new THREE.LoadingManager();

  const onLoadWait = (manager.onLoad = function () {
    return true;
  });

  // Canvas
  const canvas = document.querySelector("canvas.webabout");

  // Scene
  const scene = new THREE.Scene();

  // Objects
  const DodecahedronGeometry = new THREE.DodecahedronGeometry(0.21, 0);

  const ConeGeometryGeometry = new THREE.ConeGeometry(0.15, 0.3, 64, 1);

  const SphereGeometry = new THREE.SphereGeometry(0.2, 64, 64);

  // Group
  const group = new THREE.Group();

  // Materials

  const material = new THREE.MeshStandardMaterial();
  material.metalness = 0.7;
  material.roughness = 0.8;
  material.color = new THREE.Color(0x292929);
  // Mesh

  const Dodecahedron = new THREE.Mesh(DodecahedronGeometry, material);
  const ConeGeometry = new THREE.Mesh(ConeGeometryGeometry, material);
  const SphereBuffer = new THREE.Mesh(SphereGeometry, material);
  Dodecahedron.position.set(0.76, 0.09, -0.09);
  ConeGeometry.position.set(1.06, 0.54, 0.27);
  SphereBuffer.position.set(1.26, 0.01, 0.27);

  group.add(Dodecahedron, ConeGeometry, SphereBuffer);
  scene.add(group);

  // //Geometry Animation

  //Dodecahedron
  gsap.to(Dodecahedron.position, {
    x: 0.9,
    y: 0.4,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });

  //ConeGeometry
  gsap.to(ConeGeometry.position, {
    x: 1.2,
    y: 0.6,
    duration: 13,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });

  //SphereBuffer
  gsap.to(SphereBuffer.position, {
    x: 1.4,
    y: -0.1,
    duration: 14,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });

  //Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  ambientLight.position.set();
  scene.add(ambientLight);

  //GLTFLoader sphere for i Letter
  const loader = new GLTFLoader(manager);
  let laptop;
  const modelUrlLaptop = new URL(
    "../assets/about/laptop/MacBook.glb",
    import.meta.url
  ).href;
  loader.load(
    modelUrlLaptop,
    function (gltf) {
      laptop = gltf.scene;
      gltf.scene.traverse(function () {
        laptop.position.set(1.5, -1.2, 1);
        laptop.rotation.set(0.6, -1.2, 0);

        laptop.castShadow = true;
        laptop.receiveShadow = true;
        laptop.scale.set(0.7, 0.7, 0.7);
        group.add(laptop);
        scene.add(group);
      });
    },
    undefined,
    (err) => {
      console.error(err);
    }
  );

  // Light 0
  const pointLight = new THREE.PointLight(0xffffff, 0.35);
  const pointLightX = 0.24;
  const pointLightY = -0.02;
  const pointLightZ = 1.15;
  pointLight.position.set(pointLightX, pointLightY, pointLightZ);
  pointLight.castShadow = true;
  pointLight.shadow.bias = 0.0001;
  pointLight.intensity = 0.8;
  group.add(pointLight);
  scene.add(group);

  // Light 1
  const pointLight2 = new THREE.PointLight(0x151245, 0.35);
  const pointLight2X = 1.08;
  const pointLight2Y = 0.74;
  const pointLight2Z = -0.48;
  pointLight2.position.set(pointLight2X, pointLight2Y, pointLight2Z);
  pointLight2.castShadow = true;
  pointLight2.shadow.bias = 0.0001;
  pointLight2.intensity = 1.39;
  group.add(pointLight2);
  scene.add(group);

  // Light 2
  const pointLight3 = new THREE.PointLight(0xfd304d, 0.35);
  const pointLight3X = 1.21;
  const pointLight3Y = 0.61;
  const pointLight3Z = -0.09;
  pointLight3.position.set(pointLight3X, pointLight3Y, pointLight3Z);
  pointLight3.castShadow = true;
  pointLight3.shadow.bias = 0.0001;
  pointLight3.intensity = 1.02;
  group.add(pointLight3);
  scene.add(group);

  // Light 3
  const pointLight4 = new THREE.PointLight(0xa6fdff, 0.35);
  const pointLight4X = 1.08;
  const pointLight4Y = 0.09;
  const pointLight4Z = -0.22;
  pointLight4.position.set(pointLight4X, pointLight4Y, pointLight4Z);
  pointLight4.castShadow = true;
  pointLight4.shadow.bias = 0.0001;
  pointLight4.intensity = 0.41;
  group.add(pointLight4);
  scene.add(group);

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  scene.add(camera);

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color("#000000"), 0);

  //Lost Context
  canvas.addEventListener(
    "webglcontextlost",
    function (event) {
      event.preventDefault();
      setTimeout(function () {
        renderer.forceContextRestore();
      }, 1);
    },
    false
  );

  //Mouse
  let [mouseY, mouseX, targetX, targetY, lightX, lightY] = [0, 0, 0, 0, 0, 0];

  if (onLoadWait() == true) {
    setTimeout(function () {
      document.addEventListener("mousemove", rotateLaptop, false);
    }, 3000);
  }

  function rotateLaptop(event) {
    mouseY = event.clientY - window.innerHeight / 2;
    mouseX = event.clientX - window.innerWidth / 2;
  }

  /**
   * Animate
   */
  const tick = () => {
    // Update objects
    targetX = mouseX * 0.00005;
    targetY = mouseY * 0.00003;

    lightY = mouseX * -0.00006;
    lightX = mouseY * -0.00006;

    Dodecahedron.rotation.y += 0.005;
    Dodecahedron.rotation.x += 0.001;

    ConeGeometry.rotation.y += 0.005;
    ConeGeometry.rotation.x += 0.001;

    if (mouseX > 0) {
      if (laptop) {
        //Group mouse rotation
        group.rotation.y = -1.2 + (targetX - laptop.rotation.y);
        group.rotation.x = 0.6 + (targetY - laptop.rotation.x);
      }

      //Light Mouse position
      pointLight2.position.x +=
        pointLight2X + (lightX - pointLight2.position.x);
      pointLight2.position.y +=
        pointLight2Y + (lightY - pointLight2.position.y);
      pointLight3.position.x +=
        pointLight3X + (lightX - pointLight3.position.x);
      pointLight3.position.y +=
        pointLight3Y + (lightY - pointLight3.position.y);
      pointLight4.position.x +=
        pointLight4X + (lightX - pointLight4.position.x);
      pointLight4.position.y +=
        pointLight4Y + (lightY - pointLight4.position.y);
    }

    // Update Orbital Controls

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
  tick();
};
export default AboutThree;
