<template>
  <div id="app">
    <component-a clickMsg="点了一下"  v-on:tellMe="listen"></component-a>
    <p>收到子组件的信息：{{msgWords}}</p>
    <div class="header">
      <div v-text='title'></div>
      <input type="text" placeholder="what are you want to do ?" v-model='newText' @keyup.enter='addNewlist'>
    </div>
    <div id="wrapper" class="wrapper">
      <ul v-cloak>
        <li v-for='(item,index) in items' :class='{finished:item.isFinished}'>
          <div class="todo">{{item.text}}</div>
          <div class="control">
            <button class="done" @click='toggleFinish(item)'>完成</button>
            <!-- todo vm.$emit():触发当前实例上的事件-->
            <button class="del" @click="$emit(items.splice(index,1))">删除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
import local from './storage'
import ComponentA from './components/componentA'
  export default {
    name: 'app',
    data() {
      return {
        title: 'todo list',
        items: local.get(),
        newText: '',
        msgWords:''
      }
    },
    components:{ComponentA},
    watch: {
      items: {
        handler: function (items) {
          local.set(items);
        },
        deep: true
      }
    },
    methods: {
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished;
      },
      addNewlist: function () {
        var self = this;
        if (self.newText) {
          self.items.push({
            text: self.newText,
            isFinished: false
          });
        }
        self.newText = '';
      },
      listen:function(msg){
this.msgWords=msg;
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    border: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  [v-cloak] {
    display: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .header {
    height: 300px;
    background: orange;
  }

  .header div {
    height: 200px;
    line-height: 200px;
    font-size: 50px;
    color: #ffffff;
    text-align: center;
  }

  .header input {
    font-weight: normal;
    display: block;
    width: 90%;
    height: 50px;
    margin: 25px auto 0;
    padding: 0 20px;
    font-size: 30px;
    text-align: center;
  }

  .wrapper {
    position: absolute;
    width: 100%;
    height: calc(100% - 300px);
    padding-top: 20px;
  }

  .wrapper li {
    transition: 0.4s;
    width: 90%;
    height: 60px;
    margin: 0 auto;
    padding: 15px 30px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }

  .wrapper li .todo {
    width: 70%;
    line-height: 1.25;
    font-size: 24px;
    color: #333;
    text-align: left;
    overflow: hidden;
  }

  .wrapper li .control {
    width: 30%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }

  .control button {
    width: 40%;
    height: 100%;
    text-align: center;
    font-size: 60%;
    color: #fff;
  }

  .control .done {
    background: #cccccc;
  }

  .control .del {
    background: darkred;
  }

  #wrapper li.finished .todo {
    color: #dddddd;
  }

  #wrapper li.finished .control .done {
    background: springgreen;
  }


</style>
