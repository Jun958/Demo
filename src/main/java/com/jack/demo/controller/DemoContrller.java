package com.jack.demo.controller;

import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/")
public class DemoContrller {
	/**
	 * 主页
	 * @return
	 */
	@RequestMapping("/b")
	public ModelAndView  index() {
		ModelAndView mv = new ModelAndView("my");
		return mv;
	}
	@RequestMapping("/bb")
	public ModelAndView index1() {
		ModelAndView mv = new ModelAndView("index");
		return mv;
	}
	/**
	 * 获取图片地址列表
	 * @param map
	 * @return
	 */
	@RequestMapping("/pathList")
	public List<String> pathList(ModelMap map) {
		
		String storepath = "D:\\MyWorkSpace\\demo\\src\\main\\webapp\\img";
		//获取文件夹下所有的文件名
	    List<String> files = new ArrayList<String>();
	    File file = new File(storepath);
	    File[] tempList = file.listFiles();
	    for (int i = 0; i < tempList.length; i++) {
	        if (tempList[i].isFile()) {
	            files.add(tempList[i].getName());
	        }
	    }
		return files;
	}
}
