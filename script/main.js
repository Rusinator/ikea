//day1
'use strict';
const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div'); // создаем элемент div

overlay.classList.add('overlay'); // добавляем ему класс overlay
document.body.insertAdjacentElement(`beforeend`, overlay); // впихиваем его перед концом тега body

const openMenu = () => {  // стрелочная функция
    catalog.classList.add('open');  // добавляет класс обьекту при событии 'click'
    overlay.classList.add('active'); // добавляет класс обьекту при событии 'click'
};
const closeMenu = () => {
    catalog.classList.remove('open'); // убирает класс у обьекта при событии 'click'
    overlay.classList.remove('active');  
    closeSubMenu();
};


const openSubMenu = (event) => {
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    };
};

 const closeSubMenu = () => {
     subCatalog.classList.remove('subopen');
 }

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);