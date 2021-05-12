// 설정 모달창
const modalContainer = document.querySelector(".modal__container");
const pageBtn = document.querySelector(".pageBox_btn");
const pageBtnX = document.querySelector(".header__btn");
const pageBlock = document.querySelector("body");
const modalHiddenCon = document.querySelector(".modal_hiddenCon");

function onConClick() {
  modalContainer.style.display = "block";
}

function offConClick() {
  modalContainer.style.display = "none";
}

pageBtn.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className === "pageBox_btn") {
    onConClick();
    pageBlock.classList.add("scrollBlock");
    modalHiddenCon.classList.add("hiddenModal");
  }
});

pageBtnX.addEventListener("click", (e) => {
  if (e.target.className === "header__btn") {
    offConClick();
    pageBlock.classList.remove("scrollBlock");
    modalHiddenCon.classList.remove("hiddenModal");
  }
});

// 언어 변경 모달창
const snsBtn = document.querySelector(".sns__btn");
const modal = document.querySelector(".language__modal");
const modalBtn = document.querySelector(".modal__btn");
const modalHiddenLang = document.querySelector(".modal_hiddenLang");

function onSnsClick() {
  modal.style.display = "block";
}

function offSnsClick() {
  modal.style.display = "none";
}

snsBtn.addEventListener("click", (e) => {
  const snsButton = e.target.parentNode.className;
  if (snsButton === "sns__btn") {
    onSnsClick();
    modalHiddenLang.classList.add("hiddenModal");
    pageBlock.classList.add("scrollBlock");
  }
});

modalBtn.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.className === "modal__btn") {
    offSnsClick();
    modalHiddenLang.classList.remove("hiddenModal");
    pageBlock.classList.remove("scrollBlock");
  }
});
