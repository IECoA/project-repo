/*
var saleHtml = '<div class="gtm-sale-container"><h2>Тестовая надпись</h2></div>'

document.body.insertAdjacentHTML('beforeend', saleHtml);
document.getElementById('bs1').insertAdjacentHTML('beforeend', saleHtml);
*/



let gtmSaleElement = document.getElementById("sale-info");

// Set Banner Visibility onLoad and show after X

document.addEventListener("DOMContentLoaded", () => {
    let currentBannerCookie = document.cookie.replace(/(?:(?:^|.*;\s*)gtmSaleStatus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(currentBannerCookie);
    switch (currentBannerCookie) {
        case "visible":
            gtmSaleElement.className = "gtm-sale-container"
            break;
        
        case "hidden":
            gtmSaleElement.className = "gtm-sale-container closed"
            break

        default:
            gtmSaleElement.className = "gtm-sale-container closed"
            setTimeout(() => {
                gtmSaleElement.classList.remove("closed");
                document.cookie = "gtmSaleStatus=visible;path=/;expires=Tue, 19 Oct 2020 23:59:59 GMT";
            }, 2000);
            break;
    }
});

// Sale Counter
function gtmSaleCountdown(endTime) {
    let countDownTime = new Date(endTime);
    setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = countDownTime - now;
        let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("gtmTimeLeft").innerHTML = daysLeft + " дн. " + hoursLeft + " ч. " + minutesLeft + " мин. " + secondsLeft + " сек. ";
    }, 1000);
}

gtmSaleCountdown("Oct 16, 2020 11:00");


// Свитч - смена класса

function gtmSaleSwitch() {
    let saleElemClasses = gtmSaleElement.classList;
    switch (Object.values(saleElemClasses).includes("closed")) {
        case true:
            saleElemClasses.remove("closed");
            console.log("Open executed on " + saleElemClasses);
            document.cookie = "gtmSaleStatus=visible;path=/;expires=Tue, 19 Oct 2020 23:59:59 GMT";
            break;
        default:
            saleElemClasses.add("closed");
            console.log("Close executed on " + saleElemClasses);
            document.cookie = "gtmSaleStatus=hidden;path=/;expires=Tue, 19 Oct 2020 23:59:59 GMT";
            break;
    }
}

document.getElementById("tempButton").onclick = gtmSaleSwitch;
document.getElementById("sale-info").onclick = () => {
    if (Object.values(gtmSaleElement.classList).includes("closed") === true) {
        gtmSaleSwitch();
    }
};
document.getElementById("gtm-close-icon").onclick = (event) => {
        gtmSaleSwitch();
        event.stopPropagation();
}




// ____Итерация 1____

// Свитч отображения через switch
/*
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
*/





// URL Param Checker
function isTestUserChecker() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const testUser = urlParams.get('usertype');
    if (testUser === 'toster') {
        return true;
    }
}


//Main Function
document.addEventListener("DOMContentLoaded", () => {
    if (isTestUserChecker() == true) {
       console.log('We are gucchi on load') 
    }
    else {
        console.log('Not gucci')
    }
});
