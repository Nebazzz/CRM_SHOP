import elements from './elements.js';

const {
  modal,
  closeModalButton,
} = elements;

const modalControl = (openModalButton, modalVisible) => {
  const openModal = () => {
    modalVisible.style.display = 'flex';
  };

  const closeModal = () => {
    modalVisible.style.display = 'none';
  };

  openModalButton.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);

  modalVisible.addEventListener('mouseup', (e) => {
    if (!modalVisible.contains(e.target)) {
      closeModal();
    }
  });

  modalVisible.addEventListener('click', (e) => {
    const isClickInside = e.composedPath().includes(modal) ||
      e.target === openModalButton;
    if (!isClickInside) {
      closeModal();
    }
  });

  return { closeModal };
};

export { modalControl };