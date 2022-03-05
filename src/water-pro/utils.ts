import type { SideEffectsInfo } from "unplugin-vue-components";
import { matchComponents } from "./comp-type";
import { WaterProResolverOptions } from "./types";

export const kebabCase = (key: string): string => {
  const result = key.replace(/([A-Z])/g, " $1").trim();
  return result.split(" ").join("-").toLowerCase();
};

export function getStyleDir(compName: string): string {
  let styleDir;
  const total = matchComponents.length;
  for (let i = 0; i < total; i++) {
    const matcher = matchComponents[i];
    if (compName.match(matcher.pattern)) {
      styleDir = matcher.styleDir;
      break;
    }
  }
  if (!styleDir) styleDir = kebabCase(compName);

  return styleDir;
}

export function getSideEffects(
  compName: string,
  options: WaterProResolverOptions
): SideEffectsInfo {
  const { importStyle = true, importLess = false } = options;

  if (!importStyle) return;
  const lib = options.cjs ? "lib" : "es";

  if (importStyle === "less" || importLess) {
    const styleDir = getStyleDir(compName);
    return `@fe6/water-pro/${lib}/${styleDir}/style`;
  } else {
    const styleDir = getStyleDir(compName);
    return `@fe6/water-pro/${lib}/${styleDir}/style/css`;
  }
}

const prefix = "A";

let waterProNames: Set<string>;

export function genWaterProNames(primitiveNames: string[]): void {
  waterProNames = new Set(primitiveNames.map((name) => `${prefix}${name}`));
}

export function isWaterPro(compName: string): boolean {
  return waterProNames.has(compName);
}
