package com.poiexcel.util;  
 

public class Sheet  implements Comparable<Sheet>{
	private String id;
	private String name;
	private String major;
	private Integer cnt;



	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}
	
	
	public Integer getCnt() {
		return cnt;
	}

	public void setCnt(Integer cnt) {
		this.cnt = cnt;
	}

	@Override
	public int compareTo(Sheet o) { 
		Integer cnt  = getCnt();
		Integer cnt1  = o.getCnt(); 
		return cnt1.compareTo(cnt); 
	}
}
