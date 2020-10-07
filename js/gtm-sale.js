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
    var x = document.cookie.replace(/(?:(?:^|.*;\s*)gtmSaleStatus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    // cooValue = x.split("=");
    console.log(x);
    if (x != "hidden") {
        gtmSaleElement.style.visibility = "visible";
        gtmSaleElement.style.bottom = "0";
    } else {
        gtmSaleElement.style.visibility = "hidden";
        gtmSaleElement.style.bottom = "-230px";
    }
});

// Свитч отображения через switch
function gtmSaleSwitch() {
    switch (gtmSaleElement.style.visibility) {
        case "hidden":
            gtmSaleElement.style.visibility = "visible";
            gtmSaleElement.style.bottom = "0";
            document.cookie = "gtmSaleStatus=visible;path=/;expires=Tue, 19 Jan 2038 23:59:59 GMT";
            break;
        case "visible":
            gtmSaleElement.style.visibility = "hidden";
            gtmSaleElement.style.bottom = "-230px";
            document.cookie = "gtmSaleStatus=hidden;path=/;expires=Tue, 19 Jan 2038 23:59:59 GMT";
            break;
        default:
            break;
    } 
}

// Вызов свитча по элементам
document.getElementById("gtm-close-icon").onclick = gtmSaleSwitch;
document.getElementById("tempButton").onclick = gtmSaleSwitch;


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