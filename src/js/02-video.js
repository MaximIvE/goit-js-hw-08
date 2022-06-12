import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
var _ = require('lodash');

// багато часу шукав назву обробника події при перезавантаженні форми, для addEventListener, потім знайшов 'onload', але воно в мене не запрацювало. 
// Тому через let для змінної.
// я просто подумав, що весь js наново завантажується після перезавантаження сторінки, а локалсторідж ні. а якщо там записів ще не було, то повернеться null
let time;

player.on("timeupdate", _.throttle((e) => {
        const timeJsonRec = JSON.stringify(e.seconds);
        localStorage.setItem("videoplayer-current-time", timeJsonRec);
    }, 1000)
);

const timeJsonRead = localStorage.getItem("videoplayer-current-time");
time = timeJsonRead ? JSON.parse(timeJsonRead) : 0;
player.setCurrentTime(time);





