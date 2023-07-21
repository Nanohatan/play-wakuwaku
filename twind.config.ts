import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      MyViolet: "#525FE1", // カスタムカラーを定義
      MyOrange: "#F86F03",
      MyOrangeLighter:"#FFA41B", // 別のカスタムカラーを定義
      MyWhite:"#FFF6F4",
      // 他のカスタムカラーを必要に応じて追加
    },
  },
} as Options;
