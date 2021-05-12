import { Encrypt } from "@/components/Encrypt/Encrypt";
import { center } from "@/style";
import { css } from "catom";
export default function Landing() {
  return (
    <section class={center}>
      <h1 class={css({ fontSize: "2rem" })}>Secret Links</h1>
      <div>Paste a link, add a password and you're done.</div>
      <Encrypt />
    </section>
  );
}
