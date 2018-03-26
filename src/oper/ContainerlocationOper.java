package oper;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import po.Container_location;;

public class ContainerlocationOper {
	public List<Container_location> selectByXhdm(String xhdm){
		Connection conn = db.Dbconn.getConn();
		java.sql.PreparedStatement pstmt = null;
		java.sql.ResultSet rs = null;
		List<Container_location> data = new ArrayList<Container_location>();
		try {
			pstmt = conn.prepareStatement("select XHDM,JSDATE,FZHZ,DZHZ,FSHPID,PMMC from `TABLE 2` where XHDM=?");
			pstmt.setString(1, xhdm);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Container_location Container_location_data = new Container_location();
				Container_location_data.setXHDM(rs.getString(1));
				Container_location_data.setJSDATE(rs.getString(2));
				Container_location_data.setFZHZ(rs.getString(3));
				Container_location_data.setDZHZ(rs.getString(4));
				Container_location_data.setFSHPID(rs.getInt(5));
				Container_location_data.setPMMC(rs.getString(6));
				data.add(Container_location_data);
				}		
		}catch (SQLException e) {
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
