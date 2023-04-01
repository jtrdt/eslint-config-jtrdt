module.exports = {
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  plugins: [
    'react'
  ],
  rules: {
    camelcase: ['warn'],
    eqeqeq: ['error'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': ['error', 'line-aligned'],
    'react/jsx-curly-brace-presence': [2, { props: 'always' }],
    'react/jsx-curly-newline': ['error', { multiline: 'forbid' }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error'],
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/prop-types': ['warn'],
    semi: ['error', 'always'],
    'standard/no-callback-literal': [0]
  }
}
