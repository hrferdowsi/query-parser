export const labels = {
  parser_description:
    'This Parser evaluates mathematical expressions and determines whether they are true or false. The parser should handle both arithmetic operations and comparison operators, adhering to the rules of operator precedence and proper evaluation.',
  parser_rules: [
    '1. Arithmetic Operations: +, -, *, /',
    '2. Comparison Operators: =, !=',
    '3. Whitespace Ignoring: Whitespaces in the input string should not affect parsing.',
    '4. Arithmetic operators follow standard precedence:',
    '-- * and / have higher precedence than + and - .',
    '-- Comparison operators ( =, != ) are evaluated after arithmetic operations.'
  ]
}
