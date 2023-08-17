const navBar = document.getElementById("nav-bar");

if (window.innerWidth <= 768) {
  navBar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
} else if (window.innerWidth > 768) {
  navBar.style.backgroundColor = "transparent";
}

window.addEventListener("scroll", (event) => {
  if (window.scrollY >= 100 || window.innerWidth <= 768) {
    navBar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else if (window.scrollY < 100 || window.innerWidth > 768) {
    navBar.style.backgroundColor = "transparent";
  }
});

$(document).ready(function () {
  $("#btn-burger").click(function () {
    $("#nav-bar").toggleClass("isOpen");
  });

  $("#btn-burger").click(function (e) {
    e.preventDefault();
    $this = $(this);
    if ($this.hasClass("is-opened")) {
      $this.addClass("is-closed").removeClass("is-opened");
    } else {
      $this.removeClass("is-closed").addClass("is-opened");
    }
  });
});

/****** test clickTerre ****** */

window.addEventListener("click", (event) => {
  // console.log(event);

  const motte = document.createElement("div");
  motte.className = "clickTerre";
  motte.style.top = `${event.pageY - 15}px`;
  motte.style.left = `${event.pageX - 15}px`;
  document.body.appendChild(motte);

  setTimeout(() => {
    motte.remove();
  }, 1500);
});

// Validation email
// =========================

const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector(".newsletters-email");
const errorMessage = document.querySelector(".error-message");
const modal = document.querySelector(".newsletters-modal-container");
const closeModalBtn = document.querySelector(".close-modal");

function closeModal() {
  modal.classList.add("hidden");
}
function showModal() {
  modal.classList.remove("hidden");
}

function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

