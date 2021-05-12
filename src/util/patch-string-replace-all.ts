export function patch() {
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (
      str: string | RegExp,
      newStr: string
    ): string {
      if (
        Object.prototype.toString.call(str).toLowerCase() === "[object regexp]"
      ) {
        return this.replace(str, newStr);
      }

      return this.replace(new RegExp(str, "g"), newStr);
    } as any;
  }
}
