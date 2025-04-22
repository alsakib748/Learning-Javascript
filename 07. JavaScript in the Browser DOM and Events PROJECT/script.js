"use strict";

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// console.log(modal);
// console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", function () {
//     console.log(btnsOpenModal[i].textContent + " clicked!");
//     modal.classList.remove("hidden");
//   });

const modall = document.querySelector(".modall");
const overlayy = document.querySelector(".overlayy");
const btnCloseModall = document.querySelector(".close-modall");
const btnsOpenModall = document.querySelectorAll(".show-modal");

const openModall = function () {
  modall.classList.remove("hidden");
  overlayy.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModall.length; i++) {
  btnsOpenModall[i].addEventListener("click", openModall);
}

const closeModall = function () {
  modall.classList.add("hidden");
  overlayy.classList.add("hidden");
};

btnCloseModall.addEventListener("click", closeModall);

overlayy.addEventListener("click", function () {
  // modall.classList.add("hidden");
  // overlayy.classList.add("hidden");
  closeModall();
});

document.addEventListener("keydown", function (e) {
  // console.log("A key was pressed!");
  console.log(e.key);

  // if (e.key === "Escape") {
  //   console.log("Escape was pressed!");
  // }

  if (e.key === "Escape") {
    if (!modall.classList.contains("hidden")) {
      closeModall();
    }
  }
});
