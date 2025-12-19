// MAIN CONTAINER
const main = document.createElement('main');
main.style.height = '100vh';
main.style.backgroundColor = '#001F3F';
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';

document.body.appendChild(main);

// APP BOX
const app = document.createElement('div');
app.style.width = '320px';
app.style.padding = '20px';
app.style.backgroundColor = '#e5c10dff';
app.style.borderRadius = '10px';
app.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
app.style.fontFamily = 'Arial, sans-serif';

main.appendChild(app);

// INPUT
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter task...';
input.style.width = '100%';
input.style.padding = '10px';
input.style.marginBottom = '10px';
input.style.boxSizing = 'border-box';

app.appendChild(input);

// ADD / UPDATE BUTTON
const addBtn = document.createElement('button');
addBtn.textContent = 'Add ✅';
addBtn.style.width = '100%';
addBtn.style.padding = '10px';
addBtn.style.backgroundColor = '#001F3F';
addBtn.style.color = '#e5c10dff';
addBtn.style.border = 'none';
addBtn.style.borderRadius = '5px';
addBtn.style.cursor = 'pointer';

app.appendChild(addBtn);

// LIST
const list = document.createElement('ul');
list.style.listStyle = 'none';
list.style.padding = '0';
list.style.marginTop = '15px';

app.appendChild(list);

// EDIT MODE VARIABLES
let editLi = null;
let editTextSpan = null;

// ADD / UPDATE FUNCTION
function addTask() {
    if (input.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    // 🟡 UPDATE MODE
    if (editLi) {
        editTextSpan.textContent = input.value;
        editLi = null;
        editTextSpan = null;
        addBtn.textContent = 'Add ✅';
        input.value = '';
        return;
    }

    // 🟢 ADD MODE
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.marginBottom = '8px';
    li.style.backgroundColor = '#fff';
    li.style.padding = '8px';
    li.style.borderRadius = '5px';

    const text = document.createElement('span');
    text.textContent = input.value;
    text.style.color = '#001F3F';
    text.style.wordBreak = 'break-word';

    // BUTTON WRAPPER
    const btnBox = document.createElement('div');

    // ✏️ EDIT BUTTON
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.marginRight = '5px';
    editBtn.style.backgroundColor = '#e5c10dff';
    editBtn.style.border = 'none';
    editBtn.style.cursor = 'pointer';

    editBtn.addEventListener('click', function () {
        input.value = text.textContent;
        editLi = li;
        editTextSpan = text;
        addBtn.textContent = 'Update ✅';
    });

    // ❌ DELETE BUTTON
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.backgroundColor = '#001F3F';
    delBtn.style.color = 'white';
    delBtn.style.border = 'none';
    delBtn.style.cursor = 'pointer';

    delBtn.addEventListener('click', function () {
        li.remove();
    });

    btnBox.appendChild(editBtn);
    btnBox.appendChild(delBtn);

    li.appendChild(text);
    li.appendChild(btnBox);
    list.appendChild(li);

    input.value = '';
}

// EVENTS
addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

