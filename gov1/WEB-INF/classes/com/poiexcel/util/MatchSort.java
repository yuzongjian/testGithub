package com.poiexcel.util;  

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MatchSort {
 	
	
	
	public  List<Sheet> getlist(String a,String b,String c ,String d){ 
		List<Sheet> list = DBUtil.getList("select *  from sheet1$ where major is not null", Sheet.class); 
		List<Sheet> result = new ArrayList<Sheet>();
		for(Sheet sheet:list){
			 Integer cnt = 0;
			 StringBuffer sb=new StringBuffer("该专家技能与该项目相符的关键词有：");
			 String major = sheet.getMajor();
			 int a1 =1;
			 if(major !=null && !"".equals(major)){
				 if(major.contains(a)){
					 cnt++;
					 sb.append(a1+":"+a+"   ");
					 a1++;
				 }
				 if(major.contains(b)){
					 cnt++;
					 sb.append(a1+":"+b+"   ");
					 a1++;
				 }
				 if(major.contains(c)){
					 cnt++;
					 sb.append(a1+":"+c+"   ");
					 a1++;
				 }
				 if(major.contains(d)){
					 cnt++;
					 sb.append(a1+":"+d+"   ");
					 a1++;
				 } 
			 }
			 if(cnt!=0) {
			 sheet.setCnt(cnt);	
			 String c1=sb.toString();
			 sheet.setMajor(c1);
			 result.add(sheet);
			 }		 
		}
		Collections.sort(result);   
		return result; 
	}
	
}
