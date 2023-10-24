const inputEl = document.getElementById('input')
const saveBtn = document.getElementById('save')
let listEl = document.getElementById('list')

function save(){
    let inputVal = inputEl.value;
    if (inputVal !== ''){        
        const newListItem = document.createElement('li');
        newListItem.textContent = inputVal;
        
        listEl.appendChild(newListItem);
        inputEl.value = '';
    }else{
        alert('Type Something First')
    }
}


saveBtn.addEventListener('click', save)