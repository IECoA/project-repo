/*
var saleHtml = '<div class="gtm-sale-container"><h2>Тестовая надпись</h2></div>'

document.body.insertAdjacentHTML('beforeend', saleHtml);
document.getElementById('bs1').insertAdjacentHTML('beforeend', saleHtml);
*/

/*
document.getElementById("gtm-close-icon").onclick = function() {
    document.getElementById("sale-info").style.display = "none";
}
*/


function gtmSaleSwitcher(){
    var x = document.getElementById("sale-info");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("gtm-close-icon").onclick = gtmSaleSwitcher;
document.getElementById("tempButton").onclick = gtmSaleSwitcher;


function gtmSaleCountdown() {
    var countDownTime = new Date("Oct 12, 2021 15:30:25")
}
