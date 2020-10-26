Component({
  data: {},
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },
  methods: {
    // 点击事件
    handleItemTap(e){
      // 1 获取点击的索引
      const {index}=e.currentTarget.dataset;
      // 2 触发 父组件中的事件 自定义
      this.triggerEvent("tabsItemChange",{index});
    }
  }
})