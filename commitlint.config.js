module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'revert']],
      },
      formatter: function (results) {
        const result = results[0];
        if (result.valid) {
          console.log('Commitlint: Commit message format is correct.');
        } else {
          console.error('Commitlint: Commit message format is incorrect.');
          console.error('Errors:');
          result.errors.forEach(error => console.error('-', error.message));
        }
        process.exit(result.valid ? 0 : 1);
      }
  };
  