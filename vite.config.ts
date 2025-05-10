import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ocado-shop/",
  plugins: [react()],
  publicDir: "dist/", // 🚀 Wymusza umieszczenie plików bezpośrednio w dist/
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        orderConfirmation: "public/order-confirmation.html"
      }
    }
  }
});