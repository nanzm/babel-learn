const chalk = require('chalk');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const { dumpJson } = require('./utils');

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
           func();
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;


const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: [ 'jsx' ]
});

traverse(ast, {
  CallExpression(path, state) {
    if (path.node.callee.name === 'func') {
      console.log(path.node.callee)
    }
  }
});

const { code } = generate(ast);
console.log(chalk.green(code));
