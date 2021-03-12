const modalLink = document.querySelector(".map-button");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".contact-form");
const modalName = modalPopup.querySelector(".contact-form-field");
const modalEmail = modalPopup.querySelector(".form-email");

let isStoreageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStoreageSupport = false;
}

modalLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-show");

    if (storage) {
        modalName.value = storage;
        modalEmail.focus();
    } else {
        modalName.focus();
    }

    modalName.focus();
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-show");
    modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {
    if (!modalName.value || !modalEmail.value) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-error");
        modalPopup.offsetWidth = modalPopup.offsetWidth;
        modalPopup.classList.add("modal-error");

    } else {
        if (isStoreageSupport) {
            localStorage.setItem("name", modalName.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            modalPopup.classList.remove("modal-show");
        }
    }
})
