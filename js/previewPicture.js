const body = document.querySelector('body');
const previewPictureContainer = document.querySelector('.big-picture');
const commentContainer = previewPictureContainer.querySelector('.social__comment-count');
const btnLoader = previewPictureContainer.querySelector('.comments-loader');
const closeBtn = previewPictureContainer.querySelector('#picture-cancel');
const socialComments = previewPictureContainer.querySelector('.social__comments');

closeBtn.addEventListener('click', () => {
  previewPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
});
document.addEventListener('keyup', (event) => {
  if (!previewPictureContainer.classList.contains('hidden') && event.code === 'Escape') {
    previewPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

const generatePicture = (src, alt, width, height, className = '') => {
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  img.setAttribute('width', width);
  img.setAttribute('height', height);
  if (className) {
    img.classList.add(className);
  }
  return img;
};

const generateComment = (src, name, message) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');
  li.appendChild(generatePicture(src, name, 35, 35, 'social__picture'));
  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = message;
  li.appendChild(p);
  return li;
};
const generatePreviewPicture = (url, desc, comments, likes) => {
  previewPictureContainer.classList.remove('hidden');
  commentContainer.classList.add('hidden');
  btnLoader.classList.add('hidden');
  const img = previewPictureContainer.querySelector('.big-picture__img > img');
  img.replaceWith(generatePicture(url, desc, 600, 600));
  const captionImgContainer = previewPictureContainer.querySelector('.social__caption');
  captionImgContainer.textContent = desc;
  const likesCountContainer = previewPictureContainer.querySelector('.likes-count');
  likesCountContainer.textContent = likes;
  const countCommentContainer = commentContainer.querySelector('.comments-count');
  countCommentContainer.textContent = comments.length;
  socialComments.textContent = '';
  comments.forEach((item) => {
    socialComments.appendChild(generateComment(item.avatar, item.name, item.message));
  });
  body.classList.add('modal-open');
};

export {generatePreviewPicture};
