import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const div = document.querySelector('.gallery');
const item = galleryItems
  .map(
    obj => `
  <a class="gallery__item" href="${obj.original}">
  <img class="gallery__image  lazyload" src="${obj.preview}" alt="${obj.description}" />
</a>`
  )
  .join('');

div.insertAdjacentHTML('beforeend', item);

new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});
