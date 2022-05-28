module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: '16.13.1',
        },
    },
    plugins: [
        'import',
        'notice',
        'security',
        'lodash',
        '@typescript-eslint',
        'react-hooks',
        'format-message',
        'emotion',
        'jsx-a11y',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    rules: {
        // typescript
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',

        // TODO: починить все места с предупреждениями и убрать их игнорирование
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // eslint rules
        'no-dupe-class-members': 'off',
        'prefer-const': 'error',
        'no-var': 'error',
        'no-console': 'warn',
        'dot-notation': 'error',
        yoda: 'error',
        // eqeqeq: 'error',

        // plugin: import
        'import/first': 'error',
        'import/order': ['error', { 'newlines-between': 'always' }],

        // security
        'security/detect-buffer-noassert': 'error',
        'security/detect-child-process': 'error',
        'security/detect-disable-mustache-escape': 'error',
        'security/detect-eval-with-expression': 'error',
        'security/detect-new-buffer': 'error',
        'security/detect-no-csrf-before-method-override': 'error',

        // TODO: на билд-сервере не работает сборка, если отключать это правило построчно, поэтому пока выключено глобально
        'security/detect-non-literal-fs-filename': 'warn',

        'security/detect-non-literal-regexp': 'error',
        'security/detect-non-literal-require': 'error',
        'security/detect-object-injection': 'off',
        'security/detect-possible-timing-attacks': 'error',
        'security/detect-pseudoRandomBytes': 'error',
        'security/detect-unsafe-regex': 'warn',

        // lodash
        'lodash/callback-binding': 'error',
        'lodash/collection-method-value': 'error',
        'lodash/collection-return': 'error',
        'lodash/no-double-unwrap': 'error',
        'lodash/no-extra-args': 'error',
        'lodash/no-unbound-this': 'error',
        'lodash/unwrap': 'error',
        'lodash/identity-shorthand': 'error',
        'lodash/import-scope': ['error', 'method'],
        'lodash/matches-prop-shorthand': 'error',
        'lodash/matches-shorthand': 'error',
        'lodash/path-style': 'error',
        'lodash/prefer-compact': 'error',
        'lodash/prefer-flat-map': 'error',
        'lodash/prefer-immutable-method': 'error',
        'lodash/prefer-map': 'error',
        'lodash/prefer-reject': 'error',
        'lodash/preferred-alias': 'error',
        'lodash/prop-shorthand': 'error',

        // format message
        'format-message/literal-pattern': 'error',
        'format-message/no-invalid-pattern': 'error',
        'format-message/no-missing-params': ['error', { allowNonLiteral: false }],

        // react hooks
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'error',

        // react
        'react/display-name': 'off',
        'react/no-danger': 'error',
        'react/no-deprecated': 'warn',
        'react/prop-types': 'warn',
        'react/no-unknown-property': 'error',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-props.md
        'react/jsx-sort-props': [
            'error',
            { callbacksLast: true, ignoreCase: true, shorthandFirst: true, reservedFirst: true },
        ],

        // emotion
        'emotion/jsx-import': 'error',

        // jsx-a11y
        // taken from https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/src/index.js
        'jsx-a11y/accessible-emoji': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-role': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/control-has-associated-label': [
            'off',
            {
                ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
                ignoreRoles: [
                    'grid',
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'row',
                    'tablist',
                    'toolbar',
                    'tree',
                    'treegrid',
                ],
                includeRoles: ['alert', 'dialog'],
            },
        ],
        'jsx-a11y/heading-has-content': 'warn',
        'jsx-a11y/html-has-lang': 'warn',
        'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/img-redundant-alt': 'warn',
        'jsx-a11y/interactive-supports-focus': [
            'warn',
            {
                tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox'],
            },
        ],
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/media-has-caption': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/no-access-key': 'warn',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-distracting-elements': 'warn',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
            'warn',
            {
                tr: ['none', 'presentation'],
            },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
            'warn',
            {
                handlers: ['onClick', 'onError', 'onLoad', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
                alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
                body: ['onError', 'onLoad'],
                dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
                iframe: ['onError', 'onLoad'],
                img: ['onError', 'onLoad'],
            },
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
            'warn',
            {
                ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
                ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
                li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
                table: ['grid'],
                td: ['gridcell'],
            },
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
            'warn',
            {
                tags: [],
                roles: ['tabpanel'],
                allowExpressionValues: true,
            },
        ],
        'jsx-a11y/no-onchange': 'warn',
        'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/no-static-element-interactions': [
            'off',
            {
                allowExpressionValues: true,
                handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
            },
        ],
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/scope': 'warn',
        'jsx-a11y/tabindex-no-positive': 'warn',
    },
    overrides: [
        {
            files: ['**/*.+(test|spec).+(js|jsx|ts|tsx)'],
            env: {
                jest: true,
            },
            rules: {
                '@typescript-eslint/ban-ts-ignore': 'off',
                '@typescript-eslint/no-object-literal-type-assertion': 'off',
                '@typescript-eslint/unbound-method': 'off',

                'security/detect-buffer-noassert': 'off',
                'security/detect-child-process': 'off',
                'security/detect-disable-mustache-escape': 'off',
                'security/detect-eval-with-expression': 'off',
                'security/detect-new-buffer': 'off',
                'security/detect-no-csrf-before-method-override': 'off',
                'security/detect-non-literal-fs-filename': 'off',
                'security/detect-non-literal-regexp': 'off',
                'security/detect-non-literal-require': 'off',
                'security/detect-object-injection': 'off',
                'security/detect-possible-timing-attacks': 'off',
                'security/detect-pseudoRandomBytes': 'off',
                'security/detect-unsafe-regex': 'off',
            },
        },
        {
            files: ['**/*.+(ts|tsx)'],
            rules: {
                'react/prop-types': 'off',
            },
        },
        {
            files: ['**/*.+(test|spec).+(js|jsx|ts|tsx)'],
            rules: {
                'react/display-name': 'off',
                'react/prop-types': 'off',
                'react/no-danger': 'off',
            },
        },
    ],
};
