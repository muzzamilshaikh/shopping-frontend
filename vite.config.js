// @ts-check
import reactPlugin from "vite-plugin-react";

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: "react",
  plugins: [reactPlugin],
  optimizeDeps: {
    include: ["redux-persist/lib/storage", "redux-persist/integration/react"],
  },
};

export default config;
