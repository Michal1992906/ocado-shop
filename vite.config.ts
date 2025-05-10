import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ocado-shop/",
  plugins: [react()],
  publicDir: "", // 🚀 Wyłącz automatyczne kopiowanie do dist/public/
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        orderConfirmation: "public/order-confirmation.html"
      }
    }
  }
});
