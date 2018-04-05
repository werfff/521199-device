// Папка для скриптов.
//
// --
//
// Пример структуры файлов:
//
// js/
// | - script.js
// | - [другие *.js файлы]
//

// function demoDisplay() {
//  document.getElementById("myP1").style.display = "none";
// }

var link = document.querySelector(".account-link");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  if (storage) {
    login.value = storage;
    password.focus();
    } else {
    login.focus();
}
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Нужно ввести логин и пароль");
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
  });


  var writeLink = document.querySelector(".write-pop-up");

  var writePopup = document.querySelector(".write-popup");
  var writeClose = writePopup.querySelector(".popup-close-botton");

  var writeForm = writePopup.querySelector(".form-write-us");

  var writeName = writePopup.querySelector("[name=name]");
  var writeEmail = writePopup.querySelector("[name=email]");
  var writeLetter = writePopup.querySelector("[name=letter]");

  var storage_name = localStorage.getItem("name"),
  var storage_email = localStorage.getItem("email");

  writeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    writeName.focus();
  });

  writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
  });

  writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeEmail.value || !writeLetter.value) {
      evt.preventDefault();
      writePopup.classList.remove("modal-error");
      writePopup.offsetWidth = writePopup.offsetWidth;
      writePopup.classList.add("modal-error");
    }
    else {
      localStorage.setItem("name", writeName.value);
      localStorage.setItem("email",  writeEmail.value);
    }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      if (writePopup.classList.contains("modal-show")) {
        writePopup.classList.remove("modal-show");
        writePopup.classList.remove("modal-error");
      }
    });



    var mapLink = document.querySelector(".map");

    var mapPopup = document.querySelector(".map-popup");
    var mapClose = mapPopup.querySelector(".popup-close-botton");

    mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
      });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
    }
    });
