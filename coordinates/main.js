
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e)=>{
    console.log(e.clientX)
    console.log(e.clientY)
    let x = e.clientX
    let y = e.clientX
    horizontal.style.top = `${y}px`
    vertical.style.left = `${x}px`
    target.style.top = `${y}px`
    target.style.left = `${x}px`
    tag.style.top = `${y}px`
    tag.style.left = `${x}px`
    tag.innerHTML = `${x}px, ${y}px`
})

function getTag(e){
    console.log(e.clientX)
    console.log(e.clientY)
}