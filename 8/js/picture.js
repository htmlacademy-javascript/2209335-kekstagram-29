import { constantQuantities } from './data.js';
import { generatePreviewPicture } from './previewPicture.js';

const picturesContainer = document.querySelector('.pictures');

const generateImg = (url, desc) => {
  const img = document.createElement('img');
  img.classList.add('picture__img');
  img.setAttribute('width', '182');
  img.setAttribute('height', '182');
  img.setAttribute('alt', desc);
  img.setAttribute('src', url);
  return img;
};

const generateInfo = (commentsHtml, likesHtml) => {
  const pictureInfo = document.createElement('p');
  pictureInfo.classList.add('picture__info');
  pictureInfo.append(commentsHtml);
  pictureInfo.append(likesHtml);
  return pictureInfo;
};

const generateLink = () => {
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.classList.add('picture');
  return link;
};

const generatePictureComments = (length) => {
  const pictureComments = document.createElement('span');
  pictureComments.classList.add('picture__comments');
  pictureComments.textContent = length;
  return pictureComments;
};

const generatePictureLikes = (length) => {
  const pictureLikes = document.createElement('span');
  pictureLikes.classList.add('picture__likes');
  pictureLikes.textContent = length;

  return pictureLikes;
};

const generatePicture = (url, desc, comments, likes) => {
  const link = generateLink();
  const img = generateImg(url, desc);
  img.addEventListener('click', () => {
    generatePreviewPicture(url, desc, comments, likes);
  });
  link.append(img);
  link.append(generateInfo(generatePictureComments(comments.length), generatePictureLikes(likes)));
  return link;
};

const listFragment = document.createDocumentFragment();

constantQuantities.forEach((item) => {
  listFragment.appendChild(generatePicture(item.url, item.description, item.comments, item.likes));
});

picturesContainer.appendChild(listFragment);
