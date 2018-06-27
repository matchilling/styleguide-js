module.exports = {
  extends : [
    'eslint-config-airbnb-base'
  ].map(require.resolve),
  globals : {
    after      : true,
    afterEach  : true,
    before     : true,
    beforeEach : true,
    it         : true,
    describe   : true
  },
  rules : {
    /**
     * @see http://eslint.org/docs/rules/brace-style
     */
    'brace-style' : ['error', '1tbs', {
      allowSingleLine : true
    }],

    /**
     * @see http://eslint.org/docs/rules/brace-style
     */
    'comma-dangle' : ['error', 'never'],

    /**
     * @see http://eslint.org/docs/rules/func-names
     */
    'func-names' : ['error', 'never'],

    /**
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies' : ['error', {
      devDependencies      : true,
      optionalDependencies : false
    }],

    /**
     * @see http://eslint.org/docs/rules/indent
     */
    indent : ['error', 2, {
      VariableDeclarator : {
        var   : 2,
        let   : 2,
        const : 3
      }
    }],

    /**
     * @see http://eslint.org/docs/rules/key-spacing
     */
    'key-spacing' : ['error', {
      afterColon  : true,
      beforeColon : true,
      align       : 'colon'
    }],

    /**
     * @see http://eslint.org/docs/rules/no-continue
     */
    'no-continue' : 'off',

    /**
     * @see http://eslint.org/docs/rules/no-prototype-builtins
     */
    'no-prototype-builtins' : 'off',

    /**
     * @see http://eslint.org/docs/rules/no-use-before-define
     */
    'no-use-before-define' : 'off',

    /**
     * @see http://eslint.org/docs/rules/object-curly-newline
     */
    'object-curly-newline' : ['error', {
      ObjectExpression : 'always',
      ObjectPattern    : 'never'
    }],

    /**
     * @see http://eslint.org/docs/rules/one-var
     */
    'one-var' : ['warn', 'always'],

    /**
     * @see http://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params' : 'off',

    /**
     * @see http://eslint.org/docs/rules/quotes
     */
    quotes : ['error', 'single'],

    /**
     * @see http://eslint.org/docs/rules/quote-props
     */
    'quote-props' : ['warn', 'as-needed', {
      keywords    : false,
      unnecessary : true
    }],

    /**
     * @see http://eslint.org/docs/rules/strict
     */
    strict : 'off',

    /**
     * @see http://eslint.org/docs/rules/yoda
     */
    yoda : ['error', 'always']
  }

};
