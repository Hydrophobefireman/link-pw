import { arrayBufferToBase64 } from "@hydrophobefireman/j-utils";
import { patch } from "./patch-string-replace-all";
patch();
const HAS_CRYPTO = "crypto" in window;
const re = /[\+\/=]/g;
export const random = HAS_CRYPTO
  ? async function (n?: number) {
      const ret = await arrayBufferToBase64(
        crypto.getRandomValues(new Uint32Array(n || 5)).buffer
      );
      return ret.replaceAll(re, "_");
    }
  : async function () {
      return Math.random().toString(36).substr(2);
    };
