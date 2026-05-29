import java.util.Scanner;

public class DivideByZero {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter two numbers: ");
            int x= sc.nextInt();
            int y= sc.nextInt();
            try{
                System.out.println("Result:"+ (x/y));
            } catch(ArithmeticException e){
                System.out.println("Cannot divide by zero");
            }
        }
        
    }
}
