import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {

        // wrapping in try block, closes the scanner object automatically
        try(Scanner sc = new Scanner(System.in)){
            System.out.print("Enter first number: ");
        double a = sc.nextDouble();

        System.out.print("Enter second number: ");
        double b = sc.nextDouble();

        System.out.println("Choose operation (+, -, *, /): ");
        char op = sc.next().charAt(0);

        double result = 0;

        switch(op) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                System.out.println("Invalid operation");
                return;
        }
        System.out.println("Result = " + result);
        }        
    }
}
