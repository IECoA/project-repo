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
    var x = setInterval(function () {
        var now = new Date().getTime();
        var timeLeft = countDownTime - now;
        var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 *24));
        var hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("gtmTimeLeft").innerHTML = daysLeft + "дней" + hoursLeft + "часов" + minutesLeft + "минут" + secondsLeft + "секунд";
        /*
        if (daysLeft < 1) {
            clearInterval(x);
            document.getElementById("gtmTimeLeft").innerHTML = "Конец"
        }
        */

    }, 1000);
}
