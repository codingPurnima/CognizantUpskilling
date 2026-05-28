import java.util.*;
public class ArrayListExample {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            ArrayList<String> names= new ArrayList<>();
            System.out.println("Enter the number of names: ");
            int n= sc.nextInt();
            sc.nextLine(); // without this, the Enter key isn't consumed and hence the buffer still contains \n. This leads to one less value being accepted in the next step (as the first nextLine() consumes an empty string as input)

            System.out.println("Enter names one by one");
            for(int i=0; i<n; i++){
                String name= sc.nextLine();
                names.add(name);
            }
            System.out.println(names);
        }
    }
}
