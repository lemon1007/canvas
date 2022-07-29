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

//canvas实现canvas
//画线
let canvas = document.getElementById('canvas');
//将canvas的高度变为文档的宽度，高度变为文档的高度
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
let ctx = canvas.getContext('2d');
//填充样式
ctx.fillStyle = "black";
//描边样式
ctx.strokeStyle = 'none';
//线宽度样式
ctx.lineWidth = 7;
//线段圆滑度
ctx.lineCap = "round";

//画线段的函数
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    //起始坐标点
    ctx.moveTo(x1, y1);
    //目标坐标点
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

//判定何时停止绘画
let painting = false;

//判定用户使用设备
let isTouchDevice = 'ontouchstart' in
    document.documentElement;
//当用户使用设备为手机时，需要使用触屏
if (isTouchDevice) {
    //手机上开始触发事件时
    canvas.ontouchstart = (e) => {
        //记录上一次的坐标状态，除第一次外，第一次没有上一次
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        last = [x, y]
    }

    //手机上触摸滑动产生线段
    canvas.ontouchmove = (e) => {
        // e.preventDefault();
        //手机上调用drawLine函数画线
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        drawLine(last[0], last[1], x, y)
        //实时更新last的坐标
        last = [x, y]

        //手机上使用canvas，多个圆连接，由点连成线的方式
        // ctx.beginPath();
        // ctx.arc(e.touches[0].clientX, e.touches[0].clientY, 7, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fill();
    }
} else {

    //用户按下鼠标时将painting置于true并开始绘画
    canvas.onmousedown = (e) => {
        painting = true;
        //记录上一次的坐标状态，除第一次外，第一次没有上一次
        last = [e.clientX, e.clientY]
    }

    //当用户使用设备为电脑时，获取鼠标点击的位置
    canvas.onmousemove = (e) => {
        if (painting === true) {
            //画矩形的代码
            // ctx.fillRect(e.clientX - 3, e.clientY - 3, 6, 6);
            //画圆形的代码
            ctx.beginPath();
            //调用drawLine函数画线
            drawLine(last[0], last[1], e.clientX, e.clientY)
            //实时更新last的坐标
            last = [e.clientX, e.clientY]

            //使用canvas，多个圆连接，由点连成线
            // ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);

            ctx.stroke();
            ctx.fill();
        } else {
            console.log('ok');
        }
    }

    //用户松开鼠标时将painting置于false并停止绘画
    canvas.onmouseup = () => {
        painting = false
    }

}
