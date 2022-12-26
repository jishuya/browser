
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', ()=>{
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width /2;
    const targetHalfHeith = targetRect.height /2;

    document.addEventListener('mousemove', (e)=>{
        let x = e.clientX
        let y = e.clientX
    
        vertical.style.transform = `translateX(${x}px)`
        horizontal.style.transform = `translateY(${y}px)`
        target.style.transform = `translate(${x}px, ${y}px)`
        tag.style.transform = `translate(${x}px, ${y}px)`
        tag.innerHTML = `${x}px, ${y}px`
        
    
    })

})



