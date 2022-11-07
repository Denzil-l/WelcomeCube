//Math.floor() - (2.1) = 2, (2.5) = 2, (2.9) = 5, 3 = 3
//Math.round() - (2.1) = 2, (2.5) = 3, (2.9) = 3, 3 = 3
//Math.min() - (1,2,3) = 1
//Math.max() - (1,2,3) = 3
//Math.pow() - (2,3) = 2^3 = 8
//Math.random() - число в диапазоне 0-1
//Math.sign() - (-3) = -1, (3) = 1, (0) = 0, (-4324) = -1, (32144) = 1
//Math.sqrt() - (9) = 3
//Math.trunc() - (1.321321312) = 1, (-32.412412) = -32

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.

// ARRAY.splice(index[, deleteCount, elem1, ..., elemN]) Работает как все что сверху вместе
const link1 = document.querySelector('.link-one')
const link2 = document.querySelector('.link-two')
const link3 = document.querySelector('.link-three')
const CubeShirma = document.querySelector('.cube-shirma')
const CubeOpen = document.querySelector('.openCube')
const Cube = document.querySelector('.cube')
const CubeDiv = document.querySelector('.cube div')
const CubeDivSpan = document.querySelectorAll('.cube .big span')
const CubeDivSpanTop = document.querySelector('.cube .big span.top')
const CubeDivSpanBottom = document.querySelector('.cube .big span.bottom')
const CubeDivSpanTopBefor = document.querySelector('.cube .big span.top::before')
console.log(CubeDiv)
console.log(CubeOpen)
console.log(CubeDivSpan)
console.log(CubeDivSpanTop)
console.log(CubeDivSpanTopBefor)


CubeOpen.addEventListener('click', ()=> {
CubeShirma.style.display = 'none'
Cube.style.overflow = 'visible'
Cube.style.background = 'transparent'
CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
CubeDivSpan.forEach((elem, index) => {
    CubeDivSpan[index].style.transform = 'rotateY(calc(90deg * var(--i))) translateZ(150px)'
    CubeDivSpan[index].style.border = '10px solid gold'
    CubeDivSpan[index].style.borderRadius = '15px'
    CubeDivSpan[index].style.filter = 'drop-shadow(0 0 20px #ffa20d)'
})
CubeOpen.style.background = 'rgba($color: black, $alpha: 0.0)'
CubeOpen.style.display = 'none'

setTimeout(() => {
    setTimeout(() => {link1.innerHTML += 'G'},100)
    setTimeout(() => {link1.innerHTML += 'I'},200)
    setTimeout(() => {link1.innerHTML += 'T'},300)
    setTimeout(() => {link1.innerHTML += 'H'},400)
    setTimeout(() => {link1.innerHTML += 'U'},500)
    setTimeout(() => {link1.innerHTML += 'B'},600)
    
    setTimeout(() => {link2.innerHTML += 'L'},100)
    setTimeout(() => {link2.innerHTML += 'I'},200)
    setTimeout(() => {link2.innerHTML += 'N'},300)
    setTimeout(() => {link2.innerHTML += 'K'},400)
    setTimeout(() => {link2.innerHTML += 'E'},500)
    setTimeout(() => {link2.innerHTML += 'D'},600)
    setTimeout(() => {link2.innerHTML += 'I'},700)
    setTimeout(() => {link2.innerHTML += 'N'},800)

    setTimeout(() => {link3.innerHTML += 'P'},100)
    setTimeout(() => {link3.innerHTML += 'O'},200)
    setTimeout(() => {link3.innerHTML += 'R'},300)
    setTimeout(() => {link3.innerHTML += 'T'},400)
    setTimeout(() => {link3.innerHTML += 'F'},500)
    setTimeout(() => {link3.innerHTML += 'O'},600)
    setTimeout(() => {link3.innerHTML += 'L'},700)
    setTimeout(() => {link3.innerHTML += 'I'},800)
    setTimeout(() => {link3.innerHTML += 'O'},900)

},3000)

CubeDivSpanTop.style.transform = 'rotateX(90deg) translateZ(150px)'
CubeDivSpanBottom.style.transform = 'rotateX(90deg) translateZ(-150px)'


})


setTimeout(()=>{
    CubeDivSpan[0].addEventListener('mouseover', ()=>{
        CubeDiv.style.transform = 'rotateX(0deg) rotateY(0deg)'
    
    })
    CubeDivSpan[0].addEventListener('mouseout', ()=>{
        CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
    
    })
    CubeDivSpan[1].addEventListener('mouseover', ()=>{
        CubeDiv.style.transform = 'rotateX(0deg) rotateY(-90deg)'
    
    })
    CubeDivSpan[1].addEventListener('mouseout', ()=>{
        CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
    
    })
    CubeDivSpanTop.addEventListener('mouseover', ()=>{
        CubeDiv.style.transform = 'rotateX(-90deg) rotateY(0deg)'
    
    })
    CubeDivSpanTop.addEventListener('mouseout', ()=>{
        CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
    
    })
    
},3100)

