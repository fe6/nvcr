import type { ComponentResolver } from "unplugin-vue-components";
import { genWaterProNames, isWaterPro, getSideEffects } from "./utils";
import { primitiveNames } from "./comp-name";
import { WaterProResolverOptions } from "./types";

genWaterProNames(primitiveNames);

/**
 * Resolver for Water Pro
 *
 * Requires @fe6/water-pro@v4.0.0 or later
 *
 * @author @tianyi
 * @link http://water-v4.chjgo.com/
 */
export function WaterProResolver(options: WaterProResolverOptions = {}): ComponentResolver {
  return {
    type: "component",
    resolve: (name: string) => {
      if (options.resolveIcons && name.match(/(Antd|Byted)$/)) {
        return {
          importName: name,
          path: "@fe6/icon-vue",
        };
      }

      if (isWaterPro(name) && !options?.exclude?.includes(name)) {
        const importName = name.slice(1);
        const { cjs = false } = options;
        const path = `@fe6/water-pro/${cjs ? "lib" : "es"}`;
        return {
          importName,
          path,
          sideEffects: getSideEffects(importName, options),
        };
      }
    },
  };
}
