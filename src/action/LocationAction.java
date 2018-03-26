package action;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.Result;
import com.sun.xml.internal.fastinfoset.algorithm.HexadecimalEncodingAlgorithm;

import net.sf.json.JSONObject;
import sun.security.x509.PrivateKeyUsageExtension;

public class LocationAction extends ActionSupport implements ServletRequestAware{
	private HttpServletRequest request;
	private Double health;
	private String result;
	private String xhdm;
	public HttpServletRequest getRequest() {
		return request;
	}
	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}
	
	public Double getHealth() {
		return health;
	}
	public void setHealth(Double health) {
		this.health = health;
	}
	public String getXhdm() {
		return xhdm;
	}
	public void setXhdm(String xhdm) {
		this.xhdm = xhdm;
	}

	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}
	
	public String executeAjax() {
		Connection conn = null;
		System.out.println("sdfasdfsadfasdfdsa");
		try {
			//获取数据
			//String xhdm = request.getParameter("xhdm");
			String xhdm = "5635550";
			String URL = "jdbc:mysql://localhost/container_data";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(URL,"root","root");
			String sql = "select XHDM, HEALTH_07 from container_health_predict where XHDM=?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, xhdm);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				xhdm = rs.getString(1);
				//jsdate = rs.getString(2);
				//fzhz = rs.getString(3);
				//dzhz = rs.getString(4);
				//fshpid = rs.getInt(5);
				//pmmc = rs.getString(6);
				health = rs.getDouble(2);
			}
			System.out.println(result);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}
}
