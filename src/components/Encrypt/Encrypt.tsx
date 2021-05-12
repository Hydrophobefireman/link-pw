import { A, useState } from "@hydrophobefireman/ui-lib";
import { actionButton, iconButton, input, inputContainer } from "@/style";
import { arrayBufferToBase64, urlencode } from "@hydrophobefireman/j-utils";

import { Form } from "../Form";
import { LockIcon } from "../Icons/Lock";
import { RefreshIcon } from "../Icons/Refresh";
import { css } from "catom";
import { encrypt } from "@/util/crypto/encrypt";
import { random } from "@/util/random";

export function Encrypt() {
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  async function handleSubmit() {
    if (!url || !password) return;
    const { buf, iv, salt, v } = await encrypt(url, password);
    const params = btoa(
      JSON.stringify({
        v,
        buf: await arrayBufferToBase64(buf),
        iv: await arrayBufferToBase64(iv),
        salt: await arrayBufferToBase64(salt),
      })
    );
    setResult(`${location.origin}/_#${params}`);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div class={inputContainer}>
        <label for="url" class="sr-only">
          URL
        </label>
        <input
          id="url"
          class={input}
          placeholder="URL"
          type="url"
          value={url}
          onInput={(e) => setUrl(e.currentTarget.value)}
        />
      </div>
      <div class={inputContainer}>
        <label for="password" class="sr-only">
          Password
        </label>
        <input
          autoComplete="off"
          id="password"
          class={input}
          placeholder="password"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)}
        />
        <button
          type="button"
          class={iconButton}
          title="generate a password"
          onClick={() => random().then(setPassword)}
        >
          <RefreshIcon size="1.25rem" />
        </button>
      </div>
      <div class={inputContainer}>
        <button class={actionButton}>
          <LockIcon size="1.25rem" />
          <span class={css({ marginLeft: ".5rem" })}>Encrypt Link</span>
        </button>
      </div>
      <div class={inputContainer}>
        {result && (
          <div class={css({ textAlign: "left", wordBreak: "break-all" })}>
            Encrypted URL:{" "}
            <div>
              <A href={result}>{result}</A>
            </div>
          </div>
        )}
      </div>
    </Form>
  );
}
