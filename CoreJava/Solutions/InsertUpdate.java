import java.sql.*;

class StudentDAO {
    Connection con;

    StudentDAO() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");

        con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/test",
                "root",
                "password");
    }

    void insertStudent(int id, String name) throws Exception {

        PreparedStatement ps =
                con.prepareStatement(
                        "INSERT INTO students VALUES(?, ?)");

        ps.setInt(1, id);
        ps.setString(2, name);

        int rows= ps.executeUpdate();
        System.out.println(rows + " rows inserted");
    }

    void updateStudent(int id, String name) throws Exception {

        PreparedStatement ps =
                con.prepareStatement(
                        "UPDATE students SET name=? WHERE id=?");

        ps.setString(1, name);
        ps.setInt(2, id);

        int rows = ps.executeUpdate();

        System.out.println(rows + " row updated");
    }
}

public class InsertUpdate {

    public static void main(String[] args) {

        try {

            // Create DAO object
            StudentDAO dao = new StudentDAO();

            // Insert student
            dao.insertStudent(1, "Rahul");

            // Update student
            dao.updateStudent(1, "Aman");

            System.out.println("Database operations completed");

        }
        catch (Exception e) {

            System.out.println(e);

        }
    }
}
