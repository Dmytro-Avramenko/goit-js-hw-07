import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector(".gallery");

const imageMarkup = createGalleryCardsMarkup(galleryItems);  

imageContainer.insertAdjacentHTML("beforeend", imageMarkup) 

function createGalleryCardsMarkup (galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />      
      </a>
    </div>
    `;  
  })
  .join(``);
}

imageContainer.addEventListener('click', сlickOnImage);
function сlickOnImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return
    };
    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}">
        width = "800"
        height = "600"
    `);
    instance.show();
    console.log(event);
};

// console.log(galleryItems);
