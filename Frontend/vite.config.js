import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LMS-USING-REACT/',   // 🔥 MUST MATCH REPO NAME
})