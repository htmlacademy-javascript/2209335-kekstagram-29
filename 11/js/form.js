const SCALE_STEP = 25;

const mainFormEl = document.querySelector('.img-upload__form');
const uploadImgInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const impIploadPreview = document.querySelector('.img-upload__preview');
const hashtagInput = document.querySelector('.text__hashtags');
const textInput = document.querySelector('.text__description');
const closeimgUploadOverlayBtn = document.querySelector('#upload-cancel');
const scaleControlInput = document.querySelector('.scale__control--value');
const scaleControlMinusBtn = document.querySelector('.scale__control--smaller');
const scaleControlPlusBtn = document.querySelector('.scale__control--bigger');

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const radioEffectsInputs = document.querySelectorAll('.effects__radio');

let currentEffect = 'none';

const inputInFocus = (input) => {
  if (document.activeElement === input) {
    return true;
  } else {
    return false;
  }
};

const closeOverlayByClickOnOutside = (e) => {
  if (e.target === imgUploadOverlay) {
    closeImgUploadOverlay();
  }
};

const closeOverlayByClickOnEsc = (e) => {
  if (inputInFocus(hashtagInput) || inputInFocus(textInput)) {
    return false;
  }
  if (e.key === 'Escape') {
    closeImgUploadOverlay();
  }
};

export const closeImgUploadOverlay = () => {
  window.removeEventListener('keydown', closeOverlayByClickOnEsc);
  window.removeEventListener('click', closeOverlayByClickOnOutside);
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  mainFormEl.reset();
};

const previewImage = (e) => {
  const input = e.target;
  const preview = imgUploadOverlay.querySelector('img');
  const file = input.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
};

export const openImgUploadOverlay = () => {
  window.addEventListener('keydown', closeOverlayByClickOnEsc);
  window.addEventListener('click', closeOverlayByClickOnOutside);
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const minusPreviewScale = () => {
  const scaleControlInputValue = parseInt(scaleControlInput.value, 10);
  if (scaleControlInputValue <= 25) {
    return false;
  }
  const value = scaleControlInputValue - SCALE_STEP;
  scaleControlInput.value = `${value }%`;
  impIploadPreview.querySelector('img').style.transform = `scale(${
    value / 100
  })`;
};

const plusPreviewScale = () => {
  const scaleControlInputValue = parseInt(scaleControlInput.value, 10);

  if (scaleControlInputValue >= 100) {
    return;
  }
  const value = scaleControlInputValue + SCALE_STEP;
  scaleControlInput.value = `${value }%`;
  impIploadPreview.querySelector('img').style.transform = `scale(${
    value / 100
  })`;
};

const toggleEffect = () => {
  switch (currentEffect) {
    case 'chrome':
      sliderContainer.classList.remove('hidden');
      impIploadPreview.style.filter = `grayscale(${+valueElement.value})`;
      break;
    case 'none':
      sliderContainer.classList.add('hidden');
      impIploadPreview.style.filter = 'none';
      break;

    case 'sepia':
      sliderContainer.classList.remove('hidden');

      impIploadPreview.style.filter = `sepia(${+valueElement.value})`;
      break;

    case 'marvin':
      sliderContainer.classList.remove('hidden');

      impIploadPreview.style.filter = `invert(${+valueElement.value})`;
      break;

    case 'phobos':
      sliderContainer.classList.remove('hidden');
      impIploadPreview.style.filter = `blur(${+valueElement.value})`;
      break;
    case 'heat':
      sliderContainer.classList.remove('hidden');
      impIploadPreview.style.filter = `brightness(${+valueElement.value})`;
      break;
  }
};

closeimgUploadOverlayBtn.addEventListener('click', () => {
  closeImgUploadOverlay();
});

uploadImgInput.addEventListener('input', (e) => {
  previewImage(e);
  openImgUploadOverlay();
});

scaleControlMinusBtn.addEventListener('click', minusPreviewScale);

scaleControlPlusBtn.addEventListener('click', plusPreviewScale);

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  switch (currentEffect) {
    case 'chrome':
      impIploadPreview.style.filter = `grayscale(${+valueElement.value})`;
      break;
    case 'none':
      impIploadPreview.style.filter = 'none';
      break;

    case 'sepia':
      impIploadPreview.style.filter = `sepia(${+valueElement.value})`;
      break;

    case 'marvin':
      impIploadPreview.style.filter = `invert(${+valueElement.value}%)`;
      break;

    case 'phobos':
      impIploadPreview.style.filter = `blur(${+valueElement.value}px)`;
      break;
    case 'heat':
      impIploadPreview.style.filter = `brightness(${+valueElement.value})`;
      break;

    default:
      impIploadPreview.style.filter = `grayscale(${+valueElement.value})`;
      break;
  }
});

radioEffectsInputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    currentEffect = e.target.value;
    switch (currentEffect) {
      case 'chrome':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        break;
      case 'none':
        break;
      case 'sepia':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        break;
      case 'marvin':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });
        break;
      case 'phobos':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
        break;
      case 'heat':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
        break;
      default:
        break;
    }

    toggleEffect();
  });
});

toggleEffect();
