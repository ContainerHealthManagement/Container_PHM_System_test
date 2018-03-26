package action;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.opensymphony.xwork2.ActionSupport;

import sun.awt.AWTAccessor.SystemColorAccessor;


public class LoginAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String user;
	   private String password;
	   private String name;

	   public String execute() {
	      String ret = ERROR;
	      Connection conn = null;

	      try {
	    	 System.out.println("连接成功1");
	    //     String URL = "jdbc:mysql://localhost/container_data";
	    	 String URL = "jdbc:mysql://localhost/container_data";
	         Class.forName("com.mysql.jdbc.Driver");
	     //    conn = DriverManager.getConnection(URL, "root", "root");
	         conn = DriverManager.getConnection(URL, "root", "root");
	         System.out.println("连接成功2");
	         String sql = "SELECT name FROM `TABLE 1` WHERE";
	         sql+=" user = ? AND password = ?";
	         PreparedStatement ps = conn.prepareStatement(sql);
	         ps.setString(1, user);
	         ps.setString(2, password);
	         ResultSet rs = ps.executeQuery();

	         while (rs.next()) {
	            name = rs.getString(1);
	            ret = SUCCESS;
	         }
	         System.out.println("连接成功");
	      } catch (Exception e) {
	         ret = ERROR;
	      } finally {
	         if (conn != null) {
	            try {
	               conn.close();
	            } catch (Exception e) {
	            }
	         }
	      }
	      return ret;
	   }

	   public String getUser() {
	      return user;
	   }

	   public void setUser(String user) {
	      this.user = user;
	   }

	   public String getPassword() {
	      return password;
	   }

	   public void setPassword(String password) {
	      this.password = password;
	   }

	   public String getName() {
	      return name;
	   }

	   public void setName(String name) {
	      this.name = name;
	   }
}
