import { css } from "catom";

export const root = css({
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingTop: "2rem",
});

export const center = css({ margin: "auto", textAlign: "center" });

export const input = css({
  width: "100%",
  outline: "none",
  border: "2px solid #d4d4d4",
  padding: "0.5rem",
  borderRadius: "5px",
  transition: "0.3s ease",
  pseudo: {
    ":focus": {
      borderColor: "var(--border)",
    },
  },
});

export const inputContainer = css({
  marginRight: "auto",
  marginTop: "1rem",
  marginBottom: "1rem",
  marginLeft: "auto",
  width: "90vw",
  maxWidth: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // flexDirection: "column",
});

const buttonBase = css({
  display: "inline-flex",
  alignItems: "center",
  border: "2px solid var(--border)",
  borderRadius: "5px",
  justifyContent: "center",
  paddingBottom: "0.25rem",
  paddingTop: "0.25rem",
  paddingLeft: ".5rem",
  paddingRight: ".5rem",
});
export const actionButton = [
  buttonBase,
  css({
    marginTop: ".5rem",
    marginBottom: ".5rem",
    width: "100%",
  }),
].join(" ");

export const iconButton = [buttonBase, css({ marginLeft: "1rem" })].join(" ");
