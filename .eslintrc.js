module.exports = {
    extends: ['pandora-typescript'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        '@typescript-eslint/no-inferrable-types': 0,
    },
};
