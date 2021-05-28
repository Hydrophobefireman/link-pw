import { actionButton, center, input, inputContainer } from "@/style";

import { Form } from "@/components/Form";
import { base64ToArrayBuffer } from "@hydrophobefireman/j-utils";
import { css } from "catom";
import { decrypt } from "@/util/crypto/decrypt";
import { useState } from "@hydrophobefireman/ui-lib";

export default function Decrypt() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  async function handleSubmit() {
    if (!password) return;
    if (!location.hash.length) return setError("Invalid url data");
    let data: any;
    setError(null);
    try {
      data = JSON.parse(atob(location.hash.substr(1)));
    } catch (e) {
      return setError("Invalid url data");
    }
    const { iv, salt, buf } = data;
    if (!iv || !salt || !buf) return setError("Invalid url data");
    try {
      const response = await decrypt({
        password,
        iv: await base64ToArrayBuffer(iv),
        salt: await base64ToArrayBuffer(salt),
        buf: await base64ToArrayBuffer(buf),
      });
      setResult(response);
    } catch (e) {
      console.log(e, e.message);
      return setError("Could not decrypt..check your password");
    }
  }

  return (
    <section class={center}>
      <h1 class={css({ fontSize: "2rem" })}>Password Protected Link</h1>
      <div>The link has been protected with a password</div>
      <div class={css({ marginTop: "1rem", color: "red" })}> {error}</div>
      <Form onSubmit={handleSubmit}>
        <div class={inputContainer}>
          <label for="password" class="sr-only">
            Password
          </label>
          <input
            class={input}
            type="password"
            value={password}
            placeholder="Password"
            id="password"
            onInput={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div class={inputContainer}>
          <button class={actionButton}>Submit</button>
        </div>
      </Form>
      {result && (
        <div class={inputContainer}>
          <div
            class={css({
              fontWeight: "bold",
              fontSize: "1.2rem",
              wordBreak: "break-all",
              textAlign: "left",
            })}
          >
            Result:{" "}
            <div>
              <a href={result}>{result}</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
