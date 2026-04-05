/* import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel({
        analytics: true
    })
}); */
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; 

export default defineConfig({
  output: 'server', // atau 'hybrid'
  adapter: vercel(), 
});