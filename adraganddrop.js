// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.container')

// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     draggable.classList.add('dragging')
//   })

//   draggable.addEventListener('dragend', () => {
//     draggable.classList.remove('dragging')
//   })
// })

// containers.forEach(container => {
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     const afterElement = getDragAfterElement(container, e.clientY)
//     const draggable = document.querySelector('.dragging')
//     if (afterElement == null) {
//       container.appendChild(draggable)
//     } else {
//       container.insertBefore(draggable, afterElement)
//     }
//   })
// })

// function getDragAfterElement(container, y) {
//   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

//   return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect()
//     const offset = y - box.top - box.height / 2
//     if (offset < 0 && offset > closest.offset) {
//       return { offset: offset, element: child }
//     } else {
//       return closest
//     }
//   }, { offset: Number.NEGATIVE_INFINITY }).element
// }








const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');


let draggedItem = null;

for(let i=0; i < list_items.length; i++){
    const item=list_items[i];

    item.addEventListener('dragstart', function() {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0)
    });

    item.addEventListener('dragend', function() {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            
        },0);
    })

    for(let j=0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    list.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.style.backgroundColor='rgba(0, 0, 0, 0.2)';
    });
    list.addEventListener('dragleave', function(e) {
        this.style.backgroundColor='rgba(0, 0, 0, 0.1)';
    });
    list.addEventListener('drop', function(e) {
        console.log('drop');
        this.append(draggedItem);
        this.style.backgroundColor='rgba(0, 0, 0, 0.1)';
    });
    }}
