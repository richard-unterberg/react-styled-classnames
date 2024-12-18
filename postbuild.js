import fs from "fs";

/*

declare const _default: RscComponentFactory;
export { type RscInputComponent, _default as default };

*/

let content = fs.readFileSync("./dist/index.d.ts", "utf-8");
content = content.replace(/declare const _default:/, "declare const rsc:");
content = content.replace(/export { type RscBaseComponent, _default as default };/, "export { type RscBaseComponent }; export default rsc;");

// todo: this is a workaround for a bug in rollup-plugin-dts which export default being renamed to _default
fs.writeFileSync("./dist/index.d.ts", content, "utf-8");
console.log("Patched index.d.ts to replace _default with rsc.");

// Remove the types folder
fs.rmSync("./dist/types", { recursive: true, force: true });
console.log("Removed dist/types folder.");
