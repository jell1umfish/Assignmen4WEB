const items = document.querySelectorAll('.item');
const dropzones = document.querySelectorAll('.dropzone');

for (const item of items) {
  item.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('item', item.textContent);
  });
}

for (const dropzone of dropzones) {
  dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  dropzone.addEventListener('drop', (event) => {
    event.preventDefault();

    const item = event.dataTransfer.getData('item');
    const itemElement = document.getAttribute('alt').createElement('div');
    itemElement.textContent = item;

    if (dropzone.getAttribute('data-order') === item) {
      dropzone.classList.add('correct');
      dropzone.appendChild(itemElement);
    } else {
      dropzone.classList.add('incorrect');
      setTimeout(() => {
        dropzone.classList.remove('incorrect');
      }, 200);
    }
  });
}
