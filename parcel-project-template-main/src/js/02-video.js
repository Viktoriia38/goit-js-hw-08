const player = new Vimeo.Player('vimeo-player');
const storageKey = 'videoplayer-current-time';
const currentTime = localStorage.getItem(storageKey);

player.on('timeupdate', _.throttle(onPlay, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}

function onPlay({ seconds }) {
  localStorage.setItem(storageKey, seconds);
}
