// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var equals: any;
declare var not_equals: any;
declare var sum: any;
declare var minus: any;
declare var times: any;
declare var divide: any;
declare var lparen: any;
declare var rparen: any;
declare var number: any;

import lexer from './lexer.ts';

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: lexer,
  ParserRules: [
    {"name": "input", "symbols": ["comparison"], "postprocess": id},
    {"name": "comparison", "symbols": ["arithmetic", (lexer.has("equals") ? {type: "equals"} : equals), "arithmetic"], "postprocess": ([lhs, _, rhs]) => lhs === rhs},
    {"name": "comparison", "symbols": ["arithmetic", (lexer.has("not_equals") ? {type: "not_equals"} : not_equals), "arithmetic"], "postprocess": ([lhs, _, rhs]) => lhs !== rhs},
    {"name": "arithmetic", "symbols": ["arithmetic", (lexer.has("sum") ? {type: "sum"} : sum), "term"], "postprocess": ([lhs, _, rhs]) => lhs + rhs},
    {"name": "arithmetic", "symbols": ["arithmetic", (lexer.has("minus") ? {type: "minus"} : minus), "term"], "postprocess": ([lhs, _, rhs]) => lhs - rhs},
    {"name": "arithmetic", "symbols": ["term"], "postprocess": id},
    {"name": "term", "symbols": ["term", (lexer.has("times") ? {type: "times"} : times), "factor"], "postprocess": ([lhs, _, rhs]) => lhs * rhs},
    {"name": "term", "symbols": ["term", (lexer.has("divide") ? {type: "divide"} : divide), "factor"], "postprocess": ([lhs, _, rhs]) => lhs / rhs},
    {"name": "term", "symbols": ["factor"], "postprocess": id},
    {"name": "factor", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen), "arithmetic", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": (data) => data[1]},
    {"name": "factor", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": ([num]) => Number(num.value)}
  ],
  ParserStart: "input",
};

export default grammar;
