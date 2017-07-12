/*
  Project:  Tetris
  File:     square.js
  Author:   Kingpoolee
  Date:     2016.09.11
  discription: 方块
*/

var types = [
    ["0000010001000110", "0000000001110100", "0000011000100010", "0000001011100000"],
    ["0000001000100110", "0000010001110000", "0000011001000100", "0000000011100010"],
    ["0000000011000110", "0000001001100100", "0000000011000110", "0000001001100100"],
    ["0000000001101100", "0000100011000100", "0000000001101100", "0000100011000100"],
    ["0100010001000100", "0000111100000000", "0100010001000100", "0000111100000000"],
    ["0000011001100000", "0000011001100000", "0000011001100000", "0000011001100000"],
    ["0000010011100000", "0000010001100100", "0000000011100100", "0000010011000100"]
];

//                左       上      右      下
var offsets = [
    [-1, 0],
    [0, 0],
    [1, 0],
    [0, 1]
];

function createSquare(colCount, rowCount, block, type, state) {
    var square = createScene(colCount, rowCount, block);
    square.style.position = "absolute";
    square.updateState = updateState;
    square.nextState = nextState;
    square.squareStop = squareStop;
    square.isLeft = isLeft;
    square.isRight = isRight;
    square.isBottom = isBottom;
    square.moveLeft = moveLeft;
    square.moveRight = moveRight;
    square.moveDown = moveDown;
    square.move = move;
    square.blockMoveCollisions = blockMoveCollisions;
    square.blockRotateCollisions = blockRotateCollisions;

    var rColor = randomColor();
    for (var i = 0; i < square.blocks.length; i++) {
        square.blocks[i].style.background = rColor;
    }

    return square;
}

function randomSquare(block) {
    var type = Math.round(Math.random() * (types.length - 1));
    var state = Math.round(Math.random() * (types[type].length - 1));
    var square = createSquare(4, 4, block, type, state);
    square.updateState(type, state);

    return square;
}

function updateState(type, state) {
    this.type = type;
    this.state = state;
    for (var i = 0; i < this.rowCount; i++) {
        this.colCountOfRow[i] = 0;
    }
    for (var i = 0; i < this.blocks.length; i++) {
        this.blocks[i].style.opacity = types[type][state][i];
        this.blocks[i].visible = Number(types[type][state][i]);
        this.colCountOfRow[this.blocks[i].row] += this.blocks[i].visible;
    }
    // console.log(this.colCountOfRow);
}

function nextState() {
    if (this.blockRotateCollisions()) {

        return;
    }
    this.state++;
    if (this.state == types[this.type].length) {
        this.state = 0;
    }
    this.updateState(this.type, this.state);
}

function isLeft() {
    if (this.col <= 0) {
        var currentLeftCol = Math.abs(this.col);
        for (var i = 0; i < this.rowCount; i++) {
            if (this.blocks[i * this.colCount + currentLeftCol].visible == 1) {
                return true;
            }
        }
    }
    return false;
}

function isTop() {
    if (this.row <= 0) {

    }
}

function isRight() {
    var currentSquareRightCol = this.col + this.colCount - 1;
    if (currentSquareRightCol >= this.scene.colCount - 1) {
        for (var i = 0; i < this.rowCount; i++) {
            currentBlockRightCol = Math.abs(this.col - this.scene.colCount + 1);
            if (this.blocks[i * this.colCount + currentBlockRightCol].visible == 1) {
                return true;
            }
        }
    }
    return false;
}

function isBottom() {
    var currentSquareBottomRow = this.row + this.rowCount - 1;
    if (currentSquareBottomRow >= this.scene.rowCount - 1) {
        for (var i = 0; i < this.colCount; i++) {
            currentBlockBottomRow = Math.abs(this.row - this.scene.rowCount + 1);
            if (this.blocks[currentBlockBottomRow * this.colCount + i].visible == 1) {
                return true;
            }
        }
    }
    return false;
}

function move(direction) {
    if (this.blockMoveCollisions(direction)) {
        return;
    }
    var offset = offsets[direction];
    this.style.left = this.offsetLeft + offset[0] * this.blockWidth + "px";
    this.style.top = this.offsetTop + offset[1] * this.blockHeight + "px";
    this.col += offset[0];
    this.row += offset[1];
}

function moveLeft() {
    if (!this.isLeft()) {
        this.move(0);
    }
}

function moveRight() {
    if (!this.isRight()) {
        this.move(2);
    }
}

function moveDown() {
    if (!this.isBottom()) {
        this.move(3);
    } else {
        this.squareStop();
    }
}

