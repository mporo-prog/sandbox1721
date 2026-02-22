document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

  function randomMax(maxNumber){
    return Math.floor(Math.random() * maxNumber)
  }
  
  function spawn1(){
    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.background = '#111'
    div.style.width = '100px'
    div.style.height = '100px'
    let top1 = randomMax(maxHeight)
    let left1 = randomMax(maxWidth)
    div.style.top = `${top1}px`
    div.style.left = `${left1}px`
    box1.append(div)
  }
  
  
  let box1 = document.querySelector("[data-js='t17-area']")
  let maxWidth = box1.clientWidth - 100
  let maxHeight = box1.clientHeight - 100

  setInterval(spawn1, 1000)




  function spawn2(){
    let div2 = document.createElement('div')
    div2.style.position = 'absolute'
    div2.style.width = '100px'
    div2.style.height = '100px'
    div2.style.background = '#111'
    div2.style.left = `${box2.clientWidth}px`
    box2.append(div2)
    requestAnimationFrame(() => step2(div2))
  }

  function step2(div){
    let currentLeft = parseInt(div.style.left)
    let nextLeft = currentLeft - 1
    div.style.left = `${nextLeft}px`
    if(nextLeft + div.clientWidth <= 0){
      div.remove()
      return
    }
    requestAnimationFrame(() => step2(div))
  }

  let box2 = document.querySelector("[data-js='t18-area']")
  setInterval(spawn2, 1000)
  



  function spawn3(){
    let div2 = document.createElement('div')
    div2.style.position = 'absolute'
    div2.style.width = '100px'
    div2.style.height = '100px'
    div2.style.background = '#111'
    let top1 = randomMax(maxHeight)
    div2.style.left = `${box2.clientWidth}px`
    div2.style.top = `${top1}px`
    box3.append(div2)
    requestAnimationFrame(() => step3(div2))
  }
  
  function step3(div){
    let currentLeft = parseInt(div.style.left)
    let nextLeft = currentLeft - 1
    div.style.left = `${nextLeft}px`
    if(nextLeft + div.clientWidth <= 0){
      div.remove()
      return
    }
    requestAnimationFrame(() => step3(div))
  }
  
  let box3 = document.querySelector("[data-js='t19-area']")
  setInterval(spawn3, 1000)


  function spawn4(){
    let div2 = document.createElement('div')
    div2.style.position = 'absolute'
    div2.style.width = '100px'
    div2.style.height = '100px'
    div2.style.background = '#111'
    let top1 = randomMax(maxHeight)
    div2.style.left = `${box4.clientWidth}px`
    div2.style.top = `${top1}px`
    box4.append(div2)
    requestAnimationFrame(() => step4(div2))
    div2.addEventListener("click", () => {
      let span = document.querySelector("[data-js='t20-score']")
      let score = span.textContent++
      span.style.textContent = score
      div2.remove()
    })
  }
  
  function step4(div){
    let currentLeft = parseInt(div.style.left)
    let nextLeft = currentLeft - 1
    div.style.left = `${nextLeft}px`
    if(nextLeft + div.clientWidth <= 0){
      div.remove()
      return
    }
    requestAnimationFrame(() => step4(div))
  }
  
  let box4 = document.querySelector("[data-js='t20-area']")
  setInterval(spawn4, 1000)

  function game(){

    function spawn5(){
      let div2 = document.createElement('div')
      div2.classList.add('newDiv')
      div2.style.position = 'absolute'
      div2.style.width = '100px'
      div2.style.height = '100px'
      div2.style.background = '#111'
      let top1 = randomMax(maxHeight)
      div2.style.left = `${box5.clientWidth}px`
      div2.style.top = `${top1}px`
      box5.append(div2)
      div2.addEventListener("click", () => {
        let score = span.textContent++
        span.style.textContent = score
        div2.style.hidden = true
        console.log(div2.style.hidden)
        div2.remove()
      })
      requestAnimationFrame(() => {
        if(lives.textContent == "0"){
          gameOver.style.visibility = 'visible'
          return
        }
        step5(div2)
      })
      if(lives.textContent == "0"){
          return
      }
    }
    
    function step5(div){
      let currentLeft = parseInt(div.style.left)
      let nextLeft = currentLeft - 1
      div.style.left = `${nextLeft}px`
      if(nextLeft + div.clientWidth <= 0){
        if(!div.style.hidden){
          lives.textContent--
        }
        if(lives.textContent == "0"){
          return
        }
        div.remove()
        return
      }
      requestAnimationFrame(() => {
        if(lives.textContent == "0"){
          return
        }
        step5(div)
      })
    }
    setInterval(spawn5, 1000)
  }
  let span = document.querySelector("[data-js='t21-score']")
  let box5 = document.querySelector("[data-js='t21-area']")
  let lives = document.querySelector("[data-js='t21-lives']")
  let gameOver = document.querySelector("[data-js='t21-game-over']")
  let button21 = document.querySelector('[data-js="t21-restart"]')
    
    
  button21.addEventListener("click", () => {
    gameOver.style.visibility = 'hidden'
    lives.textContent = 3
    span.textContent = 0
    let list = document.querySelectorAll('.newDiv')
    list.forEach(element => {
      element.remove()
    });
  })

game()
});
