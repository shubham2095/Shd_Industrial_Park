import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    // In development, forward API calls to the Express server.
    proxy: {
      "/api": {
        target: `http://localhost:${process.env.API_PORT || 5000}`,
        changeOrigin: true,
      },
    },
  },
});
