module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
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
