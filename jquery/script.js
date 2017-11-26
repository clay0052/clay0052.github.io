let _video =
document.getElementById("video-player");
let _play =
document.getElementById('play');
let _mute =
document.getElementById('mute');

_play.addEventListener('click',
function(e){
  if(_video.paused) {
    _video.play();
  } else {
    _video.pause();
  }
}
)

_mute.addEventListener('click',
function(f){
  if(_video.muted) {
    _video.muted = false;
  } else {
    _video.muted = true;
  }
}
)
