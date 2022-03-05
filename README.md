# @fe6/nvcr

Vue 3.x 组件库按需加载的配置

#### 📦 Pkgs

- [@fe6/water-pro](http://water-v4.chjgo.com/)

#### 用法

```js
// vite.config.js
import Components from "unplugin-vue-components/vite";
import { WaterProResolver } from "@fe6/nvcr";

// your vite config
export default {
  plugins: [
    Components({
      resolvers: [WaterProResolver()],
    }),
  ],
};
```
