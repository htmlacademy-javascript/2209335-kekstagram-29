import {getRandomPositiveInteger} from './util.js';
const DESCRIPTIONS = [
  'буква К',
  'звонок',
  'морожное',
  'бабочка',
  'снежинка',
  'грузовик',
];
const COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Иван',
  'Сергей',
  'Мария',
  'Андрей',
  'Виктор',
  'Юлия',
  'Ирина',
  'Валерия',
];

const getMessage = () => COMMENT[getRandomPositiveInteger(0, COMMENT.length - 1)];
const CONSTANT_QUANTITIES_ELEMENTS = 25;

const generateComment = (_, index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomPositiveInteger(0, 6)}.svg`,
  message: Array.from({length: getRandomPositiveInteger(1, 2)}, getMessage).join(' '),
  name: names[getRandomPositiveInteger(0, names.length - 1)],
});

const resArray = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(20, 500),
  comments: Array.from({ length: getRandomPositiveInteger(0, 30) }, generateComment),
});

const constantQuantities = Array.from({ length: CONSTANT_QUANTITIES_ELEMENTS }, resArray);

export {constantQuantities};
