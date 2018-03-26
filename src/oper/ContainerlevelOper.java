package oper;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import po.Container_health;
import po.Container_level;
public class ContainerlevelOper {
	public List<Container_level> selectBynull(){
		Connection conn = db.Dbconn.getConn();
		java.sql.PreparedStatement pstmt = null;
		java.sql.ResultSet rs = null;
		List<Container_level> data = new ArrayList<Container_level>();
		try {
			pstmt = conn.prepareStatement("select level,FHCS,FHZL,FHLC,YHDGL,XLCS,XLFY from `TABLE 5`");
			rs = pstmt.executeQuery();
			while(rs.next()) {
				Container_level container_level_data = new Container_level();
				container_level_data.setLevel(rs.getInt(1));
				container_level_data.setFhcs(rs.getDouble(2));
				container_level_data.setFhzl(rs.getDouble(3));
				container_level_data.setFhlc(rs.getDouble(4));
				container_level_data.setYhdgl(rs.getDouble(5));
				container_level_data.setXlcs(rs.getDouble(6));
				container_level_data.setXlfy(rs.getDouble(7));
				data.add(container_level_data);
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
