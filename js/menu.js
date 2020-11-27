//---------------Меню бургер------------------

document.querySelector('.burger-wrapper').onclick = togle;

function togle() {
    document.querySelector('.polosa').classList.toggle('polosa-active'); // анимация крестика
    document.querySelector('.mob-menu').classList.toggle('active'); // выдвижение меню
    document.querySelector('.main-menu').classList.toggle('activeMenu') 
    document.querySelector('.mob-menu-content').classList.toggle('active-2')   //плавно выезжает мобильное меню
}

document.querySelector('.mob-menu').onclick = togle2; // для задвижения меню по клику на него и анимация крестика

function togle2() {
    let menu = document.querySelector('.mob-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')

    }
    document.querySelector('.main-menu').classList.remove('activeMenu') 

    document.querySelector('.polosa').classList.toggle('polosa-active');
    document.querySelector('.mob-menu-content').classList.toggle('active-2') //плавно выезжает мобильное меню
}

