import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:5000",
        changeOrigin: true, // This ensures that the host header is changed to the target URL.
        secure: false, // Keep secure false for local development (HTTPS proxying isn't needed here)
      },
    },
  },
  plugins: [react()],
});
