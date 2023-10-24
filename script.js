const inputEl = document.getElementById('input')
const saveBtn = document.getElementById('save')
let listEl = document.getElementById('list')

let i = 0;

function save(){
    let inputVal = inputEl.value;
    
    if (inputVal !== ''){        
        const newListItem = document.createElement('li');
        const checkboxInput = document.createElement('input');

        newListItem.id = i;
        checkboxInput.type = 'checkbox';
        checkboxInput.id = i;

        checkboxInput.addEventListener('change', () => {
            const clickedCheckboxId = checkboxInput.id;
            const liEl = document.getElementById(`${clickedCheckboxId}`);
            if(checkboxInput.checked){
                 liEl.classList.add('selected')
            }else{
                liEl.classList.remove('selected')
            }
        })

        newListItem.appendChild(checkboxInput);
        newListItem.appendChild(document.createTextNode(inputVal)); 

        listEl.appendChild(newListItem);
        inputEl.value = '';
        i++;
    }else{
        alert('Type Something First')
    }
}


saveBtn.addEventListener('click', save)
