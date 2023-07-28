import { generatePicture, picturesContainer } from './picture.js';
import { shuffleArray } from './functions.js';

const ACTIVE_FILTER_NAME = 'img-filters__button--active';
const HIDDEN_FILTERS_CLASSNAME = 'img-filters--inactive';
const BASE_URL = 'https://29.javascript.pages.academy/kekstagram/data';

const filters = document.querySelector('.img-filters');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

const listFragment = document.createDocumentFragment();

const showFilters = () => {
  filters.classList.remove(HIDDEN_FILTERS_CLASSNAME);
};

const resetFilters = () => {
  defaultFilter.classList.remove(ACTIVE_FILTER_NAME);
  randomFilter.classList.remove(ACTIVE_FILTER_NAME);
  discussedFilter.classList.remove(ACTIVE_FILTER_NAME);
};

const setActiveFilter = (filter) => {
  resetFilters();
  filter.classList.add(ACTIVE_FILTER_NAME);
};

const isActiveFilter = (filter) => {
  if (filter.classList.contains(ACTIVE_FILTER_NAME)) {
    return true;
  } else {
    return false;
  }
};

const clearPictures = () => {
  document.querySelectorAll('.picture').forEach((picture) => {
    picture.remove();
  });
};

const getPictures = async (URL) => {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
};

getPictures(BASE_URL)
  .then((data) => {
    const allDataPictures = [];
    const allPictures = [];
    data.forEach((item) => {
      allDataPictures.push(item);
      const picture = generatePicture(
        item.url,
        item.description,
        item.comments,
        item.likes
      );
      allPictures.push(picture);
      listFragment.appendChild(picture);
    });
    showFilters();

    defaultFilter.addEventListener('click', () => {
      if (isActiveFilter(defaultFilter)) {
        return false;
      }
      setActiveFilter(defaultFilter);
      clearPictures();
      allPictures.forEach((picture) => {
        picturesContainer.appendChild(picture);
      });
    });

    randomFilter.addEventListener('click', () => {
      if (isActiveFilter(randomFilter)) {
        return false;
      }
      setActiveFilter(randomFilter);
      clearPictures();
      shuffleArray(allPictures).forEach((picture) => {
        picturesContainer.appendChild(picture);
      });
    });

    discussedFilter.addEventListener('click', () => {
      if (isActiveFilter(discussedFilter)) {
        return false;
      }
      setActiveFilter(discussedFilter);
      clearPictures();
      const newPicutres = allDataPictures.sort((prev, curr) => {
        if (prev.comments.length > curr.comments.length) {
          return -1;
        } else if (prev.comments.length === curr.comments.length) {
          return 0;
        } else {
          return 1;
        }
      });
      clearPictures();

      newPicutres.forEach((item) => {
        const picture = generatePicture(item.url,
          item.description,
          item.comments,
          item.likes);
        picturesContainer.appendChild(picture);
      });
    });
  })
  .catch((err) => console.log(err));

picturesContainer.appendChild(listFragment);

