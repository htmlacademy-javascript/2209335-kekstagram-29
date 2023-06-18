/* Обект состоит из 6 ключей:
-id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

-url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

-description, строка — описание фотографии. Описание придумайте самостоятельно.

-likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

-comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.
-names - строка, Имена авторов также должны быть случайными.
*/

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


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getMessage = () => COMMENT[getRandomPositiveInteger(0, COMMENT.length - 1)];
const CONSTANT_QUANTITIES_ELEMENTS = 25;

const generateComment = (_, index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomPositiveInteger(0, 6)}.svg`,
  message: Array.from({length: getRandomPositiveInteger(1, 2)}, getMessage).join(''),
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
console.log(constantQuantities);
