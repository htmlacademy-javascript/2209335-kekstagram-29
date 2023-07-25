const mainForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const textInput = document.querySelector('.text__description');

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(mainForm);

mainForm.addEventListener('submit', (e) => {
  const hashtags = hashtagInput.value.trim().toLowerCase().split(/\s+/);
  const usedHashtags = new Set();
  const isValid = pristine.validate();
  if (isValid) {
    for (const hashtag of hashtags) {
      if (!hashtag.startsWith('#') || hashtag === '#') {
        console.log(
          'Хэш-тег должен начинаться с символа # или не может быть только из одной решётки.'
        );
        e.preventDefault();
      } else if (!/^[a-z0-9]+$/.test(hashtag.slice(1))) {
        console.log(
          'Хэш-тег должен содержать только буквы и цифры (не может содержать спецсимволы, пунктуацию или эмодзи).'
        );
        e.preventDefault();
      } else if (hashtag.length > MAX_HASHTAG_LENGTH) {
        console.log(
          `Длина хэш-тега не должна превышать ${MAX_HASHTAG_LENGTH} символов, включая решётку.`
        );
        e.preventDefault();
      } else {
        const normalizedHashtag = hashtag.slice(1);
        if (usedHashtags.has(normalizedHashtag)) {
          console.log(
            'Один и тот же хэш-тег не может быть использован дважды.'
          );
          e.preventDefault();
        }
        usedHashtags.add(normalizedHashtag);
      }
    }

    if (hashtags.length > MAX_HASHTAGS_COUNT) {
      console.log(
        `Максимальное количество хэш-тегов не должно превышать ${MAX_HASHTAGS_COUNT}.`
      );
      e.preventDefault();
    }

    if (textInput.value.length > MAX_COMMENT_LENGTH) {
      console.log(
        `Максимальная длина комментария не должна превышать ${MAX_COMMENT_LENGTH} символов.`
      );
      e.preventDefault();
    }
  } else {
    console.log('Вы заполнили не все поля');
    e.preventDefault();
  }
});
