import java.net.*;
import java.io.*;

public class Server {

    public static void main(String[] args) {

        try {

            ServerSocket ss = new ServerSocket(5000);

            System.out.println("Server waiting...");

            Socket s = ss.accept();

            BufferedReader br =
                    new BufferedReader(
                            new InputStreamReader(
                                    s.getInputStream()));

            String msg = br.readLine();

            System.out.println("Client says: " + msg);

            s.close();
            ss.close();

        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}