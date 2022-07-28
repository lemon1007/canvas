// 鼠标移动实现画板，弊端：不断创建dom节点，性能很差，画点无法终止且会很卡，线条不连贯
// canvas.onmousemove = (e) => {
//     console.log(e.clientX)
//     console.log(e.clientY)
//     let div = document.createElement('div')
//     div.style.position = 'absolute'
//     div.style.left = e.clientX + 'px'
//     div.style.top = e.clientY + 'px'
//     div.style.width = '6px'
//     div.style.height = '6px'
//     div.style.marginLeft = '-3px'
//     div.style.marginTop = '-3px'
//     div.style.borderRadius = '6px'
//     div.style.backgroundColor = 'black'
//     canvas.appendChild(div)
// }

//canva实现canvas
//画线
let canvas = document.getElementById('canvas');
//将canvas的高度变为文档的宽度，高度变为文档的高度
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
let ctx = canvas.getContext('2d');

//判定何时停止绘画
let painting = false

ctx.fillStyle = 'black';

//用户按下鼠标时将painting置于true并开始绘画
canvas.onmousedown = () => {
    painting = true
}

//获取鼠标点击的位置
canvas.onmousemove = (e) => {
    if (painting === true) {
        //画矩形的代码
        // ctx.fillRect(e.clientX - 3, e.clientY - 3, 6, 6);
        //画圆形的代码
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    } else {
        console.log('无事发生')
    }
}

//用户松开鼠标时将painting置于false并停止绘画
canvas.onmouseup = () => {
    painting = false
}

