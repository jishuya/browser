const myTag = document.querySelector('#list-1')


function addList(){
    const name = document.querySelector('#name').value;
    console.log(name)
    const newList = document.createElement('li')
    newList.innerText = name
    myTag.append(newList)
}


