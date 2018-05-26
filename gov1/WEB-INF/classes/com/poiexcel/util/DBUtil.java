package com.poiexcel.util;  
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList; 
import java.util.List; 
 

public class DBUtil {

	/**
	 * 连接数据库
	 */
	public static Connection getConn() {
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/gov?characterEncoding=UTF-8";
		String username = "root"; 
		String password = "root"; 

		Connection conn = null;
		try {
			Class.forName(driver);
			conn = (Connection) DriverManager.getConnection(url, username,
					password);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	 

	 

	/**
	 * 查询多条数据
	 * @param <T>
	 * 
	 * @param sql
	 * @return
	 */
	public static <T> List<T> getList(String sql ,Class<? extends T> c) {
		List<T> ls = new ArrayList<T>(); 
		PreparedStatement ps = null;
		ResultSet rs = null;
		Connection conn = null;
		try {
			conn = getConn();
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
			ls = transtoListMap(rs,c);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("执行查询方法异常:" + e.getMessage());
		} finally {
			close(conn, ps, rs);
		}
		return ls;
	}

	/**
	 * 
	 * @param <T>
	 * @param rs
	 * @return
	 * @throws SQLException
	 */
	private static <T> List<T> transtoListMap(ResultSet rs,Class<? extends T> c)
			throws SQLException {
		List<T> ls = new ArrayList<T>();
		int cols = rs.getMetaData().getColumnCount();
		while (rs.next()) {
			T t = null;
			try {
				t = (T) c.newInstance();
			
			Method[] methods = c.getMethods(); 
			for (int i = 1; i <= cols; i++) { 
				String columnName = rs.getMetaData().getColumnName(i); 
				 for(Method method:methods){
        			String name = method.getName(); 
        			if(!name.startsWith("set")){
        				continue;
        			}
         		    if(name.substring(3, name.length()).toLowerCase().equals(columnName.toLowerCase())){
        					method.invoke(t,rs.getString(i));
        		    }
				 } 
			}
			ls.add(t);
			} catch (Exception e1) { 
				e1.printStackTrace();
			} 
		}
		
		return ls;

	}

	/**
	 * 关闭数据源
	 * @param con
	 * @param stmt
	 * @param rs
	 */
	public static void close(Connection con, PreparedStatement stmt,
			ResultSet rs) {
		try {
			if (rs != null)
				rs.close();
		} catch (SQLException se) {
		}
		try {
			if (stmt != null)
				stmt.close();
		} catch (SQLException se) {
		}

		try {
			if (con != null && !con.isClosed())
				con.close();
		} catch (SQLException e) {
		} finally {
			con = null;
		}
	}
 
	
	
	 
}
