import { useEffect, useRef } from "react";
import DoubleBuffer from "./DoubleBuffer";

const SIZE = 150;
const WIDTH_ASPECT = 1.5;

const BLIT_VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const BLIT_FRAGMENT_SHADER = `
  precision mediump float;
  uniform sampler2D u_texture;
  uniform vec2 u_render_resolution;
  void main() {
    gl_FragColor = texture2D(u_texture, gl_FragCoord.xy / u_render_resolution);
  }
`;

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

export default function MazeShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: false });
    if (!canvas || !gl) return;

    canvas.width = WIDTH_ASPECT*SIZE;
    canvas.height = SIZE;

    const sim = new DoubleBuffer(gl,WIDTH_ASPECT*SIZE, SIZE);

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, BLIT_VERTEX_SHADER);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, BLIT_FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const blitProgram = gl.createProgram();
    if (!blitProgram) return;
    gl.attachShader(blitProgram, vertexShader);
    gl.attachShader(blitProgram, fragmentShader);
    gl.linkProgram(blitProgram);
    if (!gl.getProgramParameter(blitProgram, gl.LINK_STATUS)) {
      console.error("Shader link error:", gl.getProgramInfoLog(blitProgram));
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(blitProgram, "a_position");
    const texture = gl.getUniformLocation(blitProgram, "u_texture");
    const resolution = gl.getUniformLocation(blitProgram, "u_resolution");
    const render_resolution = gl.getUniformLocation(blitProgram, "u_render_resolution");
    let frame = 0;
    let t

    const render = (timestamp: number) => {
      sim.step(timestamp * 0.0006);
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      const width = Math.round(bounds.width * dpr);
      const height = Math.round(bounds.height * dpr);

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(blitProgram);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.bindTexture(gl.TEXTURE_2D, sim.texture);
      gl.uniform1i(texture, 0);
      gl.uniform2f(resolution, width, height);
      gl.uniform2f(render_resolution, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        frame = requestAnimationFrame(render);
      }
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      sim.dispose();
      gl.deleteProgram(blitProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full [image-rendering:pixelated]"
      aria-hidden="true"
    />
  );
}