import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// base 必須對應 GitHub repo 名稱:Project Pages 部署於
// https://<username>.github.io/<repo-name>/,因此資源路徑要加上 repo 前綴。
// 若 repo 改名,只需修改下方 REPO_NAME。
const REPO_NAME = 'AiDesign'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
})
