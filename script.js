//your code here
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  let draggedElement = null;

  images.forEach(image => {
    image.addEventListener('dragstart', (e) => {
      draggedElement = e.target;
      setTimeout(() => {
        e.target.style.opacity = '0.5';
      }, 0);
    });

    image.addEventListener('dragend', (e) => {
      setTimeout(() => {
        e.target.style.opacity = '1';
        draggedElement = null;
      }, 0);
    });

    image.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    image.addEventListener('dragenter', (e) => {
      e.preventDefault();
      e.target.classList.add('selected');
    });

    image.addEventListener('dragleave', (e) => {
      e.target.classList.remove('selected');
    });

    image.addEventListener('drop', (e) => {
      e.target.classList.remove('selected');

      // Swap the background images of the dragged element and the target
      const temp = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = temp;
    });
  });
});

