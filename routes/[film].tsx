import { PageProps } from "$fresh/server.ts";

/*
  C'est une route dynamique file que j'ai mis pour l'exemple elle est pas très utile atm car l'island Video est appelé dans index
*/

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.film}</div>;
}
