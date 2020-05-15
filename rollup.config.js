import path from 'path';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import { uglify } from 'rollup-plugin-uglify';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const { version, name, author } = pkg;

const banner = `/*!
* ${name} v${version}
* (c) ${new Date().getFullYear()} ${author}
*/`;

const resolve = p => {
    return path.resolve(__dirname, p);
}

const pluginsCommon = [
    commonjs({
        // polyfill async/await
        'node_modules/@babel/runtime/helpers/asyncToGenerator.js': ['default']
    }),
    nodeResolve({
        module: false,
    }),
    babel({
        runtimeHelpers: true,
    }),
]

export default [
    {
        input: resolve('src/index.js'),
        plugins: pluginsCommon.concat([
            cleanup(),
        ]),
        output: {
            file: resolve(`dist/fooky-${version}.js`),
            format: 'umd',
            name: 'fooky',
            banner,
        },
        external:[
          'react', 'yup'
        ]
    },
    {
        input: resolve('src/index.js'),
        plugins: pluginsCommon.concat([
            uglify(),
        ]),
        output: {
            file: resolve(`dist/fooky-${version}.min.js`),
            format: 'umd',
            name: 'fooky',
            banner,
        },
        external:[
          'react', 'yup'
        ]
    },
    {
        input: resolve('src/index.js'),
        plugins: pluginsCommon.concat([
            cleanup(),
        ]),
        output: [
            {
                file: resolve(`dist/fooky.es.js`),
                format: 'es',
                banner,
            },
            {
                file: resolve(`dist/fooky.js`),
                format: 'cjs',
                banner,
            }
        ],
        external:[
          'react', 'yup'
        ]
    },
];
