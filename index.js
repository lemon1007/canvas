canvas.onclick = (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.left = e.clientX + 'px'
    div.style.top = e.clientY + 'px'
    div.style.border = '2px solid red'
    div.style.width = '6px'
    div.style.height = '6px'
    div.style.marginLeft = '-3px'
    div.style.marginTop = '-3px'
    div.style.borderRadius = '6px'
    div.style.backgroundColor = 'black'
    canvas.appendChild(div)

}