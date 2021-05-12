import { generateKey, textEncoder } from "./key-util";

const VERSION = "0.1";
export async function encrypt(url: string, password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(10)).buffer as ArrayBuffer;
  const { key } = await generateKey(password, salt);
  const iv = crypto.getRandomValues(new Uint8Array(16)).buffer as ArrayBuffer;
  const encryptedBuf = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    textEncoder.encode(url)
  );

  return {
    v: VERSION,
    buf: encryptedBuf,
    iv,
    salt,
  };
}
