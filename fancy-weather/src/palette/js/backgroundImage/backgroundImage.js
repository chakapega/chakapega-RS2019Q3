import { getRandomInteger } from '../helpers/helpers';

export default class BackgroundImage {
  constructor(store) {
    this.store = store;
    this.mainContainer = document.querySelector('.main-container');
  }

  getUrl() {
    const { apiFlickrUrl, apiFlickrKey } = this.store;
    const finalUrl = `${apiFlickrUrl}${apiFlickrKey}&tags=weather`;

    fetch(finalUrl)
      .then(response => {
        return response.json();
      })
      .then(photos => {
        const { farm, server, id, secret } = photos.photos.photo[getRandomInteger()];
        const backgroundImageUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg`;

        this.show(backgroundImageUrl);
      });
  }

  show(backgroundImageUrl) {
    const backgroundImage = document.createElement('img');
    backgroundImage.classList.add('background-weather-image');
    backgroundImage.src = backgroundImageUrl;

    backgroundImage.onload = () => {
      this.mainContainer.appendChild(backgroundImage);
    };
  }
}
