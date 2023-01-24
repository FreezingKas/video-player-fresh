import { Head } from "$fresh/runtime.ts";
import Video from "../islands/Video.tsx";

/*
  Page d'accueil avec le components video qui est une islands avec le paramètre src qui est le lien api qui renvoie les chunks
*/

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
