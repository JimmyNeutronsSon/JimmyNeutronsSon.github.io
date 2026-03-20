import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

console.log('3D Cloud Module Loading...');

let scene, camera, renderer, cloudField;
let clouds = [];
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

window.addEventListener('DOMContentLoaded', () => {
    init();
    animate();
});

function init() {
    console.log('3D Cloud Field Init...');
    const container = document.getElementById('canvas-container');
    if (!container) {
        console.error('Canvas container not found!');
        return;
    }
    console.log('Container found:', container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1500;

    scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    cloudField = new THREE.Group();
    scene.add(cloudField);

    const loader = new OBJLoader();
    loader.load('/cloud.obj', (originalObj) => {
        console.log('Original cloud loaded. Creating field...');
        
        // Center the original model
        const box = new THREE.Box3().setFromObject(originalObj);
        const center = box.getCenter(new THREE.Vector3());
        originalObj.position.sub(center);
        
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const baseScale = 600 / maxDim;

        // Shared material
        const cloudMaterial = new THREE.MeshPhongMaterial({
            color: 0x1e6cc7, // --accent
            transparent: true,
            opacity: 0.12,
            shininess: 30,
            flatShading: false
        });

        const cloudCount = 15;
        for (let i = 0; i < cloudCount; i++) {
            const cloudClone = originalObj.clone();
            
            // Apply material to meshes
            cloudClone.traverse((child) => {
                if (child.isMesh) {
                    child.material = cloudMaterial;
                }
            });

            // Randomize position
            const spreadingX = 3500;
            const spreadingY = 2000;
            const spreadingZ = 2500;
            
            cloudClone.position.set(
                (Math.random() - 0.5) * spreadingX,
                (Math.random() - 0.5) * spreadingY,
                (Math.random() - 0.5) * spreadingZ - 500 // Start a bit back
            );

            // Randomize rotation
            cloudClone.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            // Randomize scale
            const scale = baseScale * (0.8 + Math.random() * 1.5);
            cloudClone.scale.set(scale, scale, scale);

            // Add drift properties
            cloudClone.userData.driftSpeed = 0.001 + Math.random() * 0.002;
            cloudClone.userData.floatAmplitude = 20 + Math.random() * 50;
            cloudClone.userData.floatPhase = Math.random() * Math.PI * 2;

            cloudField.add(cloudClone);
            clouds.push(cloudClone);
        }
        
    }, (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, (error) => {
        console.error('An error happened', error);
    });

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 2;
    mouseY = (event.clientY - windowHalfY) / 2;
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    const time = Date.now() * 0.0005;

    clouds.forEach((cloud, i) => {
        // Slow rotation
        cloud.rotation.y += cloud.userData.driftSpeed;
        cloud.rotation.z += cloud.userData.driftSpeed * 0.5;

        // Subtle floating movement
        cloud.position.y += Math.sin(time + cloud.userData.floatPhase) * 0.2;
    });

    // Interactive movement
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}
