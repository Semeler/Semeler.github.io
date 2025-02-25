import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Semeler/meu-portfolio.git', // Altere para o nome do seu repositório
});
