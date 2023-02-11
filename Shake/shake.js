
const ham_btn = document.querySelector('.icon1');
const cross_btn = document.querySelector('.icon2');
const sidebar = document.querySelector('.sidebar');
const nav_list = document.querySelector("#nav-list");

cross_btn.style.visibility = 'hidden';
ham_btn.style.visibility = 'visible';
nav_list.style.visibility = 'hidden';
sidebar.classList.remove('sidebar-visible');

ham_btn.addEventListener('click', () => {
    nav_list.style.visibility = "visible";
    sidebar.classList.add('sidebar-visible');
    FlipBtnVisiblilty(cross_btn);
});

cross_btn.addEventListener('click', () => {
    nav_list.style.visibility = 'hidden';
    sidebar.classList.remove('sidebar-visible');
    FlipBtnVisiblilty(ham_btn);
});



function FlipBtnVisiblilty(btn_to_show) {
    let btn_to_hide = ham_btn;
    if (btn_to_show === ham_btn) {
        btn_to_hide = cross_btn
    }
    btn_to_show.style.visibility = 'visible';
    btn_to_hide.style.visibility = 'hidden';

}
