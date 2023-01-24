import { useState } from "preact/hooks";

interface VideoProps {
  src: string;
}

export default function Video(props: VideoProps) {

  // EXAMPLE WASM
  const wasmCode = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
    3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
    5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
    128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
    105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
    65, 42, 11
  ]);
  
  const wasmModule = new WebAssembly.Module(wasmCode);
  
  const wasmInstance = new WebAssembly.Instance(wasmModule);
  
  const main = wasmInstance.exports.main as CallableFunction;
  console.log(main().toString());

  // SRC PROPS
  const src = props.src;
  
  return (
    <div class="flex gap-2 w-full">
      {/*} Ici c'est le component video en lui même qui sera providé entièrement côté client c'est une islands*/}
    </div>
  );
}
