<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  data: function(){
    return{
      todoItems: []
    }
  },
  methods:{
    addOneItem:function(todoItem){
      var obj={completed:false, item:todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem:function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem:function(todoItem, index){
        this.todoItems[index].completed = !this.todoItems[index].completed;
      //console.log(todoItem);
      //로컬스토리지의 데이터를 갱신
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems:function(){
      localStorage.clear();
      this.todoItems=[];
    }
  },
  created: function(){
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server"){
          //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          //this.todoItems.push(localStorage.key(i));
        }
        // console.log(LocalStorage.key[i]);
      }
    }
  },
  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader: TodoHeader,
    TodoFooter: TodoFooter,
    TodoInput: TodoInput,
    TodoList: TodoList,
  },
  
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6; 
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
