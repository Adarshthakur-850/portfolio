"use client"

import { useEffect, useRef } from "react"

export default function ThreeModel() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<any>(null)
  const rendererRef = useRef<any>(null)
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    // Dynamically import Three.js
    const initThree = async () => {
      const THREE = await import("three")

      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

      renderer.setSize(400, 400)
      renderer.setClearColor(0x000000, 0)
      mountRef.current?.appendChild(renderer.domElement)

      // Create a complex geometric shape
      const geometry = new THREE.IcosahedronGeometry(1.5, 1)

      // Create material with gradient-like effect
      const material = new THREE.MeshPhongMaterial({
        color: 0x888888,
        shininess: 100,
        transparent: true,
        opacity: 0.9,
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // Add wireframe overlay
      const wireframeGeometry = new THREE.IcosahedronGeometry(1.52, 1)
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xb0b0b0,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      })
      const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
      scene.add(wireframeMesh)

      // Add lights
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)

      const pointLight = new THREE.PointLight(0x888888, 0.5)
      pointLight.position.set(-1, -1, 1)
      scene.add(pointLight)

      camera.position.z = 4

      // Store references
      sceneRef.current = { scene, camera, renderer, mesh, wireframeMesh }
      rendererRef.current = renderer

      // Animation loop
      const animate = () => {
        frameRef.current = requestAnimationFrame(animate)

        if (mesh && wireframeMesh) {
          mesh.rotation.x += 0.005
          mesh.rotation.y += 0.01
          wireframeMesh.rotation.x += 0.003
          wireframeMesh.rotation.y += 0.007
        }

        renderer.render(scene, camera)
      }
      animate()

      // Handle resize
      const handleResize = () => {
        if (mountRef.current) {
          const size = Math.min(mountRef.current.clientWidth, 400)
          camera.aspect = 1
          camera.updateProjectionMatrix()
          renderer.setSize(size, size)
        }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }

    initThree()

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <div className="flex justify-center items-center">
      <div
        ref={mountRef}
        className="w-full max-w-[400px] h-[400px] flex justify-center items-center"
        style={{ filter: "drop-shadow(0 0 20px rgba(136, 136, 136, 0.3))" }}
      />
    </div>
  )
}
