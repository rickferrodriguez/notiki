import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import typescriptParser from '@typescript-eslint/parser'; // Importación corregida
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
    // Configuración para JavaScript y JSX
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                browser: true,
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
            'react/prop-types': 'off', // Desactiva PropTypes (usamos TypeScript)
            'no-console': 'warn',
        },
    },
    // Configuración para TypeScript y TSX
    {
        files: ['**/*.ts', '**/*.tsx', 'types/**/*'], // Incluye el directorio types/
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                browser: true,
                React: 'readonly',
            },
            parser: typescriptParser, // Usa el parser de TypeScript
            parserOptions: {
                project: './tsconfig.json', // Apunta a tu tsconfig
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            prettier: prettierPlugin,
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...typescriptPlugin.configs.recommended.rules, // Reglas de TypeScript
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' },
            ], // Ignore unused vars starting with _
            'no-console': 'warn',
        },
    },
];
