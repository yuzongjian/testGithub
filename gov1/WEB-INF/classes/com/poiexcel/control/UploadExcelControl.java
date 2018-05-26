package com.poiexcel.control;  
  
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.poiexcel.util.ImportExcelUtil;
import com.poiexcel.util.MatchSort;
import com.poiexcel.util.PageUtil;
import com.poiexcel.util.Sheet;
import com.poiexcel.util.StringUtil;
import com.poiexcel.vo.InfoVo;
import com.poiexcel.vo.PageBean;
@Controller  
@RequestMapping("/govProject")    
public class UploadExcelControl {  
      
    /**  
     * 描述：通过传统方式form表单提交方式导入excel文件  
     * @param request  
     * @throws Exception  
     */  
    @RequestMapping(value="/main",method={RequestMethod.GET,RequestMethod.POST})  
    public   ModelAndView  uploadExcel(HttpServletRequest request) throws Exception {  
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;  
        ModelAndView mav=new ModelAndView();
        System.out.println("通过传统方式form表单提交方式导入excel文件！");  
          
        InputStream in =null;  
        List<List<Object>> listob = null;  
        MultipartFile file = multipartRequest.getFile("upfile");  
        if(file.isEmpty()){  
            throw new Exception("文件不存在！");  
        }  
        in = file.getInputStream();  
        listob = new ImportExcelUtil().getBankListByExcel(in,file.getOriginalFilename());  
        in.close();  
        List<InfoVo> list123 = new ArrayList<InfoVo>();
        //该处可调用service相应方法进行数据保存到数据库中，现只对数据输出  
        for (int i = 0; i < listob.size(); i++) {  
            List<Object> lo = listob.get(i); 
            InfoVo vo = new InfoVo();  
            vo.setName(String.valueOf(lo.get(0)));     
            vo.setLeader(String.valueOf(lo.get(1)));  
            vo.setCompany(String.valueOf(lo.get(2)));
            if(lo.size()>3) {
          vo.setKeyword1(String.valueOf(lo.get(3)));
          }  
            if(lo.size()>4) {
           vo.setKeyword2(String.valueOf(lo.get(4)));
           }    if(lo.size()>5) {      
            vo.setKeyword3(String.valueOf(lo.get(5))); 
           }if(lo.size()>6) {
           vo.setKeyword4(String.valueOf(lo.get(6))); 
           }
           list123.add(vo);    
        }   
    	 mav.addObject("userList", list123);
        mav.addObject("mainPage", "/govProject/main.jsp");
        mav.setViewName("govProject/main");
       return mav;
       
    }  
      
    /** 
     * 描述：通过 jquery.form.js 插件提供的ajax方式上传文件 
     * @param request 
     * @param response 
     * @throws Exception 
     */  
   
      
    @RequestMapping("/teacher")
	public ModelAndView preSave(@RequestParam(value="page",required=false)String page,@RequestParam(value="keyword1",required=false)String keyword1,@RequestParam(value="keyword2",required=false)String keyword2,@RequestParam(value="keyword3",required=false)String keyword3,@RequestParam(value="keyword4",required=false)String keyword4,HttpServletRequest request){
    	ModelAndView mav=new ModelAndView();
    	HttpSession session=request.getSession();
    	if(StringUtil.isEmpty(page)){
			page="1";
			session.setAttribute("currpage", 1);
		}else{
			
		}
    	PageBean pageBean=new PageBean(Integer.parseInt(page),10);
		MatchSort MatchSort =new MatchSort();
		if(keyword1=="") {
			keyword1="嘦巭";
		}
		if(keyword2=="") {
			keyword2="嘦巭";
		}
		if(keyword3=="") {
			keyword3="嘦巭";
		}
		if(keyword4=="") {
			keyword4="嘦巭";
		}
		List<Sheet> list1234=MatchSort.getlist( keyword1,keyword2,keyword3 ,keyword4);
		int total=list1234.size();

		List<Sheet> list12345 =new  ArrayList<Sheet>();
		if(total!=0) {			
			for(int i=pageBean.getStart();i<(pageBean.getStart()+10)&&i<total;i++) {
				list12345.add(list1234.get(i));		
			}
		}
		 String pageCode=PageUtil.getPagation(request.getContextPath()+"/govProject/teacher.do"+"?"+"&"+"keyword1="+keyword1+"&"+"keyword2="+keyword2+"&"+"keyword3="+keyword3+"&"+"keyword4="+keyword4, total, Integer.parseInt(page), 10);
		mav.addObject("mainPage", "/govProject/teacher.jsp");
		mav.addObject("pageCode", pageCode);
		 mav.addObject("zhuanjiaList", list12345);
		  mav.setViewName("govProject/teacher");
		return mav;
	}
  
  
}  