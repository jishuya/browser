document.addEventListener('mousemove', (e)=>{
    const x = e.clientX
    const y = e.clientY

    const horizontal = document.querySelector('.horizontal')
    const vertical = document.querySelector('.vertical')
    const target = document.querySelector('.target')
    const tag = document.querySelector('.tag')
    const rect = target.getBoundingClientRect()
    const hweidth = rect.width / 2; 
    const hHeight = rect.height / 2; 
    console.log(hHeight, hweidth)

    horizontal.style.transform = `translateY(${y}px)`
    vertical.style.transform = `translateX(${x}px)`
    target.style.transform = `translate(${x- hweidth}px, ${y - hHeight}px)`
    tag.style.transform = `translate(${x}px, ${y}px)`
    tag.innerHTML = `${x}px, ${y}px`
    
})


// DOM 조작하기 