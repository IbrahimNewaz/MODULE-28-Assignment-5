// 🟩🟦 Nav bar like hart counting Functionalities 🟦🟩 //

const hartIcons = document.getElementsByClassName('hartClick');
const likeCounter = document.getElementById('like-count');

let totalCount = 0;

for (const icon of hartIcons) {
    icon.addEventListener('click', function (e) {
        e.preventDefault();

        totalCount++;
        likeCounter.innerText = totalCount;

    });
}

// 🟩🟦 Nav bar Hotline Call Coin Charge counting Functionalities 🟦🟩 //

const emrCallButtons = document.getElementsByClassName('call-Button');
const coinCountDisplay = document.getElementById('coin-Count');
let totalcoinCount = 100;

for (const button of emrCallButtons) {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        if (totalcoinCount < 20) {
            alert("You don't have enough coins to make a call.");
            return;
        }

        // Get the parent card //
        const card = button.closest('.EmergencyNumber');


        const serviceName = card.querySelector('.card-ttl h3')?.innerText || "Unknown Service";
        const serviceNumber = card.querySelector('.hotline-number h3')?.innerText || "N/A";

        alert("📞 Calling " + serviceName + " " + serviceNumber + "...");

        totalcoinCount -= 20;
        coinCountDisplay.innerText = totalcoinCount;

    });
}


// 🟩🟦 Copy part counting Functionalities  🟦🟩 //
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".copy-Button");
    const navbarCopyCounter = document.getElementById("copy-count");
    let copyCount = 0;

    for (const button of buttons) {
        button.addEventListener("click", function () {
            const card = button.closest(".EmergencyNumber");
            const textElement = card.querySelector(".hotline-number h3");
            const textToCopy = textElement.innerText;

            navigator.clipboard.writeText(textToCopy)
                .then(function () {
                    alert("The number has been copied. " + textElement.innerText);
                    copyCount++;
                    navbarCopyCounter.innerText = copyCount;
                })

                .catch(function () {
                    alert("Error Cant Copy");
                });
        });
    }
});
