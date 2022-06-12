// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// #1 Використовуємо код з дз 7 №2 та перероблюємо (а він чомусь і так нормально запрацював ☺ ♪♫♪ )
const galleryEl = document.querySelector(".gallery");

function createEl(src, href, alt){
    return `<a class="gallery__item" href="${href}">
    <img class="gallery__image" src="${src}" alt="${alt}" />
  </a>`

};

const galleryStringEl = galleryItems.reduce((contanier, galleryItem) => {
  const {preview, original, description} = galleryItem;
  
  contanier = contanier + createEl(preview, original, description);
  return contanier;
}, "");

galleryEl.insertAdjacentHTML("beforeend", galleryStringEl);


var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionPosition: 'bottom',
  captionDelay: 250,
});