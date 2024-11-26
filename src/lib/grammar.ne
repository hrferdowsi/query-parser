@preprocessor typescript

@{%
import lexer from './lexer.ts';
%}

@lexer lexer


input -> comparison {%id%}

comparison ->
    arithmetic %equals arithmetic {% ([lhs, _, rhs]) => lhs === rhs %}
  | arithmetic %not_equals arithmetic {% ([lhs, _, rhs]) => lhs !== rhs %}

arithmetic ->
    arithmetic %sum term {% ([lhs, _, rhs]) => lhs + rhs %}
  | arithmetic %minus term {% ([lhs, _, rhs]) => lhs - rhs %}
  | term {% id %}

term ->
    term %times factor {% ([lhs, _, rhs]) => lhs * rhs %}
  | term %divide factor {% ([lhs, _, rhs]) => lhs / rhs %}
  | factor {% id %}

factor ->
    %lparen arithmetic %rparen {% (data) => data[1] %}
  | %number {% ([num]) => Number(num.value) %}  
