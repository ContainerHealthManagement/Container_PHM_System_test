package oper;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import po.Container_health;
public class ContainerStatusOper {
	public List<Container_health> selectBynull(){
		Connection conn = db.Dbconn.getConn();
		java.sql.PreparedStatement pstmt = null;
		java.sql.ResultSet rs = null;
		List<Container_health> data = new ArrayList<Container_health>();
		try {
			pstmt = conn.prepareStatement("select a.XHDM,a.HEALTH_07,a.HEALTH_08,a.HEALTH_09,a.HEALTH_10,a.HEALTH_11,a.HEALTH_12,a.HEALTH_13,a.HEALTH_14,a.HEALTH_15,a.HEALTH_16,a.HEALTH_17,a.HEALTH_18,b.HZZM,b.JSDATE from `TABLE 3` a left join `TABLE 4` b on a.XHDM=b.XHDM");
			rs = pstmt.executeQuery();
			while(rs.next()) {
				Container_health container_health_data = new Container_health();
				container_health_data.setXhdm(rs.getString(1));
				container_health_data.setHealth7(rs.getDouble(2));
				container_health_data.setHealth8(rs.getDouble(3));
				container_health_data.setHealth9(rs.getDouble(4));
				container_health_data.setHealth10(rs.getDouble(5));
				container_health_data.setHealth11(rs.getDouble(6));
				container_health_data.setHealth12(rs.getDouble(7));
				container_health_data.setHealth13(rs.getDouble(8));
				container_health_data.setHealth14(rs.getDouble(9));
				container_health_data.setHealth15(rs.getDouble(10));
				container_health_data.setHealth16(rs.getDouble(11));
				container_health_data.setHealth17(rs.getDouble(12));
				container_health_data.setHealth18(rs.getDouble(13));
				container_health_data.setLocation(rs.getString(14));
				container_health_data.setJsdate(rs.getString(15));
				data.add(container_health_data);
			}
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally {
			if(rs != null) 
			try{
				rs.close();
			}catch (SQLException e) {
				// TODO: handle exception
				 e.printStackTrace();
			}
			if(pstmt != null) {
				try {
					pstmt.close();
				}catch (SQLException e) {
					// TODO: handle exception
					e.printStackTrace();
				}
			if(conn != null) {
				try {
					conn.close();
				}catch (SQLException e) {
					// TODO: handle exception
					 e.printStackTrace();
				}
			}
			}
		}
		return data;
	}
}
