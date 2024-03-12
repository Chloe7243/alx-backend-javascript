export default function cleanSet(set, startString) {
  return startString !== "" &&
    set instanceof Set &&
    typeof startString === "string"
    ? Array.from(set)
        .filter(
          (string) =>
            typeof string === "string" && string.startsWith(startString)
        )
        .map((string) => string.slice(startString.length))
        .join("-")
    : "";
}
