export interface WaterProResolverOptions {
  /**
   * exclude components that do not require automatic import
   *
   * @default []
   */
  exclude?: string[];
  /**
   * import style along with components
   *
   * @default 'css'
   */
  importStyle?: boolean | "css" | "less";
  /**
   * resolve `water-pro' icons
   *
   * requires package `@fe6/icon-vue`
   *
   * @default false
   */
  resolveIcons?: boolean;

  /**
   * @deprecated use `importStyle: 'css'` instead
   */
  importCss?: boolean;
  /**
   * @deprecated use `importStyle: 'less'` instead
   */
  importLess?: boolean;

  /**
   * use commonjs build default false
   */
  cjs?: boolean;
}
