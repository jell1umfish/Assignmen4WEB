// Add the draggable attribute to all the items.
const draggableItems = document.querySelectorAll('.draggable');
draggableItems.forEach((item) => {
  item.setAttribute('draggable', true);
});

// Add the drop event listener to all the drop zones.
const dropZones = document.querySelectorAll('.drop-zone');
dropZones.forEach((dropZone) => {
  dropZone.addEventListener('drop', (event) => {
    // Get the dragged item.
    const draggedItem = event.dataTransfer.getData('text/plain');

    // Append the dragged item to the drop zone.
    dropZone.appendChild(document.getElementById(draggedItem));
  });
});

// Add the dragstart event listener to all the draggable items.
draggableItems.forEach((item) => {
  item.addEventListener('dragstart', (event) => {
    // Set the dataTransfer object with the dragged item's ID.
    event.dataTransfer.setData('text/plain', item.id);
  });
});
