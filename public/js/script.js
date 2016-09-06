'use strict'


let changeColor = (color) => {
  document.getElementById('shirt').style.background = color
  updateSliders()
}

let updateSliders = () => {
  let getRGB = string => {
    let arr = string.split('(')[1].split(')')[0].split(',')
    let arr2 = []
    arr.forEach(element => {
      arr2.push(element.trim())
    })
    return arr2
  }
  let initColor = $('#shirt').css('backgroundColor')
  let initColorArray = getRGB(initColor)

  console.log(initColorArray)

  $('#slider1').val(initColorArray[0])
  $('#slider2').val(initColorArray[1])
  $('#slider3').val(initColorArray[2])
}

let customRGBSlider = (id) => {
  if (id === undefined) return false
  if (id === 1) {
    // todo
  } else if (id === 2) {
    // todo
  } else if (id === 3) {
    // todo
  }
} 

updateSliders()
