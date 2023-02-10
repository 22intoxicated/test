document.querySelector(".icon2").style.visibility = "hidden";
document.querySelector(".icon1").addEventListener("click", () => {
    document.querySelector(".sidebar").style.visibility = "visible";

    if (document.querySelector('.sidebargo').classList.contains('.sidebar')) {
        document.querySelector('.icon1').style.visibility = "visible"
        document.querySelector('.icon2').style.visibility = "hidden"
    }
    else {
        document.querySelector('.icon1').style.visibility = "hidden"
        document.querySelector('.icon2').style.visibility = "visible"
    }
})

document.querySelector(".icon2").addEventListener("click", () => {
    document.querySelector(".sidebargo").style.visibility = "hidden";

    if (document.querySelector('.sidebargo').classList.contains('.sidebar')) {
        document.querySelector('.icon1').style.visibility = "hidden"
        document.querySelector('.icon2').style.visibility = "visible"
    }
    else {
        document.querySelector('.icon1').style.visibility = "visible"
        document.querySelector('.icon2').style.visibility = "hidden"
    }
})