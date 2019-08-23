//form

var dropdown_li = document.querySelector(".countries-select__dropdown--choose");
var dropdown_div = document.querySelector(".countries-select__modal-wrapper");

if (dropdown_li) {
  dropdown_li.addEventListener('click', function (evt) {
    evt.preventDefault();
    dropdown_li.classList.toggle("countries-select__dropdown--active");
    dropdown_div.classList.toggle("countries-select__modal-wrapper--show");
  });
}
//catalog

var open_btn = document.querySelector(".filter__open-btn");
var top_wrapper = document.querySelector(".filter__top-wrapper");
var bottom_wrapper = document.querySelector(".filter__bottom-wrapper");

if (open_btn) {
  open_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    top_wrapper.classList.toggle("filter__top-wrapper--open");
    bottom_wrapper.classList.toggle("filter__bottom-wrapper--show");
  });
}
//index

var menu_btn = document.querySelector(".page-header__menu-btn");
var menu_wrapper = document.querySelector(".page-header__menu-wrapper");
var blue_logo = document.querySelector(".page-header__logo--blue");
var user_actions = document.querySelector(".page-header__actions");

menu_wrapper.classList.remove("page-header__menu-wrapper--no-js");
blue_logo.classList.remove("page-header__logo--show");

if (menu_btn) {
  menu_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu_wrapper.classList.toggle("page-header__menu-wrapper--show");
    if (!blue_logo.classList.contains("page-header__logo--show")) {
      blue_logo.classList.toggle("page-header__logo--show");
    }
  });
}

var business_showbtn = document.querySelector(".rates__business-btn");
var business_closebtn = document.querySelector(".business-rates__close-btn");
var business_modal = document.querySelector(".business-rates");
var menu_nav = document.querySelector(".menu__nav");
var header_top = document.querySelector(".page-header__top-wrapper");

if (business_showbtn) {
  business_showbtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    business_modal.classList.add("business-rates--show");
  });
}

if (business_closebtn) {
  business_closebtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    business_modal.classList.remove("business-rates--show");
  });
}

// scroll

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    blue_logo.classList.add("page-header__logo--show");
    menu_btn.classList.add("page-header__menu-btn--scroll");
    if (document.body.clientWidth >= 768) {
      user_actions.classList.add("page-header__actions--scroll");
    }
    if (document.body.clientWidth >= 1440) {
      menu_nav.classList.add("menu__nav--scroll");
      header_top.classList.add("page-header__top-wrapper--scroll");
    }
  } else {
    blue_logo.classList.remove("page-header__logo--show");
    menu_btn.classList.remove("page-header__menu-btn--scroll");
    user_actions.classList.remove("page-header__actions--scroll");
    menu_nav.classList.remove("menu__nav--scroll");
    header_top.classList.remove("page-header__top-wrapper--scroll");
  }
});
