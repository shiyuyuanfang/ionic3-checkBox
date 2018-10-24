import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public checkList = [ //循环要渲染的数据列表
    {"id":1,"title":"Leanne Graham"},
    {"id":2,"title":"Ervin Howell"},
    {"id":3,"title":"Hildegard"},
    {"id":4,"title":"Wisokyburgh"},
    {"id":5,"title":"Deckow Graham"},
    {"id":6,"title":"Clementine"},
    {"id":7,"title":"Samantha"},
    {"id":8,"title":"Patricia Lebsack"},
    {"id":9,"title":"Chelsey Dietrich"},
    {"id":10,"title":"Kamren"},
  ];

  public pushCheckList = []; //用每一条控制多选框的变量组成的数组

  public btnType = "checkAll"; //控制 全选 或 取消 按钮的显示；checkAll：全选；checkNone：取消

  public idList = []; //用来存放被选中的列表项的id

  constructor(public navCtrl: NavController) {
    //在页面初次加载时 默认列表项中的每一项都未被选中
    for (var i = 0; i < this.checkList.length; i++){
      this.pushCheckList.push(false);
    }
  }

  //点击多选框
  checkChange(id){
    if(this.idList.indexOf(id) == -1){ //判断当前点击的列表项的id是否已经被存入数组idList中，如果未存入则存入，否则删除该项
      this.idList.push(id);
      if(this.idList.length == this.pushCheckList.length){
        this.btnType = 'checkNone';
      }
    }else{
      var index = this.idList.indexOf(id);
      this.idList.splice(index,1);
      this.btnType = 'checkAll';
    }
  }

  //点击 全选 或 取消
  checkAll(){
    if(this.btnType == 'checkAll'){ //全选操作
      this.idList = [];
      for(var i = 0; i < this.pushCheckList.length; i++){
        this.pushCheckList[i] = true;
        this.idList.push(this.checkList[i].id);
      }
      this.btnType = 'checkNone';
    }else{ //取消操作
      this.idList = [];
      for(var i = 0; i < this.pushCheckList.length; i++){
        this.pushCheckList[i] = false;
      }
      this.btnType = 'checkAll';
    }
  }


}
