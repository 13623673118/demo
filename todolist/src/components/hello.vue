<template>
  <div class="header">
    <div>{{title}}</div>
    <input type="text" placeholder="what are you want to do ?" v-model='newText' @keyup.enter='addNewlist'>
  </div>
  <div id="wrapper" class="wrapper">
    <ul v-cloak>
      <li v-for='(item,index) in items' :class='{finished:item.isFinished}' >
        <div class="todo">{{item.text}}</div>
        <div class="control">
          <button class="done"  @click='toggleFinish(item)'>完成</button>
          <!-- todo vm.$emit():触发当前实例上的事件-->
          <button class="del" @click="$emit(items.splice(index,1))">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'todo list'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
