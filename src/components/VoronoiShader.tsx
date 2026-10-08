import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

import SH from "./shaders/Voronoi.frag?raw"
// Edit this string to experiment with the background fragment shader.
export const FRAGMENT_SHADER = SH;

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export default function VoronoiShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: false });
    if (!canvas || !gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Shader link error:", gl.getProgramInfoLog(program));
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "a_position");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const mouse = gl.getUniformLocation(program, "u_mouse");
    const time = gl.getUniformLocation(program, "u_time");
    const pointer = { x: -1000, y: -1000 };
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const onPointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const render = (timestamp: number) => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      const width = Math.round(bounds.width * dpr);
      const height = Math.round(bounds.height * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(0, 0, width, height);
      gl.useProgram(program);
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolution, width, height);
      gl.uniform2f(mouse, pointer.x * dpr, pointer.y * dpr);
      gl.uniform1f(time, timestamp * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    canvas.parentElement?.addEventListener("pointermove", onPointerMove);
    canvas.parentElement?.addEventListener("pointerleave", onPointerLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      canvas.parentElement?.removeEventListener("pointermove", onPointerMove);
      canvas.parentElement?.removeEventListener("pointerleave", onPointerLeave);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full bg-[#06123d]"
      aria-hidden="true"
    />
  );
}
