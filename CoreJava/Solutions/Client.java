import java.net.*;
import java.io.*;

public class Client {

    public static void main(String[] args) {

        try {

            Socket s = new Socket("localhost", 5000);

            PrintWriter out =
                    new PrintWriter(
                            s.getOutputStream(),
                            true);

            out.println("Hello Server");

            s.close();

        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}