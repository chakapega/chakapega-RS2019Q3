import { apiFlickrUrl, apiFlickrKey } from '../helpers/constants';
import { getRandomInteger, defineImageSize } from '../helpers/helpers';

export default class BackgroundImage {
  constructor(store) {
    this.store = store;
    this.mainContainer = document.querySelector('.main-container');
  }

  async getUrl() {
    const finalUrl = `${apiFlickrUrl}${apiFlickrKey}&tags=weather`;
    const imageSize = defineImageSize();

    const response = await fetch(finalUrl);
    const photos = await response.json();
    const { farm, server, id, secret } = photos.photos.photo[getRandomInteger()];
    const backgroundImageUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${imageSize}.jpg`;

    this.show(backgroundImageUrl);
  }

  show(backgroundImageUrl) {
    let backgroundImage = document.querySelector('.background-weather-image');

    if (!backgroundImage) {
      backgroundImage = document.createElement('img');
    }

    backgroundImage.classList.add('background-weather-image');
    backgroundImage.src = backgroundImageUrl;

    backgroundImage.onload = () => {
      this.mainContainer.appendChild(backgroundImage);
    };
  }
}
