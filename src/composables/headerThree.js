import * as THREE from "three";
// import * as dat from "dat.gui";
import image from "../assets/header/disc.png";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const sprite = new THREE.TextureLoader().load(image);

const HiRender = () => {
  //Debug
  // const gui = new dat.GUI();

  //Loading Manager
  const manager = new THREE.LoadingManager();

  const onLoadWait = (manager.onLoad = function () {
    return true;
  });

  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();

  // Objects
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesGeometrySecond = new THREE.BufferGeometry();
  const particleCnt = 3000;
  const particleCntSecond = 2000;

  const posArray = new Float32Array(particleCnt * 3);
  const posArraySecond = new Float32Array(particleCntSecond * 3);

  for (let i = 0; i < particleCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
  }

  for (let i = 0; i < particleCntSecond * 3; i++) {
    posArraySecond[i] = (Math.random() - 0.5) * (Math.random() * 5);
  }
  //first
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  //second
  particlesGeometrySecond.setAttribute(
    "position",
    new THREE.BufferAttribute(posArraySecond, 3)
  );

  //GLTFLoader h Letter
  var modelH;
  const loader = new GLTFLoader(manager);
  const modelUrl = new URL(
    "../assets/header/hiWord/hLetter.glb",
    import.meta.url
  ).href;
  loader.load(
    modelUrl,
    function (gltf) {
      modelH = gltf.scene;
      gltf.scene.traverse(function () {
        modelH.rotation.x = -0.5 * Math.PI;
        modelH.rotation.y = -0.15;
        modelH.rotation.z = 0.3;
        modelH.position.set(-0.15, 0, -0.4);
        modelH.castShadow = true;
        modelH.receiveShadow = true;
        modelH.scale.set(1.8, 1.8, 1.8);
        scene.add(modelH);
      });
    },
    undefined,
    (err) => {
      console.error(err);
    }
  );

  //GLTFLoader i base Letter
  var modelI;
  const group = new THREE.Group(manager);
  const modelUrlI = new URL(
    "../assets/header/hiWord/iLetter.glb",
    import.meta.url
  ).href;
  loader.load(
    modelUrlI,
    function (gltf) {
      modelI = gltf.scene;
      gltf.scene.traverse(function () {
        modelI.position.set(0.65, -0.05, -0.4);
        group.rotation.set(0, 0, 0.2);

        modelI.castShadow = true;
        modelI.receiveShadow = true;
        modelI.scale.set(0.09, 0.09, 0.09);
        group.add(modelI);
        scene.add(group);
      });
    },
    undefined,
    (err) => {
      console.error(err);
    }
  );

  //GLTFLoader sphere for i Letter
  var modelSphere;
  const groupSphere = new THREE.Group(manager);
  const modelUrlSphere = new URL(
    "../assets/header/hiWord/iBase.glb",
    import.meta.url
  ).href;
  loader.load(
    modelUrlSphere,
    function (gltf) {
      modelSphere = gltf.scene;
      gltf.scene.traverse(function () {
        modelSphere.position.set(0.65, -0.2, -0.4);
        groupSphere.rotation.set(0, 0, 0.2);

        modelSphere.castShadow = true;
        modelSphere.receiveShadow = true;
        modelSphere.scale.set(0.09, 0.09, 0.09);
        groupSphere.add(modelSphere);
        scene.add(groupSphere);
      });
    },
    undefined,
    (err) => {
      console.error(err);
    }
  );

  // Materials
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    sizeAttenuation: true,
    map: sprite,
    alphaTest: 0.5,
    transparent: true,
  });

  // Mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  const particlesMeshSecond = new THREE.Points(
    particlesGeometrySecond,
    particlesMaterial
  );
  scene.add(particlesMesh, particlesMeshSecond);

  //ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  // Lights mouse
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(0, 0, 0);
  pointLight.castShadow = true;
  pointLight.intensity = 0;
  scene.add(pointLight);

  // Light 1
  const pointLight2 = new THREE.PointLight(0x808080, 0.35);
  pointLight2.position.set(3, -1.08, 1.73);
  pointLight2.castShadow = true;
  pointLight2.shadow.bias = 0.0001;
  pointLight2.intensity = 0.3;
  scene.add(pointLight2);

  // Light 2
  const pointLight3 = new THREE.PointLight(0x808080, 0.35);
  pointLight3.position.set(-1.13, -0.95, 3);
  pointLight3.castShadow = true;
  pointLight3.shadow.bias = 0.0001;
  pointLight3.intensity = 0.1;
  scene.add(pointLight3);

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
  document.addEventListener("mousemove", onMouseMove, false);
  document.addEventListener("mousemove", animateParticles, false);

  let mouseX = 0;
  let mouseY = 0;

  function animateParticles(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
  }

  function onMouseMove(event) {
    event.preventDefault();
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    let vector = new THREE.Vector3(mouseX, mouseY, 0.5);
    vector.unproject(camera);
    let dir = vector.sub(camera.position).normalize();
    let distance = -camera.position.z / dir.z;
    let pos = camera.position.clone().add(dir.multiplyScalar(distance));
    pointLight.position.copy(pos);
  }

  /**
   * Animate
   */
  const tick = () => {
    if (modelI || modelSphere) {
      modelSphere.rotation.y += 0.003;
      modelI.rotation.y += -0.003;
    }
    // Update objects
    particlesMesh.rotation.y += -0.00001;
    particlesMeshSecond.rotation.y += 0.00001;

    if (mouseX > 0) {
      pointLight.intensity = 0.2;
      particlesMesh.rotation.y += mouseX * 0.000003;
      particlesMesh.rotation.x += mouseY * 0.000002;
      particlesMeshSecond.rotation.y += mouseX * -0.000003;
      particlesMeshSecond.rotation.x += mouseY * -0.000002;
    }

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
  if (onLoadWait() == true) {
    setTimeout(function () {
      tick();
    }, 1000);
  }
};
export default HiRender;
