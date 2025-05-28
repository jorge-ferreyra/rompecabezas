export function initDragAndDrop() {
  const pieza1 = document.getElementById('pieza1');
  const pieza2 = document.getElementById('pieza2');
  const pieza3 = document.getElementById('pieza3');
  const pieza4 = document.getElementById('pieza4');
  const pieza5 = document.getElementById('pieza5');
  const pieza6 = document.getElementById('pieza6');

  const piezas = [pieza1, pieza2, pieza3, pieza4, pieza5, pieza6].filter(Boolean);

  let dragged = null;

  piezas.forEach((pieza) => {
    if (!pieza) {
        console.warn(`Element with ID ${pieza ? pieza.id : 'unknown'} not found.`);
        return;
    }

    pieza.draggable = true;

    pieza.addEventListener('dragstart', (e) => {
      dragged = pieza;
      pieza.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', pieza.id);
    });

    pieza.addEventListener('dragend', () => {
      dragged = null;
      pieza.classList.remove('dragging');
    });

    pieza.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });

    pieza.addEventListener('drop', (e) => {
      e.preventDefault();
      if (dragged && dragged !== pieza) {
        const parent = pieza.parentNode;
        if (Array.from(parent.children).indexOf(dragged) < Array.from(parent.children).indexOf(pieza)) {
            parent.insertBefore(dragged, pieza.nextSibling);
        } else {
            parent.insertBefore(dragged, pieza);
        }
      }
    });
  });

  console.log('Drag and drop functionality initialized.');
}