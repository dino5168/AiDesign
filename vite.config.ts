import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//
// base 必須對應 GitHub repo 名稱:Project Pages 部署於
// https://<username>.github.io/<repo-name>/,因此資源路徑要加上 repo 前綴。
// 若 repo 改名,只需修改下方 REPO_NAME。
const REPO_NAME = 'AiDesign'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${REPO_NAME}/`,
  resolve: {
    // shadcn/ui 使用 '@/...' 絕對匯入,對應到 src 目錄
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
