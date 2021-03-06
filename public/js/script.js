'use strict'

let changeColor = (color) => {
  document.getElementById('shirt').style.background = color
  updateSliders()
}

let getRGB = string => {
  let arr = string.split('(')[1].split(')')[0].split(',')
  let arr2 = []
  arr.forEach(element => {
    arr2.push(element.trim())
  })
  return arr2
}

let updateSliders = () => {
  let initColor = $('#shirt').css('backgroundColor')
  let initColorArray = getRGB(initColor)

  // probably a more efficient way of doing this
  $('#slider1').val(initColorArray[0])
  $('#slider2').val(initColorArray[1])
  $('#slider3').val(initColorArray[2])
  $('#number1').val(initColorArray[0])
  $('#number2').val(initColorArray[1])
  $('#number3').val(initColorArray[2])
}

let customRGBSlider = id => {
  let color
  if (id === undefined) return false
  if (id === 1) {
    color = $('#slider1').val()
    $('#number1').val(color)
    setColor(id, color)
  } else if (id === 2) {
    color = $('#slider2').val()
    $('#number2').val(color)
    setColor(id, color)
  } else if (id === 3) {
    color = $('#slider3').val()
    $('#number3').val(color)
    setColor(id, color)
  }
}

let customRGBNumber = id => {
  let color
  if (id === undefined) return false
  if (id === 1) {
    color = $('#number1').val()
    $('#slider1').val(color)
    setColor(id, color)
  } else if (id === 2) {
    color = $('#number2').val()
    $('#slider2').val(color)
    setColor(id, color)
  } else if (id === 3) {
    color = $('#number3').val()
    $('#slider3').val(color)
    setColor(id, color)
  }
}

let setColor = (id, color) => {
  let originalColors = getRGB($('#shirt').css('backgroundColor'))
  if (id === undefined || color === undefined) return false
  if (id > 0 && id < 4 && color >= 0 && id <= 255) {
    originalColors[id - 1] = color
    $('#shirt').css('backgroundColor', 'rgb(' + originalColors[0] + ', ' + originalColors[1] + ', ' + originalColors[2] + ')')
  } else {
    console.log('Invalid Value')
  }
}

let greyScale = () => {
  let grey = $('#greyslider').val()
  if (grey >= 0 && grey <= 255) {
    $('#shirt').css('backgroundColor', 'rgb(' + grey + ', ' + grey + ', ' + grey + ')')
    updateSliders()
  } 
}

let hexValue = () => {
  let hex = $('#hexinput').val()
  if (hex.substr(0, 1) !== '#') {
    hex = hex.split('#').shift()
    $('#hexinput').val('#' + hex)
  }
  if (hex.length < 6 || hex.length > 7) return false
  if (hex.length === 7) {
    $('#shirt').css('backgroundColor', hex)
  } else {
    return false
  }
}

let customText = () => {
  let custom = $('#customtext').val()
  if (custom.length >= 0 && custom.length <= 100) {  
    $('#texttshirt').text(custom)
  }
}

let customFont = () => {
  let custom = $('#customfont').val()
  if (custom === '1') {  
    $('#texttshirt').css('fontFamily', 'Comic Sans Ms')
  }
  if (custom === '2') {  
    $('#texttshirt').css('fontFamily', 'Arial')
  }
  if (custom === '3') {  
    $('#texttshirt').css('fontFamily', 'Consolas')
  }
  if (custom === '4') {  
    $('#texttshirt').css('fontFamily', 'Impact')
  }
}

let customSize = () => {
  let custom = $('#fontsize').val()
  if (custom > 0 && custom <= 72) {
    $('#texttshirt').css('fontSize', custom + 'px')
  }
}

let hexFontValue = () => {
  let hex = $('#hexfontinput').val()
  if (hex.substr(0, 1) !== '#') {
    hex = hex.split('#').shift()
    $('#hexfontinput').val('#' + hex)
  }
  if (hex.length < 6 || hex.length > 7) return false
  if (hex.length === 7) {
    $('#texttshirt').css('color', hex)
  } else {
    return false
  }
}

let makeBold = () => {
  $('#texttshirt').toggleClass('font-bolder')
}

let makeItalic = () => {
  $('#texttshirt').toggleClass('font-italic')
}


updateSliders()
