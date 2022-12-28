const horizontal = document.querySelector('.horizontal')
    const vertical = document.querySelector('.vertical')
    const target = document.querySelector('.target')
    const tag = document.querySelector('.tag')

addEventListener('load', ()=>{
    document.addEventListener('mousemove', (e)=>{
        const x = e.clientX
        const y = e.clientY
        const targetRect = target.getBoundingClientRect();
        const halfWeight = targetRect.width / 2;
        const halfHeight = targetRect.height / 2;
    
        horizontal.style.transform = `translateY(${y}px)`
        vertical.style.transform = `translateX(${x}px)`
        target.style.transform = `translate(${x-halfWeight}px, ${y - halfHeight}px)`
        tag.style.transform = `translate(${x}px, ${y}px)`
        tag.innerHTML = `${x}px, ${y}px`
        
    })
    
})