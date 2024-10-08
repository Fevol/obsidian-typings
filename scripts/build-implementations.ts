import builtins from 'builtin-modules';
import esbuild from 'esbuild';
import { existsSync } from 'node:fs';
import { join } from 'node:path/posix';
import process from 'node:process';

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
*/
`;

const context = await esbuild.context({
    banner: {
        js: banner
    },
    entryPoints: ['src/obsidian/implementations/index.ts'],
    bundle: true,
    external: [
        'obsidian',
        'electron',
        '@codemirror/autocomplete',
        '@codemirror/collab',
        '@codemirror/commands',
        '@codemirror/language',
        '@codemirror/lint',
        '@codemirror/search',
        '@codemirror/state',
        '@codemirror/view',
        '@lezer/common',
        '@lezer/highlight',
        '@lezer/lr',
        ...builtins
    ],
    format: 'cjs',
    target: 'ESNext',
    logLevel: 'info',
    sourcemap: 'inline',
    treeShaking: true,
    outfile: 'dist/implementations.cjs',
    plugins: [
        {
            name: 'typescript-resolution',
            setup(build) {
                build.onResolve({ filter: /\.js$/ }, args => {
                    const extensions = ['.ts', '.d.ts'];
                    for (const ext of extensions) {
                        const fullPath = join(args.resolveDir.replace(/\\/g, '/'), args.path.replace('.js', ext));
                        if (existsSync(fullPath)) {
                            return { path: fullPath };
                        }
                    }
                    return null;
                });
            }
        }
    ]
});

await context.rebuild();
process.exit(0);
