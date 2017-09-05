const storageKey='vue_todo';
export default {
  get:function () {
    return JSON.parse(window.localStorage.getItem(storageKey)||'[]')
  },
  set:function (items) {
    window.localStorage.setItem(storageKey,JSON.stringify(items))
  }
}
