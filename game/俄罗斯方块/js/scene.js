/*
  Project:  Tetris
  File:     scene.js
  Author:   Kingpoolee
  Date:     2016.09.11
  discription: 场景
*/

function createScene(colCount, rowCount, block) {
    var scene = document.createElement("div");
    scene.colCount = colCount;
    scene.rowCount = rowCount;
    scene.blockWidth = block.width;
    scene.blockHeight = block.height;
    // 地板数组
    scene.blocks = [];
    // 角色数组（需要移动)
    scene.roles = [];

    scene.style.width = block.width * scene.colCount + "px";
    scene.style.height = block.height * scene.rowCount + "px";
    scene.style.position = "relative";

    // 创建行计数器，用于消行判断
    scene.colCountOfRow = new Array(rowCount);
    for (var i = 0; i < rowCount; i++) {
        scene.colCountOfRow[i] = 0;
    }
    // layout blocks 铺地板
    for (var i = 0; i < scene.rowCount; i++) {
        for (var j = 0; j < scene.colCount; j++) {
            // 复制一块地板
            var blk = block.cloneNode(true);
            // 保存地板的行列坐标
            blk.row = i;
            blk.col = j;
            // 设置地板的颜色是否可见，用于碰撞检测
            blk.visible = 0;
            // blk.style.background = "black";
            // 父子相认
            // 地板保存在地板数组的下标
            blk.index = scene.blocks.length;
            scene.blocks.push(blk);

            blk.scene = scene;

            scene.appendChild(blk);
        }
    }

    // method 方法
    // 游戏初始化函数
    scene.init = init;
    // 游戏开始函数
    scene.start = start;
    // 游戏结束函数
    scene.stop = stop;
    // 添加角色函数
    scene.addRole = addRole;
    // 移除角色函数
    scene.removeRole = removeRole;
    // 游戏定时器
    scene.timer = null;

    return scene;
}

function init() {
    // 初始化地板
    for (var i = 0; i < this.blocks.length; i++) {
        this.blocks[i].style.background = "transparent";
        this.blocks[i].visible = 0;
    }
    // 初始化行计数器
    for (var i = 0; i < this.colCountOfRow.length; i++) {
        this.colCountOfRow[i] = 0;
    }

    // 初始化角色
    for (var i = 0; i < this.roles.length; i++) {
        this.removeRole(this.roles[i]);
    }
    var square = randomSquare(block);
    this.addRole(square, 4, 0);
}

function start() {

    this.init();

    var scene = this;
    // 创建自动下落定时器
    this.timer = setInterval(function() {
        for (var i = 0; i < scene.roles.length; i++) {
            scene.roles[i].moveDown();
        }
    }, 500);

    // 设置键盘响应
    document.onkeydown = function(event) {
        event = event || window.event;
        switch (event.keyCode) {
            case 37:
                scene.roles[0].moveLeft();
                break;
            case 39:
                scene.roles[0].moveRight();
                break;
            case 40:
                scene.roles[0].moveDown();
                break;
            case 38:
                scene.roles[0].nextState();
                break;
            default:

        }
    }
}

function addRole(role, col, row) {
    // 保存角色在角色数组中的下标
    role.index = this.roles.length;
    // 把角色加入角色数组
    this.roles.push(role);
    role.scene = this;
    // 保存角色行列值（左上角）
    role.col = col;
    role.row = row;

    var currentBlock = this.blocks[role.row * this.colCount + role.col];
    role.style.left = currentBlock.offsetLeft + "px";
    role.style.top = currentBlock.offsetTop + "px";

    this.appendChild(role);
}

function removeRole(role) {
    this.roles.shift();
    role.scene = null;
    this.removeChild(role);
}

function stop() {
    clearInterval(this.timer);
    this.timer = null;
    document.onkeydown = null;
}
