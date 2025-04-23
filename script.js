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

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(robot.scene);

    const mixer = new THREE.AnimationMixer(robot.scene);

    const idleAction = mixer.clipAction(robot.animations[2]);
    const jumpAction = mixer.clipAction(robot.animations[3]);
    const dieAction = mixer.clipAction(robot.animations[1]);
    const thumbsUpAction = mixer.clipAction(robot.animations[9]);
    const waveAction = mixer.clipAction(robot.animations[12]);
    thumbsUpAction.loop = THREE.LoopOnce;
    waveAction.loop = THREE.LoopOnce;
    jumpAction.loop = THREE.LoopOnce;
    dieAction.loop = THREE.LoopOnce;

    const model = await handpose.load();

    
  };
  start();
});
