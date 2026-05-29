import java.lang.reflect.*;

class Test {

    public void display() {

        System.out.println("Hello Reflection");

    }
}

public class ReflectionExample {

    public static void main(String[] args) {

        try {

            Class<?> c = Class.forName("Test");

            Method[] methods =
                    c.getDeclaredMethods();

            for(Method m : methods) {

                System.out.println(m.getName());

            }

            Object obj =
                    c.getDeclaredConstructor()
                            .newInstance();

            Method m = c.getMethod("display");

            m.invoke(obj);

        }
        catch(Exception e) {

            System.out.println(e);

        }
    }
}