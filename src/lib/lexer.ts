import moo from 'moo'

const lexer = moo.compile({
  ws: { match: /\s+/, lineBreaks: true },
  number: /[0-9]+(?:\.[0-9]+)?/,
  sum: '+',
  minus: '-',
  times: '*',
  divide: '/',
  equals: '=',
  not_equals: '!=',
  lparen: '(',
  rparen: ')',
  myError: moo.error
})

export default lexer
