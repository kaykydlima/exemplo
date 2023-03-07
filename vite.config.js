import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

export default defineConfig({
    root: root,
    build: {
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                categorias: resolve(root, 'paginas/categorias/index.html'),
                produtos: resolve(root, 'paginas/produtos/index.html'),
                clientes: resolve(root, 'paginas/clientes/index.html')
            },
        }
    }
});