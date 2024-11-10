// vite.config.js
import { defineConfig } from "file:///C:/Users/Piter/Documents/tienda_pedro/.yarn/__virtual__/vite-virtual-205afa9c9a/3/AppData/Local/Yarn/Berry/cache/vite-npm-5.4.10-30d2e3a4e2-10c0.zip/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Piter/Documents/tienda_pedro/.yarn/__virtual__/@vitejs-plugin-react-virtual-22ed138a9e/3/AppData/Local/Yarn/Berry/cache/@vitejs-plugin-react-npm-4.3.3-36a77676a2-10c0.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true
    },
    injectRegister: "auto",
    includeAssets: ["/android", "/ios", "/windows11"],
    manifest: {
      name: "Tienda Pedro",
      short_name: "Tienda",
      description: "Ventas",
      theme_color: "#ffffff",
      "icons": [
        {
          "src": "./windows11/SmallTile.scale-100.png",
          "sizes": "71x71"
        },
        {
          "src": "./windows11/SmallTile.scale-125.png",
          "sizes": "89x89"
        },
        {
          "src": "./windows11/SmallTile.scale-150.png",
          "sizes": "107x107"
        },
        {
          "src": "./windows11/SmallTile.scale-200.png",
          "sizes": "142x142"
        },
        {
          "src": "./windows11/SmallTile.scale-400.png",
          "sizes": "284x284"
        },
        {
          "src": "./windows11/Square150x150Logo.scale-100.png",
          "sizes": "150x150"
        },
        {
          "src": "./windows11/Square150x150Logo.scale-125.png",
          "sizes": "188x188"
        },
        {
          "src": "./windows11/Square150x150Logo.scale-150.png",
          "sizes": "225x225"
        },
        {
          "src": "./windows11/Square150x150Logo.scale-200.png",
          "sizes": "300x300"
        },
        {
          "src": "./windows11/Square150x150Logo.scale-400.png",
          "sizes": "600x600"
        },
        {
          "src": "./windows11/Wide310x150Logo.scale-100.png",
          "sizes": "310x150"
        },
        {
          "src": "./windows11/Wide310x150Logo.scale-125.png",
          "sizes": "388x188"
        },
        {
          "src": "./windows11/Wide310x150Logo.scale-150.png",
          "sizes": "465x225"
        },
        {
          "src": "./windows11/Wide310x150Logo.scale-200.png",
          "sizes": "620x300"
        },
        {
          "src": "./windows11/Wide310x150Logo.scale-400.png",
          "sizes": "1240x600"
        },
        {
          "src": "./windows11/LargeTile.scale-100.png",
          "sizes": "310x310"
        },
        {
          "src": "./windows11/LargeTile.scale-125.png",
          "sizes": "388x388"
        },
        {
          "src": "./windows11/LargeTile.scale-150.png",
          "sizes": "465x465"
        },
        {
          "src": "./windows11/LargeTile.scale-200.png",
          "sizes": "620x620"
        },
        {
          "src": "./windows11/LargeTile.scale-400.png",
          "sizes": "1240x1240"
        },
        {
          "src": "./windows11/Square44x44Logo.scale-100.png",
          "sizes": "44x44"
        },
        {
          "src": "./windows11/Square44x44Logo.scale-125.png",
          "sizes": "55x55"
        },
        {
          "src": "./windows11/Square44x44Logo.scale-150.png",
          "sizes": "66x66"
        },
        {
          "src": "./windows11/Square44x44Logo.scale-200.png",
          "sizes": "88x88"
        },
        {
          "src": "./windows11/Square44x44Logo.scale-400.png",
          "sizes": "176x176"
        },
        {
          "src": "./windows11/StoreLogo.scale-100.png",
          "sizes": "50x50"
        },
        {
          "src": "./windows11/StoreLogo.scale-125.png",
          "sizes": "63x63"
        },
        {
          "src": "./windows11/StoreLogo.scale-150.png",
          "sizes": "75x75"
        },
        {
          "src": "./windows11/StoreLogo.scale-200.png",
          "sizes": "100x100"
        },
        {
          "src": "./windows11/StoreLogo.scale-400.png",
          "sizes": "200x200"
        },
        {
          "src": "./windows11/SplashScreen.scale-100.png",
          "sizes": "620x300"
        },
        {
          "src": "./windows11/SplashScreen.scale-125.png",
          "sizes": "775x375"
        },
        {
          "src": "./windows11/SplashScreen.scale-150.png",
          "sizes": "930x450"
        },
        {
          "src": "./windows11/SplashScreen.scale-200.png",
          "sizes": "1240x600"
        },
        {
          "src": "./windows11/SplashScreen.scale-400.png",
          "sizes": "2480x1200"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-16.png",
          "sizes": "16x16"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-20.png",
          "sizes": "20x20"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-24.png",
          "sizes": "24x24"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-30.png",
          "sizes": "30x30"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-32.png",
          "sizes": "32x32"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-36.png",
          "sizes": "36x36"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-40.png",
          "sizes": "40x40"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-44.png",
          "sizes": "44x44"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-48.png",
          "sizes": "48x48"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-60.png",
          "sizes": "60x60"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-64.png",
          "sizes": "64x64"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-72.png",
          "sizes": "72x72"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-80.png",
          "sizes": "80x80"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-96.png",
          "sizes": "96x96"
        },
        {
          "src": "./windows11/Square44x44Logo.targetsize-256.png",
          "sizes": "256x256"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          "sizes": "16x16"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          "sizes": "20x20"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          "sizes": "24x24"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          "sizes": "30x30"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          "sizes": "32x32"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          "sizes": "36x36"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          "sizes": "40x40"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          "sizes": "44x44"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          "sizes": "48x48"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          "sizes": "60x60"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          "sizes": "64x64"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          "sizes": "72x72"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          "sizes": "80x80"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          "sizes": "96x96"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          "sizes": "256x256"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          "sizes": "16x16"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          "sizes": "20x20"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          "sizes": "24x24"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          "sizes": "30x30"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          "sizes": "32x32"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          "sizes": "36x36"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          "sizes": "40x40"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          "sizes": "44x44"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          "sizes": "48x48"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          "sizes": "60x60"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          "sizes": "64x64"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          "sizes": "72x72"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          "sizes": "80x80"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          "sizes": "96x96"
        },
        {
          "src": "./windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          "sizes": "256x256"
        },
        {
          "src": "./android/android-launchericon-512-512.png",
          "sizes": "512x512"
        },
        {
          "src": "./android/android-launchericon-192-192.png",
          "sizes": "192x192"
        },
        {
          "src": "./android/android-launchericon-144-144.png",
          "sizes": "144x144"
        },
        {
          "src": "./android/android-launchericon-96-96.png",
          "sizes": "96x96"
        },
        {
          "src": "./android/android-launchericon-72-72.png",
          "sizes": "72x72"
        },
        {
          "src": "./android/android-launchericon-48-48.png",
          "sizes": "48x48"
        },
        {
          "src": "./ios/16.png",
          "sizes": "16x16"
        },
        {
          "src": "./ios/20.png",
          "sizes": "20x20"
        },
        {
          "src": "./ios/29.png",
          "sizes": "29x29"
        },
        {
          "src": "./ios/32.png",
          "sizes": "32x32"
        },
        {
          "src": "./ios/40.png",
          "sizes": "40x40"
        },
        {
          "src": "./ios/50.png",
          "sizes": "50x50"
        },
        {
          "src": "./ios/57.png",
          "sizes": "57x57"
        },
        {
          "src": "./ios/58.png",
          "sizes": "58x58"
        },
        {
          "src": "./ios/60.png",
          "sizes": "60x60"
        },
        {
          "src": "./ios/64.png",
          "sizes": "64x64"
        },
        {
          "src": "./ios/72.png",
          "sizes": "72x72"
        },
        {
          "src": "./ios/76.png",
          "sizes": "76x76"
        },
        {
          "src": "./ios/80.png",
          "sizes": "80x80"
        },
        {
          "src": "./ios/87.png",
          "sizes": "87x87"
        },
        {
          "src": "./ios/100.png",
          "sizes": "100x100"
        },
        {
          "src": "./ios/114.png",
          "sizes": "114x114"
        },
        {
          "src": "./ios/120.png",
          "sizes": "120x120"
        },
        {
          "src": "./ios/128.png",
          "sizes": "128x128"
        },
        {
          "src": "./ios/144.png",
          "sizes": "144x144"
        },
        {
          "src": "./ios/152.png",
          "sizes": "152x152"
        },
        {
          "src": "./ios/167.png",
          "sizes": "167x167"
        },
        {
          "src": "./ios/180.png",
          "sizes": "180x180"
        },
        {
          "src": "./ios/192.png",
          "sizes": "192x192"
        },
        {
          "src": "./ios/256.png",
          "sizes": "256x256"
        },
        {
          "src": "./ios/512.png",
          "sizes": "512x512"
        },
        {
          "src": "./ios/1024.png",
          "sizes": "1024x1024"
        }
      ]
    }
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQaXRlclxcXFxEb2N1bWVudHNcXFxcdGllbmRhX3BlZHJvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQaXRlclxcXFxEb2N1bWVudHNcXFxcdGllbmRhX3BlZHJvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QaXRlci9Eb2N1bWVudHMvdGllbmRhX3BlZHJvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgVml0ZVBXQSh7XG4gICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgZGV2T3B0aW9uczoge1xuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgXG4gICAgfSxcbiAgICBpbmplY3RSZWdpc3RlcjogJ2F1dG8nLFxuICAgIGluY2x1ZGVBc3NldHM6IFsnL2FuZHJvaWQnLCAnL2lvcycsICcvd2luZG93czExJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnVGllbmRhIFBlZHJvJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1RpZW5kYScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVmVudGFzJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgXCJpY29uc1wiOiBbXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TbWFsbFRpbGUuc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjcxeDcxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU21hbGxUaWxlLnNjYWxlLTEyNS5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI4OXg4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NtYWxsVGlsZS5zY2FsZS0xNTAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTA3eDEwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NtYWxsVGlsZS5zY2FsZS0yMDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTQyeDE0MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NtYWxsVGlsZS5zY2FsZS00MDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjg0eDI4NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTEwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNTB4MTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlMTUweDE1MExvZ28uc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE4OHgxODhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmUxNTB4MTUwTG9nby5zY2FsZS0xNTAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjI1eDIyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTIwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzMDB4MzAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlMTUweDE1MExvZ28uc2NhbGUtNDAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjYwMHg2MDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjMxMHgxNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjM4OHgxODhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtMTUwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ2NXgyMjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjYyMHgzMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtNDAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjEyNDB4NjAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTEwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzMTB4MzEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTEyNS5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzODh4Mzg4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI0NjV4NDY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTIwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2MjB4NjIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxMjQweDEyNDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ0eDQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTEyNS5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI1NXg1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5zY2FsZS0xNTAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjZ4NjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjg4eDg4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNzZ4MTc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3RvcmVMb2dvLnNjYWxlLTEwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI1MHg1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1N0b3JlTG9nby5zY2FsZS0xMjUucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjN4NjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMTUwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjc1eDc1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3RvcmVMb2dvLnNjYWxlLTIwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxMDB4MTAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3RvcmVMb2dvLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyMDB4MjAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTEwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2MjB4MzAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTEyNS5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI3NzV4Mzc1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI5MzB4NDUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTIwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxMjQweDYwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NwbGFzaFNjcmVlbi5zY2FsZS00MDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjQ4MHgxMjAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMTYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTZ4MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS0yMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyMHgyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTI0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI0eDI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMzAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzB4MzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS0zMi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzMngzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTM2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjM2eDM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDB4NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS00NC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI0NHg0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTQ4LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ4eDQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNjAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjB4NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS02NC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2NHg2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTcyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjcyeDcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtODAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiODB4ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS05Ni5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI5Nng5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTI1Ni5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyNTZ4MjU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS0xNi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNngxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjB4MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTI0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI0eDI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS0zMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzMHgzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMzIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzJ4MzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTM2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjM2eDM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS00MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI0MHg0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNDQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDR4NDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTQ4LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ4eDQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS02MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2MHg2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNjQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjR4NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTcyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjcyeDcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS04MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI4MHg4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtOTYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiOTZ4OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTI1Ni5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyNTZ4MjU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTE2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE2eDE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTIwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjIweDIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTI0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI0eDI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTMwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjMweDMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTMyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjMyeDMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTM2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjM2eDM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTQwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQweDQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTQ0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ0eDQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTQ4LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ4eDQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTYwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjYweDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTY0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjY0eDY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTcyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjcyeDcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTgwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjgweDgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTk2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjk2eDk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTI1Ni5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyNTZ4MjU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9hbmRyb2lkL2FuZHJvaWQtbGF1bmNoZXJpY29uLTUxMi01MTIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNTEyeDUxMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vYW5kcm9pZC9hbmRyb2lkLWxhdW5jaGVyaWNvbi0xOTItMTkyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2FuZHJvaWQvYW5kcm9pZC1sYXVuY2hlcmljb24tMTQ0LTE0NC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNDR4MTQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9hbmRyb2lkL2FuZHJvaWQtbGF1bmNoZXJpY29uLTk2LTk2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjk2eDk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9hbmRyb2lkL2FuZHJvaWQtbGF1bmNoZXJpY29uLTcyLTcyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjcyeDcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9hbmRyb2lkL2FuZHJvaWQtbGF1bmNoZXJpY29uLTQ4LTQ4LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ4eDQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMTYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTZ4MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8yMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyMHgyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzI5LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI5eDI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMzIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzJ4MzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy80MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI0MHg0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzUwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjUweDUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvNTcucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNTd4NTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy81OC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI1OHg1OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzYwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjYweDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvNjQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjR4NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy83Mi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI3Mng3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzc2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjc2eDc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvODAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiODB4ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy84Ny5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI4N3g4N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzEwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxMDB4MTAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMTE0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjExNHgxMTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xMjAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTIweDEyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzEyOC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxMjh4MTI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMTQ0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE0NHgxNDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xNTIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTUyeDE1MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzE2Ny5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNjd4MTY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMTgwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE4MHgxODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xOTIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTkyeDE5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzI1Ni5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyNTZ4MjU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvNTEyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjUxMng1MTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xMDI0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjEwMjR4MTAyNFwiXG4gICAgfVxuICBcbiAgXVxuICAgICAgfVxuICAgIFxuICB9KV0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUyxTQUFTLG9CQUFvQjtBQUN4VSxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRO0FBQUEsSUFDekIsY0FBYztBQUFBLElBQ2QsWUFBWTtBQUFBLE1BQ1YsU0FBUztBQUFBLElBRVg7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLElBQ2hCLGVBQWUsQ0FBQyxZQUFZLFFBQVEsWUFBWTtBQUFBLElBQzlDLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNiO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLE1BRUY7QUFBQSxJQUNJO0FBQUEsRUFFSixDQUFDLENBQUM7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
