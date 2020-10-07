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

// Set Banner Visibility onLoad and show after X
document.addEventListener("DOMContentLoaded", () => {
    var x = document.cookie.replace(/(?:(?:^|.*;\s*)gtmSaleStatus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(x);
    switch (x) {
        case "visible":
            gtmSaleElement.style.visibility = "visible";
            gtmSaleElement.style.bottom = "0";
            break;
        
        case "hidden":
            gtmSaleElement.style.visibility = "hidden";
            gtmSaleElement.style.bottom = "-230px";
            break;
        default:
            gtmSaleElement.style.visibility = "hidden";
            gtmSaleElement.style.bottom = "-230px";
            setTimeout(() => {
                gtmSaleElement.style.visibility = "visible";
                gtmSaleElement.style.bottom = "0";
                document.cookie = "gtmSaleStatus=visible;path=/;expires=Tue, 19 Oct 2020 23:59:59 GMT";
            }, 2000);
            break;
    }
});

// Свитч отображения через switch
function gtmSaleSwitch() {
    switch (gtmSaleElement.style.visibility) {
        case "hidden":
            gtmSaleElement.style.visibility = "visible";
            gtmSaleElement.style.bottom = "0";
            document.cookie = "gtmSaleStatus=visible;path=/;expires=Tue, 19 Oct 2020 23:59:59 GMT";
            break;
        case "visible":
            gtmSaleElement.style.visibility = "hidden";
            gtmSaleElement.style.bottom = "-230px";
            document.cookie = "gtmSaleStatus=hidden;path=/;expires=Tue, 19 Oct 2020 23:59:59 GMT";
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
    setInterval(() => {
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