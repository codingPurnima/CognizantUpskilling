import java.util.*;
public class PalindromeString {

    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter a string");
            String str= sc.nextLine();

            str= str.replaceAll("[^0-9a-z]", "").toLowerCase();

            String rev= new StringBuilder(str).reverse().toString();
            if(rev.equals(str)){
                System.out.println("Palindrome");
            }
            else{
                System.out.println("Not Palindrome");
            }
        }
    }
}
