//引入请求的方法 一定要把路径补全 
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
     //轮播图数组
     swiperList:[],
     //导航数组
     catesList:[],
     //楼层数组
     floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList()
  },


  //获取轮播图数据的方法
  getSwiperList(){
        //1 发送异步请求获取轮播图数据 优化手段可以通过ES6的promise解决
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success:(result)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // })
    request({url:'/home/swiperdata'})
    .then(result=>{
      this.setData({
        swiperList:result.data.message
    })
  }) 
  },

  //获取分类导航的方法
  getCatesList(){
    request({url:'/home/catitems'})
    .then(result=>{
      this.setData({
        catesList:result.data.message
      })
    }) 
  },

  //获取楼层数据的方法
  getFloorList(){
    request({url:'/home/floordata'})
    .then(result=>{
      this.setData({
        floorList:result.data.message
      })
    }) 
  },
  //

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})