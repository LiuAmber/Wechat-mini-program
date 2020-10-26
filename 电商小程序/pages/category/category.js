// pages/category/category.js

import { request } from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左侧的菜单数据
    leftMenuList:[],
    //右侧的商品数据
    rightContent:[],
    //被点击左侧的菜单
    currentIndex:0,
    //右侧距离滚动条到顶部的距离
    scrollTop:0
    
  },
  //返回接口数据
  Cates:[],

  onLoad:function(options){
    //获取本地存储数据
    const Cates = wx.getStorageSync("cates");
    if(!Cates){
      this.getCates();
    }else{
      //有旧的数据
      if(Date.now() - Cates.time > 1000 * 10){
        //重新发送请求
        this.getCates();
      }
      //使用旧数据
      this.Cates = Cates.data;
      let leftMenuList = this.Cates.map(v => v.cat_name);
      let rightContent = this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
    }

  },
  //获取分类数据
 async getCates() {
    // request({
    //   url: "/categories"
    // })
    //   .then(res => {
    //     this.Cates = res.data.message;
    //     //把接口数据存储到本地存储中
    //     wx.setStorageSync('cates', {time:Date.now(),data:this.Cates});
    //     // 构造左侧的大菜单数据
    //     let leftMenuList = this.Cates.map(v => v.cat_name);
    //     // 构造右侧的商品数据
    //     let rightContent = this.Cates[0].children;
    //     this.setData({
    //       leftMenuList,
    //       rightContent
    //     })
    //   })
    const res = await request({url:"/categories"});
    this.Cates = res.data.message;
        //把接口数据存储到本地存储中
    wx.setStorageSync('cates', {time:Date.now(),data:this.Cates});
        // 构造左侧的大菜单数据
    let leftMenuList = this.Cates.map(v => v.cat_name);
        // 构造右侧的商品数据
    let rightContent = this.Cates[0].children;
    this.setData({
      leftMenuList,
      rightContent
        })
  },
  //左侧菜单的点击事件
  handleItemTap(e){
    const {index} = e.currentTarget.dataset;

    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex:index,
      rightContent,
      //重新设计scorll view标签的距离顶部的距离
      scrollTop:0
    })
    
  }
})