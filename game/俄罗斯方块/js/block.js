/*
  Project:  Tetris
  File:     block.js
  Author:   Kingpoolee
  Date:     2016.09.11
  discription: 组成方块和场景的基本元素
*/

function createBlock(width, height) {
  var block = document.createElement("div");
  block.width = width;
  block.height = height;
  block.style.width = width + "px";
  block.style.height = height + "px";
  block.style.boxSizing = "border-box";
  block.style.float = "left";
  block.style.border = "1px solid gray";
  block.style.background = "transparent";
  return block;
}
