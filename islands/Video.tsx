import { useState } from "preact/hooks";

interface VideoProps {
  src: string;
}

export default function Video(props: VideoProps) {
  const src = props.src;
  return (
    <div class="flex gap-2 w-full">
      {/*} Ici c'est le component video en lui même qui sera providé entièrement côté client c'est une islands*/}
    </div>
  );
}
