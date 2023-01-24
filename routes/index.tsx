import { Head } from "$fresh/runtime.ts";
import Video from "../islands/Video.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Player Test</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Video src="/api/file" />
      </div>
    </>
  );
}
