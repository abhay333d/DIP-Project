import { loadGLTF } from "./libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {
  const start = async () => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "./assets/targets/robot.mind",
    });
    const { renderer, scene, camera } = mindarThree;

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const robot = await loadGLTF(
      "./assets/models/RobotExpressive.glb"
    );
    robot.scene.scale.set(0.2, 0.2, 0.2);
    robot.scene.position.set(0, -0.2, 0);

    
  };
  start();
});
