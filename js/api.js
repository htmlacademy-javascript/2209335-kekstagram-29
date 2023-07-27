import { generatePicture, picturesContainer } from './picture.js';

const listFragment = document.createDocumentFragment();
const BASE_URL = 'https://29.javascript.pages.academy/kekstagram/data';

async function getPictures(URL) {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
}


getPictures(BASE_URL).then((data) => {
  data.forEach((item) => {
    const picture = generatePicture(item.url, item.description, item.comments, item.likes);
    listFragment.appendChild(picture);
  });
}).catch((err) => console.log(err));

picturesContainer.appendChild(listFragment);
