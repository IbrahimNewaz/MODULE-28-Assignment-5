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

