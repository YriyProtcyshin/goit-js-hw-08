import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Получаю время из прерванного просмотра
const currentTime = localStorage.getItem('videoplayer-current-time');

// Если время сохраненно, устанавиваю его как начало видео
if (currentTime) {
  player.setCurrentTime(currentTime);
}

// События при воспроизведении видео
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
