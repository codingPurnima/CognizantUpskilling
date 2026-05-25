import java.util.*;
public class StringReversal {
    static StringBuilder reverse(String str){
        StringBuilder sb= new StringBuilder(str);
        return sb.reverse();
    }
    static String reverseString(String str){
        String rev="";
        for(int i= str.length()-1; i>=0; i--){
            rev= rev+ str.charAt(i);
        }
        return rev;
    }
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter a string");
        String str= sc.nextLine();
        System.out.println("Reversed String (using loop): "+ reverseString(str));
        System.out.println("Reversed String (using StringBuilder): "+ reverse(str));

    }
}
