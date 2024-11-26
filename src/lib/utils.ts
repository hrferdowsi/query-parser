import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import nearley from 'nearley'
import grammar from './grammar'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeInput (input: string) {
  return input.replace(/\s+/g, '')
}

export function evaluateExpression (input: string): EvaluateExpressionOut {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  try {
    parser.feed(sanitizeInput(input))
    return { results: parser.results, errMessage: null }
  } catch (parseError: any) {
    return {
      errMessage: `Invalid token {${parseError.token}} at character ${parseError.offset} `,
      results: []
    }
  }
}
