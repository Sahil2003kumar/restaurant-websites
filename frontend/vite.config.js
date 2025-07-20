// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   base: "/", // 👈 Add this line
//   plugins: [react()],
// })
// npm run 


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/", // ⚠️ is line ke baad kuch nahi hona chahiye
  plugins: [react()],
});
