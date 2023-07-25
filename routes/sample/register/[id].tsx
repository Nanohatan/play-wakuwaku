import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>ID is {props.params.id}</div>;
}
