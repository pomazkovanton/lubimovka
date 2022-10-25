/* eslint-disable linebreak-style */
const videos = document.querySelectorAll('.video');

function startVideo(videoContent, videoCover) {
  // eslint-disable-next-line no-param-reassign
  videoCover.style.display = 'none';
  // eslint-disable-next-line no-param-reassign
  videoContent.src += '?autoplay=1';
}

function enableVideoCover(video) {
  const videoContent = video.querySelector('.video__content');
  const videoCover = video.querySelector('.video__cover');
  const videoId = videoContent.src.slice(30, 41);

  video.addEventListener('click', () => startVideo(videoContent, videoCover));

  videoCover.style.backgroundImage = `url(http://img.youtube.com/vi/${videoId}/0.jpg)`;
}

videos.forEach((video) => {
  enableVideoCover(video);
});
