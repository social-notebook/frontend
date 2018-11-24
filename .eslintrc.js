// See documents at https://eslint.org/docs/user-guide/configuring
module.exports = {
  "extends": ["airbnb", "prettier"],  // extend the set of enabled rules
  "plugins": ["react", "prettier", "import", "jsx-a11y"],  // exports rules
  "env": {  // defines global variables that are predefined
    "node": true,  // Node.js global variables and Node.js scoping
    "browser": true,  // browser global variables
    "es6": true  // enable all ECMAScript 6 features 
  },
  "rules": {
    "no-param-reassign": 0,
    "react/prefer-stateless-function": 0,
    "react/no-array-index-key": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-for": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]  // allow JSX syntax in .js and .jsx
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  }
}