function blockMoveCollisions(direction) {
    var offset = offsets[direction];
    for (var i = 0; i < this.blocks.length; i++) {
        var sceneBlockIndex = (this.row + this.blocks[i].row + offset[1]) * this.scene.colCount + this.col + this.blocks[i].col + offset[0];
        if (this.blocks[i].visible == 1 && this.scene.blocks[sceneBlockIndex].visible == 1) {
            if (direction == 3) {
                this.squareStop();
            }
            return true;
        }
    }
    return false;
}

function blockRotateCollisions() {
    var nextState = this.state + 1;
    // nextState %= types[this.type].length;
    if (nextState == types[this.type].length) {
        nextState = 0;
    }

    // 变形产生的边界碰撞
    //  左边
    if (this.col < 0) {
        for (var i = 0; i < Math.abs(this.col); i++) {
            for (var j = 0; j < this.rowCount; j++) {
                if (types[this.type][nextState][j * this.colCount + i] == 1) {
                    return true;
                }
            }
        }
    }
    //  右边
    var currentSquareRightCol = this.col + this.colCount - 1;
    if (currentSquareRightCol > this.scene.colCount - 1) {
        var squareRightColCount = this.scene.colCount - this.col;
        for (var i = this.colCount - 1; i >= this.colCount - squareRightColCount; i--) {
            for (var j = 0; j < this.rowCount; j++) {
                if (types[this.type][nextState][j * this.colCount + i] == 1) {
                    return true;
                }
            }
        }
    }
    //  下边
    var currentSquareBottomRow = this.row + this.rowCount - 1;
    if (currentSquareBottomRow > this.scene.rowCount - 1) {
        var squareBottomColCount = this.scene.rowCount - this.row;
        for (var i = this.rowCount - 1; i >= this.rowCount - squareBottomColCount; i--) {
            for (var j = 0; j < this.colCount; j++) {
                if (types[this.type][nextState][i * this.colCount + j] == 1) {
                    return true;
                }
            }
        }
    }
    // 变形产生的块与地板碰撞
    for (var i = 0; i < types[this.type][nextState].length; i++) {
        var sceneBlockIndex = (this.row + this.blocks[i].row) * this.scene.colCount + this.col + this.blocks[i].col;
        if (types[this.type][nextState][i] == 1 && this.scene.blocks[sceneBlockIndex].visible == 1) {
            return true;
        }
    }
    return false;
}

function squareStop() {
    // 把方块的颜色和属性复制到地板
    for (var i = 0; i < this.blocks.length; i++) {
        var sceneBlockIndex = (this.row + this.blocks[i].row) * this.scene.colCount + this.col + this.blocks[i].col;
        if (this.blocks[i].visible == 1 && this.scene.blocks[sceneBlockIndex]) {
            this.scene.blocks[sceneBlockIndex].style.background = this.blocks[i].style.background;
            this.scene.blocks[sceneBlockIndex].visible = 1;
        } else {

        }
    }

    // 更新场景行计数器
    for (var i = 0; i < this.rowCount; i++) {
        var sceneRow = this.row + i;
        this.scene.colCountOfRow[sceneRow] += this.colCountOfRow[i];
    }
    // 消除一整行
    for (var i = 0; i < this.rowCount; i++) {
        var sceneRow = this.row + i;
        if (this.scene.colCountOfRow[sceneRow] == this.scene.colCount) {
            for (var j = sceneRow; j > 0; j--) {
                for (var k = 0; k < this.scene.colCount; k++) {
                    this.scene.blocks[j * this.scene.colCount + k].style.background = this.scene.blocks[(j - 1) * this.scene.colCount + k].style.background;
                    this.scene.blocks[j * this.scene.colCount + k].visible = this.scene.blocks[(j - 1) * this.scene.colCount + k].visible;
                }
                this.scene.colCountOfRow[j] = this.scene.colCountOfRow[j - 1];
            }
        }
    }

    var tempBlock = this.blocks[0];
    tempBlock.width = tempBlock.offsetWidth;
    tempBlock.height = tempBlock.offsetHeight;

    var newSquare = randomSquare(tempBlock);
    var myScene = this.scene;

    myScene.removeRole(this);
    myScene.addRole(newSquare, 4, 0);
}

function randomColor() {
    // 为了防止出现太暗的颜色与背影冲突，只生成 100~255 的颜色
    var red = Math.round(Math.random() * (255 - 100)) + 100;
    var green = Math.round(Math.random() * (255 - 100)) + 100;
    var blue = Math.round(Math.random() * (255 - 100)) + 100;
    var rColor = "rgb(" + red + "," + green + "," + blue + ")";

    return rColor;
}
