import { useEffect, useRef } from "react"
import defaultHeroImage from "../assets/booktall.jpg"
import FRAGMENT_SHADER from "./shaders/hero.frag?raw"

const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("HeroShader compile error:", gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }

  return shader
}

interface HeroShaderProps {
  src?: string
  className?: string
  alt?: string
}

export default function HeroShader({
  src = defaultHeroImage,
  className = "hero__photo",
  alt = "Paulo",
}: HeroShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  let mousePos = {x:0, y:0};
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
    })
    if (!gl) return

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("HeroShader link error:", gl.getProgramInfoLog(program))
      return
    }

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const positionLoc = gl.getAttribLocation(program, "a_position")
    const imageLoc = gl.getUniformLocation(program, "u_image")
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution")
    const imageResolutionLoc = gl.getUniformLocation(
      program,
      "u_image_resolution",
    )
    const timeLoc = gl.getUniformLocation(program, "u_time")
    const mouseLoc = gl.getUniformLocation(program, "u_mouse")

    // Create 1x1 placeholder texture until image loads
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 0]),
    )
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

    let imageResolution: [number, number] = [1, 1]
    let imageLoaded = false

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = src

    const uploadTexture = () => {
      if (!canvasRef.current) return
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      imageResolution = [
        img.naturalWidth || img.width,
        img.naturalHeight || img.height,
      ]
      imageLoaded = true
    }

    if (img.complete && img.naturalWidth > 0) {
      uploadTexture()
    } else {
      img.onload = () => {
        uploadTexture()
        render(performance.now())
      }
    }

    const pointer = { x: -1000, y: -1000 }
    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }

    const onPointerLeave = () => {
      pointer.x = -1000
      pointer.y = -1000
    }

    canvas.parentElement?.addEventListener("pointermove", onPointerMove)
    canvas.parentElement?.addEventListener("pointerleave", onPointerLeave)

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, Math.round(bounds.width * dpr))
      const height = Math.max(1, Math.round(bounds.height * dpr))

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    let frameId = 0
    let isVisible = false

    const render = (timestamp: number) => {
      if (!canvasRef.current) return

      resize()

      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.useProgram(program)

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.enableVertexAttribArray(positionLoc)
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.uniform1i(imageLoc, 0)

      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform2f(imageResolutionLoc, imageResolution[0], imageResolution[1])
      gl.uniform1f(timeLoc, timestamp * 0.001)

      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      let px = {x: pointer.x * dpr, y:(canvas.clientHeight - pointer.y) * dpr};
      mousePos.x += 0.03*(px.x - mousePos.x);
      mousePos.y += 0.03*(px.y - mousePos.y);

      gl.uniform2f(
        mouseLoc,
        mousePos.x,
        mousePos.y,
      )

      gl.drawArrays(gl.TRIANGLES, 0, 6)

      if (isVisible) {
        frameId = requestAnimationFrame(render)
      }
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        isVisible = true
        cancelAnimationFrame(frameId)
        frameId = requestAnimationFrame(render)
      } else {
        isVisible = false
        cancelAnimationFrame(frameId)
      }
    })
    observer.observe(canvas)

    const resizeObserver = new ResizeObserver(() => {
      resize()
      if (imageLoaded) {
        render(performance.now())
      }
    })
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      resizeObserver.disconnect()
      canvas.parentElement?.removeEventListener("pointermove", onPointerMove)
      canvas.parentElement?.removeEventListener("pointerleave", onPointerLeave)
      img.onload = null
      gl.deleteTexture(texture)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      gl.deleteBuffer(buffer)
    }
  }, [src])

  return (
    <canvas ref={canvasRef} className={className} aria-label={alt} role="img" />
  )
}
