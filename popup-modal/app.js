const modalButton = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelectorAll("[ data-close-button]");

modalButton.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.target);
        openModal(modal);
    });
});

function openModal(modal) {
    if(modal == null) return;
    overlay.classList.add("active");
    modal.classList.add("active");
}

closeButton.forEach(button => {
    button.addEventListener("click", () => {
       const closeModal = button.closest(".modal");
       closeActiveModal(closeModal);
    });
});

overlay.addEventListener("click", () => {
    const activeModal = document.querySelectorAll(".modal.active");
    activeModal.forEach(modal => {
        closeActiveModal(modal);
    });
});

function closeActiveModal(closeModal) {
    if(closeModal == null) return;
    closeModal.classList.remove("active");
    overlay.classList.remove("active");
}