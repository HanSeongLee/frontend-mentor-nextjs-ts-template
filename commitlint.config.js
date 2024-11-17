module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'never', 72],
        'body-leading-blank': [2, 'never'],
        'body-max-line-length': [1, 'never', 100],
        'body-max-length': [1, 'never', 400],
        'footer-leading-blank': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'style',
                'chore',
                'ci',
                'refactor',
                'revert',
                'test',
                'remove',
                'move',
                'docs',
                'perf',
            ],
        ],
    },
};
