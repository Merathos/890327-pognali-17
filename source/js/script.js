//form

const dropdown_li = document.querySelector(".countries-select__dropdown--choose");
const dropdown_div = document.querySelector(".countries-select__modal-wrapper");

if (dropdown_li) {
  dropdown_li.addEventListener('click', evt => {
    evt.preventDefault();
    dropdown_li.classList.toggle("countries-select__dropdown--active");
    dropdown_div.classList.toggle("countries-select__modal-wrapper--show");
  });
}
//catalog

const open_btn = document.querySelector(".filter__open-btn");
const top_wrapper = document.querySelector(".filter__top-wrapper");
const bottom_wrapper = document.querySelector(".filter__bottom-wrapper");

if (open_btn) {
  open_btn.addEventListener('click', evt => {
    evt.preventDefault();
    top_wrapper.classList.toggle("filter__top-wrapper--open");
    bottom_wrapper.classList.toggle("filter__bottom-wrapper--show");
  });
}
//index

const menu_btn = document.querySelector(".page-header__menu-btn");
const menu_wrapper = document.querySelector(".page-header__menu-wrapper");

if (menu_btn) {
  menu_btn.addEventListener('click', evt => {
    evt.preventDefault();
    menu_wrapper.classList.toggle("page-header__menu-wrapper--show");
  });
}

const business_showbtn = document.querySelector(".rates__business-btn");
const business_closebtn = document.querySelector(".business-rates__close-btn");
const business_modal = document.querySelector(".business-rates");

if (business_showbtn) {
  business_showbtn.addEventListener('click', evt => {
    evt.preventDefault();
    business_modal.classList.add("business-rates--show");
  });
}

if (business_closebtn) {
  business_closebtn.addEventListener('click', evt => {
    evt.preventDefault();
    business_modal.classList.remove("business-rates--show");
  });
}
