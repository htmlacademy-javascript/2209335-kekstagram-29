const body = document.querySelector('body');
const previewPictureContainer = document.querySelector('.big-picture');
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

const generateComment = (src, name, message, className = '') => {
  const li = document.createElement('li');
  li.classList.add('social__comment');
  li.appendChild(generatePicture(src, name, 35, 35, 'social__picture'));
  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = message;
  li.appendChild(p);
  if (className) {
    li.classList.add(className);
  }
  return li;
};
/*<div className="social__comment-count">5 из <span className="comments-count">125</span> комментариев</div>*/
const generateCountTextComment = (showCount, allCount) => {
  const div = document.createElement('div');
  div.classList.add('social__comment-count');
  const span = document.createElement('span');
  span.classList.add('comments-count');
  span.textContent = allCount;
  div.appendChild(document.createTextNode(`${showCount} из `));
  div.appendChild(span);
  div.appendChild(document.createTextNode(' комментариев'));
  return div;
};
const generatePreviewPicture = (url, desc, comments, likes) => {
  const showCountComments = 5;
  let countComments = 0;
  if (showCountComments > comments.length) {
    countComments = comments.length;
  } else {
    countComments = showCountComments;
  }
  previewPictureContainer.classList.remove('hidden');
  const img = previewPictureContainer.querySelector('.big-picture__img > img');
  img.replaceWith(generatePicture(url, desc, 600, 600));
  const captionImgContainer = previewPictureContainer.querySelector('.social__caption');
  captionImgContainer.textContent = desc;
  const likesCountContainer = previewPictureContainer.querySelector('.likes-count');
  likesCountContainer.textContent = likes;
  document.querySelector('.social__comment-count').replaceWith(generateCountTextComment(countComments, comments.length));
  socialComments.textContent = '';
  comments.forEach((item, index) => {
    let classHidden = '';
    if (index >= countComments) {
      classHidden = 'hidden';
    }
    socialComments.appendChild(generateComment(item.avatar, item.name, item.message, classHidden));
  });
  btnLoader.addEventListener('click', () => {
    if (countComments >= comments.length) {
      return null;
    }
    const countCommentTextContainer = document.querySelector('.social__comment-count');
    if ((countComments + showCountComments) <= comments.length) {
      countComments += showCountComments;
    } else {
      countComments = comments.length;
    }
    const commentsLi = socialComments.querySelectorAll('li');
    commentsLi.textContent = '';
    commentsLi.forEach((item, index) => {
      if (index < countComments) {
        item.classList.remove('hidden');
      }
      socialComments.appendChild(item);
    });
    countCommentTextContainer.replaceWith(generateCountTextComment(countComments, comments.length));
  });
  body.classList.add('modal-open');
};

export {generatePreviewPicture};
