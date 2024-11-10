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
    includeAssets: ["/android", "/ios", "/./windows11"],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQaXRlclxcXFxEb2N1bWVudHNcXFxcdGllbmRhX3BlZHJvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQaXRlclxcXFxEb2N1bWVudHNcXFxcdGllbmRhX3BlZHJvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QaXRlci9Eb2N1bWVudHMvdGllbmRhX3BlZHJvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgVml0ZVBXQSh7XG4gICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgZGV2T3B0aW9uczoge1xuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgXG4gICAgfSxcbiAgICBpbmplY3RSZWdpc3RlcjogJ2F1dG8nLFxuICAgIGluY2x1ZGVBc3NldHM6IFsnL2FuZHJvaWQnLCAnL2lvcycsICcvLi93aW5kb3dzMTEnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdUaWVuZGEgUGVkcm8nLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVGllbmRhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdWZW50YXMnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBcImljb25zXCI6IFtcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NtYWxsVGlsZS5zY2FsZS0xMDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNzF4NzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TbWFsbFRpbGUuc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjg5eDg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU21hbGxUaWxlLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxMDd4MTA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU21hbGxUaWxlLnNjYWxlLTIwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNDJ4MTQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU21hbGxUaWxlLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyODR4Mjg0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlMTUweDE1MExvZ28uc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE1MHgxNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmUxNTB4MTUwTG9nby5zY2FsZS0xMjUucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTg4eDE4OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyMjV4MjI1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlMTUweDE1MExvZ28uc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjMwMHgzMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmUxNTB4MTUwTG9nby5zY2FsZS00MDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjAweDYwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0xMDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzEweDE1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0xMjUucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzg4eDE4OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0xNTAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDY1eDIyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0yMDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjIweDMwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS00MDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTI0MHg2MDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjMxMHgzMTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjM4OHgzODhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtMTUwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ2NXg0NjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjYyMHg2MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtNDAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjEyNDB4MTI0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5zY2FsZS0xMDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDR4NDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjU1eDU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2Nng2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5zY2FsZS0yMDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiODh4ODhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uc2NhbGUtNDAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE3NngxNzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjUweDUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3RvcmVMb2dvLnNjYWxlLTEyNS5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2M3g2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1N0b3JlTG9nby5zY2FsZS0xNTAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNzV4NzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjEwMHgxMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtNDAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjIwMHgyMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcGxhc2hTY3JlZW4uc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjYyMHgzMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcGxhc2hTY3JlZW4uc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjc3NXgzNzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcGxhc2hTY3JlZW4uc2NhbGUtMTUwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjkzMHg0NTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcGxhc2hTY3JlZW4uc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjEyNDB4NjAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyNDgweDEyMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS0xNi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNngxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTIwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjIweDIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMjQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjR4MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS0zMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzMHgzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTMyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjMyeDMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMzYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzZ4MzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS00MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI0MHg0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTQ0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQ0eDQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNDgucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDh4NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS02MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2MHg2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTY0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjY0eDY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNzIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNzJ4NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS04MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI4MHg4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTk2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjk2eDk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMjU2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI1NngyNTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTE2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE2eDE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS0yMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIyMHgyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjR4MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTMwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjMweDMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS0zMi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzMngzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMzYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzZ4MzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTQwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQweDQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS00NC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI0NHg0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNDgucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDh4NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTYwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjYweDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS02NC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2NHg2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNzIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNzJ4NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTgwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjgweDgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS05Ni5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI5Nng5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjU2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI1NngyNTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMTYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTZ4MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMjAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjB4MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMjQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjR4MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMzAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzB4MzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMzIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzJ4MzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMzYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMzZ4MzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNDAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDB4NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNDQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDR4NDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNDgucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDh4NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNjAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjB4NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNjQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjR4NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNzIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNzJ4NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtODAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiODB4ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtOTYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiOTZ4OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMjU2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI1NngyNTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2FuZHJvaWQvYW5kcm9pZC1sYXVuY2hlcmljb24tNTEyLTUxMi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI1MTJ4NTEyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9hbmRyb2lkL2FuZHJvaWQtbGF1bmNoZXJpY29uLTE5Mi0xOTIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTkyeDE5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vYW5kcm9pZC9hbmRyb2lkLWxhdW5jaGVyaWNvbi0xNDQtMTQ0LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE0NHgxNDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2FuZHJvaWQvYW5kcm9pZC1sYXVuY2hlcmljb24tOTYtOTYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiOTZ4OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2FuZHJvaWQvYW5kcm9pZC1sYXVuY2hlcmljb24tNzItNzIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNzJ4NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2FuZHJvaWQvYW5kcm9pZC1sYXVuY2hlcmljb24tNDgtNDgucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNDh4NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xNi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNngxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzIwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjIweDIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMjkucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMjl4MjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8zMi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIzMngzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzQwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjQweDQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvNTAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNTB4NTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy81Ny5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI1N3g1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzU4LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjU4eDU4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvNjAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNjB4NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy82NC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI2NHg2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzcyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjcyeDcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvNzYucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNzZ4NzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy84MC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCI4MHg4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzg3LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjg3eDg3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMTAwLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjEwMHgxMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xMTQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTE0eDExNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzEyMC5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxMjB4MTIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMTI4LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjEyOHgxMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xNDQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTQ0eDE0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzE1Mi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxNTJ4MTUyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMTY3LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE2N3gxNjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy8xODAucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTgweDE4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzE5Mi5wbmdcIixcbiAgICAgIFwic2l6ZXNcIjogXCIxOTJ4MTkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic3JjXCI6IFwiLi9pb3MvMjU2LnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjI1NngyNTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCIuL2lvcy81MTIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNTEyeDUxMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcIi4vaW9zLzEwMjQucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiMTAyNHgxMDI0XCJcbiAgICB9XG4gIFxuICBdXG4gICAgICB9XG4gICAgXG4gIH0pXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJTLFNBQVMsb0JBQW9CO0FBQ3hVLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVE7QUFBQSxJQUN6QixjQUFjO0FBQUEsSUFDZCxZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsSUFFWDtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsSUFDaEIsZUFBZSxDQUFDLFlBQVksUUFBUSxjQUFjO0FBQUEsSUFDaEQsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ2I7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFFRjtBQUFBLElBQ0k7QUFBQSxFQUVKLENBQUMsQ0FBQztBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
