// Some CJS packages (react-countup, react-fast-marquee, etc.) get their
// default export double-wrapped by this project's esbuild/Vite dependency
// pre-bundler: `import X from "pkg"` resolves to { default: <real component> }
// instead of the component itself.
//
// This helper unwraps any number of nested ".default" layers, but stops
// as soon as it finds something that looks like an actual React component
// (a function, or an object with a $$typeof — e.g. forwardRef/memo).
export function resolveDefaultExport(mod) {
  let m = mod;
  while (
    m &&
    typeof m === "object" &&
    !m.$$typeof &&
    "default" in m
  ) {
    m = m.default;
  }
  return m;
}