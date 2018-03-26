package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Dbconn {

	public static Connection getConn() {
		Connection conn = null;
		try {
			String URL = "jdbc:mysql://localhost/container_data";
		    Class.forName("com.mysql.jdbc.Driver");
		    conn = DriverManager.getConnection(URL, "root", "5953ad4f59");
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
    
}
