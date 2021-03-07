// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        'generator-star-spacing': 'off',
        'no-unused-vars': 'off',
        'semi': ['error', 'always'],
        // 三等号
        'indent': ['error', 4],
        'eqeqeq': 0,
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': 0,
        // 关键字后面使用一致的空格
        'keyword-spacing': 0,
        // 强制在 function的左括号之前使用一致的空格
        'space-before-function-paren': 0,
        // 引号类型
        "quotes": [0, "single"],
        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-irregular-whitespace": ["error", { "skipComments": true }]
    }
};
