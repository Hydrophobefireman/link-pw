import { generateKey, textDecoder } from "./key-util";

export async function decrypt({
  password,
  buf,
  iv,
  salt,
}: {
  password: string;
  buf: ArrayBuffer;
  iv: ArrayBuffer;
  salt: ArrayBuffer;
}) {
  const { key } = await generateKey(password, salt);
  return textDecoder.decode(
    await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, buf)
  );
}
