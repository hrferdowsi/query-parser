import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { evaluateExpression } from '@/lib/utils';
import { labels } from '@/lib/constants';

const reset = '';

export function Parser() {
    const [expression, setExpression] = useState<string>(reset);
    const [result, setResult] = useState<string>(reset);
    
    const handleExpressInput = (e: { target: { value: string; }; }) => { setExpression(e.target.value); setResult(reset) };

    const handleEvaluate = () => {
        const { results, errMessage }: EvaluateExpressionOut = evaluateExpression(expression)
        if (errMessage) {
            setResult(errMessage)
        } else if (results.length > 1) {
            setResult('Ambiguous grammar')

        } else if (results.length === 0) {
            setResult('Invalid equation')

        } else {
            setResult(results[0] ? 'True' : 'False')
        }
    }

    const handleOnClear = () => {
        setExpression(reset);
        setResult(reset);
    }

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <CardTitle>Mathematical Equation Parser </CardTitle>
                <CardDescription>{labels["parser_description"]}</CardDescription>
                {labels["parser_rules"].map((r: string) => <CardDescription key={r}>{r}</CardDescription>)}
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <Label htmlFor="name">Equation</Label>
                    <Input id="name" placeholder="Type a valid equation" onChange={handleExpressInput} value={expression} />
                </div>
                {result.length > 0 &&
                    <div className="grid w-full items-center mt-3">
                        Result: {result}
                    </div>
                }
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                {expression.length > 0 &&
                    <Button variant="gost" onClick={handleOnClear} >Clear</Button>
                }
                <Button onClick={handleEvaluate} disabled={!isValidExpression(expression)}>Evaluate</Button>
            </CardFooter>
        </Card>
    )
}

function isValidExpression(input: string) {
    // Trim the input to remove unnecessary whitespace
    const trimmedInput = input.trim();

    // Check if the input contains either "=" or "!=" but not both
    const hasEqual = trimmedInput.includes("=");
    const hasNotEqual = trimmedInput.includes("!=");

    if (!(hasEqual || hasNotEqual)) {
        // If both or neither are present, return false
        return false;
    }

    // Find the position of "=" or "!="
    const operatorPosition = hasNotEqual
        ? trimmedInput.indexOf("!=")
        : trimmedInput.indexOf("=");

    // Extract the parts before and after the operator
    const beforeOperator = hasNotEqual
        ? trimmedInput.slice(0, operatorPosition).trim()
        : trimmedInput.slice(0, operatorPosition).trim();
    const afterOperator = hasNotEqual
        ? trimmedInput.slice(operatorPosition + 2).trim()
        : trimmedInput.slice(operatorPosition + 1).trim();

    // Validate that both sides contain at least one number
    const numberRegex = /\d/; // Matches any digit
    const isValidBefore = numberRegex.test(beforeOperator);
    const isValidAfter = numberRegex.test(afterOperator);

    return isValidBefore && isValidAfter;
}