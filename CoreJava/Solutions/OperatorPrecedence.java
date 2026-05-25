public class OperatorPrecedence {
    public static void main(String[] args) {
        int result= 10+5*3-8;
        System.out.println("Result:"+ result);
    }
}
// Order of operations: (10+(5*3)-8)
// Multiplication has higher precedence that addition and subtraction, so it happens first.
// Addition and Subtraction have equal precedence so any of them can happen first, depending on which comes first in the expression.