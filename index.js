var vm = new Vue({
	el:'#app',
  data:{
  newAddItem:'',
  newAddPrice:'',
  newAddAmount:'',
  	lists:[
    	{
      	id:1,
        name:"商品1",
        price:100,
        amount:1      
      },
      {
      	id:2,
        name:"商品2",
        price:200,
        amount:2      
      }
    ],
    nextTodoId:3
  	
  },
  computed:{
  	totalprice:function(){
    	var total=0;
      for(var i=0;i<this.lists.length;i++){
      	var item=this.lists[i];
        total+=item.price*item.amount;
      }
      return total.toLocaleString();
    }
  },
  methods:{
  	addNewItem:function(){
    	this.lists.push({
      	id:this.nextTodoId++,
        name:this.newAddItem,
        price:this.newAddPrice,
        amount:this.newAddAmount
      })
      this.newAddItem=''
      this.newAddPrice=''
      this.newAddAmount=''
    }
  
  }

})