package oper;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


import po.Book;

public class BookOper {

	public List<Book> selectByType(String type){
		Connection conn = db.Dbconn.getConn();
		java.sql.PreparedStatement pstmt = null;
		java.sql.ResultSet rs = null;
		List<Book> data = new ArrayList<Book>();
		try {
			pstmt = conn.prepareStatement("select title_id,title,type,price from title where type=?");
			pstmt.setString(1, type);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Book book = new Book();
				book.setTitleid(rs.getString(1));
				book.setTitle(rs.getString(2));
				book.setType(rs.getString(3));
				book.setPrice(rs.getFloat(4));
				data.add(book);
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
