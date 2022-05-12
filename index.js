//document.querySelector(".selector") - повертає перший елемент який відповідає селектору переданому в аргумент
//document.querySelectorAll(".selector") - повертає масив елементів які відповідає селектору переданому в аргумент
//(будьякий елемент).innerHtml - міняє html елемента
//(будьякий елемент).append - додає до елемента
//document.createElement("div") - повертає новостворений елемент типу який переданий в якості парамету

const myTitle = document.querySelector("title")
myTitle.textContent = "Домашнє завдання №1"

const newMainTable__header = document.querySelector(".mainTable__header")
newMainTable__header.innerText = 'Допомога дитячому будинку';

const content = document.querySelector('.mainTable__content');
const imageWidth = document.querySelector('.mainTable__image');

content.style.width = imageWidth.offsetWidth + 'px';
