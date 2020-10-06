/*
var saleHtml = '<div class="gtm-sale-container"><h2>Тестовая надпись</h2></div>'

document.body.insertAdjacentHTML('beforeend', saleHtml);
document.getElementById('bs1').insertAdjacentHTML('beforeend', saleHtml);
*/

/*
document.getElementById("gtm-close-icon").onclick = function() {
    document.getElementById("sale-info").style.visibility = "none";
}
*/


var gtmSaleElement = document.getElementById("sale-info");


//Set Banner Visibility onDomLoad
document.addEventListener("DOMContentLoaded", () => {
    gtmSaleElement.style.visibility = "hidden";
    x = document.cookie.valueOf("gtmSaleStatus");
    cooValue = x.split("=");
    console.log(cooValue[1]);
    if (cooValue[1] != "hidden") {
        gtmSaleElement.style.visibility = "visible";
    } else {
        gtmSaleElement.style.visibility = "hidden";
    }
});


// Свитч отображения
function gtmSaleSwitcher(){
    if (gtmSaleElement.style.visibility === "hidden") {
        gtmSaleElement.style.visibility = "visible";
        gtmSaleElement.style.bottom = "0";
        document.cookie = "gtmSaleStatus=visible;path=/;sameSite=Lax;Secure;expires=Tue, 19 Jan 2038";
    } else {
        gtmSaleElement.style.visibility = "hidden";
        gtmSaleElement.style.bottom = "-230px";
        document.cookie = "gtmSaleStatus=hidden;path=/;sameSite=Lax;Secure;expires=Tue, 19 Jan 2038";
    }
}

document.getElementById("gtm-close-icon").onclick = gtmSaleSwitcher;
document.getElementById("tempButton").onclick = gtmSaleSwitcher;


// Sale Counter
function gtmSaleCountdown(endTime) {
    var countDownTime = new Date(endTime);
    var y = setInterval(() => {
            var now = new Date().getTime();
            var timeLeft = countDownTime - now;
            var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("gtmTimeLeft").innerHTML = daysLeft + " дн. " + hoursLeft + " ч. " + minutesLeft + " мин. " + secondsLeft + " сек. ";

        }, 1000);
}

gtmSaleCountdown("Oct 16, 2020 11:00");