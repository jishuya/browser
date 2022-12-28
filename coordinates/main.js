document.addEventListener('mousemove', (e)=>{
    const x = e.clientX
    const y = e.clientY

    const horizontal = document.querySelector('.horizontal')
    const vertical = document.querySelector('.vertical')
    const target = document.querySelector('.target')
    const tag = document.querySelector('.tag')

    horizontal.style.top = `${y}px`
    vertical.style.left = `${x}px`
    target.style.top = `${y}px`
    target.style.left = `${x}px`
    tag.style.top = `${y}px`
    tag.style.left = `${x}px`
    tag.innerHTML = `${x}px, ${y}px`
    
})