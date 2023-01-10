const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴 
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const itemRow = createItem(text);
    items.appendChild(itemRow)

    items.scrollIntoView({block: 'center'}) 

    input.value = '';
    input.focus();
}

function createItem(text){
    const  itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.innerText = text;

    const itemDelete = document.createElement('button');
    itemDelete.setAttribute('class', 'item__delete');
    itemDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

    itemDelete.addEventListener('click', ()=>{
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(itemName);
    item.appendChild(itemDelete);

    itemRow.appendChild(item);

    return itemRow;
}


addBtn.addEventListener('click', ()=>{
    onAdd()
})


input.addEventListener('keypress', (e)=>{
   if (e.key === 'Enter'){
    onAdd();
   }
})