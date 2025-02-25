import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/semeler.github.io/', // Altere para o nome exato do repositório no GitHub
});
