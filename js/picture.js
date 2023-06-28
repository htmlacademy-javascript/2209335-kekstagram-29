import { constantQuantities } from './data.js';

const picturesContainer = document.querySelector('.pictures');

const listFragment = document.createDocumentFragment();

constantQuantities.forEach((item) => {
  listFragment.appendChild(generatePicture(item.url, item.description, item.comments, item.likes));
});

function generateImg(url, desc) {
  const img = document.createElement('img');
  img.classList.add('picture__img');
  img.setAttribute('width', '182');
  img.setAttribute('height', '182');
  img.setAttribute('alt', desc);
  img.setAttribute('src', url);
  return img;
}

function generateInfo(commentsHtml, likesHtml) {
  const pictureInfo = document.createElement('p');
  pictureInfo.classList.add('picture__info');
  pictureInfo.append(commentsHtml);
  pictureInfo.append(likesHtml);
  return pictureInfo;
}

function generateLink() {
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.classList.add('picture');
  return link;
}

function generatePictureComments(length) {
  const pictureComments = document.createElement('span');
  pictureComments.classList.add('picture__comments');
  pictureComments.innerHTML = length;
  return pictureComments;
}

function generatePictureLikes(length) {
  const pictureLikes = document.createElement('span');
  pictureLikes.classList.add('picture__likes');
  pictureLikes.innerHTML = length;

  return pictureLikes;
}

function generatePicture(url, desc, comments, likes) {
  const link = generateLink();
  link.append(generateImg(url, desc));
  link.append(generateInfo(generatePictureComments(comments.length), generatePictureLikes(likes)));
  return link;
}

picturesContainer.appendChild(listFragment);
