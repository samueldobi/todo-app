// const addBtn = document.querySelector('.plus')
// const addList = document.querySelector('.lists')
// const inputForm = document.querySelector('input[name="task-input"]')

// addBtn.addEventListener('click', ()=>{
//     const newList=  document.createElement("div")
//     newList.classList.add('tasks')
//     const inputValue = inputForm.value
//     const text = document.createTextNode(inputValue)
//     newList.appendChild(text)
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     addList.appendChild(newList);
//   }
//   inputForm.value = "";
//   console.log
// })

// const addBtn = document.querySelector('.plus');
// const addList = document.querySelector('.lists');
// const inputForm = document.querySelector('input[name="task-input"]');

// addBtn.addEventListener('click', () => {
//   const inputValue = inputForm.value;

//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     const taskCount = addList.childElementCount;
    
//     if (taskCount < 5) {
//       const newList = document.createElement("div");
//       newList.classList.add('tasks');

//       const deleteBtn = document.createElement("span");
//       deleteBtn.classList.add('delete');
//       deleteBtn.innerHTML = "&#10006;";
//       deleteBtn.style.color ='red';

//       const text = document.createTextNode(inputValue);

//       newList.appendChild(text);
//       newList.appendChild(deleteBtn);
//       addList.appendChild(newList);
//     } else {
//       alert("You cannot add more than 5 tasks!");
//     }
//   }

//   inputForm.value = "";
// });

// addList.addEventListener('click', (event) => {
//   if (event.target.classList.contains('delete')) {
//     const task = event.target.parentElement;
//     addList.removeChild(task);
//   }
// });

const addBtn = document.querySelector('.plus');
const addList = document.querySelector('.lists');
const inputForm = document.querySelector('input[name="task-input"]');

addBtn.addEventListener('click', () => {
  const inputValue = inputForm.value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    const taskCount = addList.childElementCount;

    if (taskCount < 5) {
      const newList = document.createElement("div");
      newList.classList.add('tasks');

      const taskText = document.createElement("span");
      taskText.textContent = inputValue;
      taskText.classList.add('task-text');

      const deleteBtn = document.createElement("span");
      deleteBtn.innerHTML = "&#10006;";
      deleteBtn.classList.add('delete', 'make');
      deleteBtn.style.color = 'red';

      newList.appendChild(taskText);
      newList.appendChild(deleteBtn);
      addList.appendChild(newList);
    } else {
      alert("You cannot add more than 5 tasks!");
    }
  }

  inputForm.value = "";
});

addList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const task = event.target.parentElement;
    addList.removeChild(task);
  }
});
