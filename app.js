
import { DefaultRubyVM as vm } from "@ruby/wasm-wasi/dist/node";

const path = "./node_modules/@ruby/head-wasm-wasi/dist/ruby+stdlib.wasm";

await vm(await WebAssembly.compile(await Bun.file(path).arrayBuffer()));
