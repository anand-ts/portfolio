import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ShaderAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, clock;
    let uniforms;

    function init() {
      const container = mountRef.current;

      clock = new THREE.Clock();
      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();

      const geometry = new THREE.PlaneGeometry(2, 2);

      uniforms = {
        u_time: { value: 1.0 },
        u_resolution: { value: new THREE.Vector2() },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
          varying vec2 vUv;
          void main() {
            gl_Position = vec4(position, 1.0);
            vUv = uv;
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform vec2 u_resolution;
          uniform float u_time;
          varying vec2 vUv;
          const float PI = 3.1415926535897932384626433832795;
          void main() {
            vec2 uv = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.yy + 0.5;
            vec3 color = vec3(uv.x, uv.y, 1.0);
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      container.appendChild(renderer.domElement);

      onWindowResize();
      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    }

    function render() {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    }

    function animate() {
      render();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      // Cleanup
      renderer.dispose();
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>
  );
}
