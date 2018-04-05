var link = document.querySelector('.write-pop-up'),
    popup = document.querySelector('.write-popup'),
    popup_close = popup.querySelector('.popup-close-botton'),
    form = popup.querySelector('.form-write-us'),
    nickname = popup.querySelector('[name=name]'),
    email = popup.querySelector('[name=email]'),
    letter = popup.querySelector('[name=letter]'),
    map_link = document.querySelector('.map'),
    map_modal = document.querySelector('.map-popup'),
    map_close = map_modal.querySelector('.popup-close-botton'),
    storage_name = localStorage.getItem('name'),
    storage_email = localStorage.getItem('email');
link.addEventListener('click', function(a) {
        a.preventDefault(),
            popup.classList.add('modal-show'),
            storage_name ? (nickname.value = storage_name, storage_email ? (email.value = storage_email, letter.focus()) : email.focus()) : nickname.focus()
    }),
    popup_close.addEventListener('click', function(a) {
        a.preventDefault(),
            popup.classList.remove('modal-show'),
            popup.classList.remove('modal-error')
    }),
    window.addEventListener('keydown', function(a) {
        27 === a.keyCode && (popup.classList.contains('modal-show') && (popup.classList.remove('modal-show'), popup.classList.remove('modal-error')), map_modal.classList.contains('modal-show') && map_modal.classList.remove('modal-show'))
    }),
    form.addEventListener('submit', function(a) {
        nickname.value && email.value && letter.value ? (localStorage.setItem('name', nickname.value), localStorage.setItem('email', email.value)) : (a.preventDefault(), popup.classList.remove('modal-error'), popup.offsetWidth = popup.offsetWidth, popup.classList.add('modal-error'))
    }),
    map_link.addEventListener('click', function(a) {
        a.preventDefault(),
            map_modal.classList.add('modal-show')
    }),
    map_close.addEventListener('click', function(a) {
        a.preventDefault(),
            map_modal.classList.remove('modal-show')
    });

var key_link = document.querySelector(".account-link");

var key_popup = document.querySelector(".modal-login");
var key_close = key_popup.querySelector(".modal-close");

var key_form = key_popup.querySelector("form");
var key_login = key_popup.querySelector("[name=login]");
var key_password = key_popup.querySelector("[name=password]");

var key_storage = localStorage.getItem("login");

key_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    key_popup.classList.add("modal-show");
    key_login.focus();
    if (storage) {
        key_login.value = storage;
        key_password.focus();
    } else {
        key_login.focus();
    }
});
key_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    key_popup.classList.remove("modal-show");
    key_popup.classList.remove("modal-error_2");
});

key_form.addEventListener("submit", function(evt) {
    if (!key_login.value || !key_password.value) {
        evt.preventDefault();
        key_popup.classList.remove("modal-error_2");
        key_popup.offsetWidth = key_popup.offsetWidth;
        console.log("Нужно ввести логин и пароль");
        key_popup.classList.add("modal-error_2");
    } else {
        localStorage.setItem("login", key_login.value);
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (key_popup.classList.contains("modal-show")) {
            key_popup.classList.remove("modal-show");
            key_popup.classList.remove("modal-error_2");
        }
    }
});
