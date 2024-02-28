// vitest.config.js
export default {
    include: [
        'src/**/*.spec.cy.js',
        'tests/**/*.vitest.js', // Assuming you added a tests directory for vitest
        '**/*.{test,spec}.?(c|m)[jt]s?(x)',
    ],
    exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,tsup,build,eslint,prettier}.config.*',
    ],
    watch: {
        exclude: '**/node_modules/**, **/dist/**',
    },
    beforeRun(config) {
        console.log('Included Files:', config.files);
        console.log('Excluded Files:', config.exclude);
    },
    // other configurations...
};
