import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gelleryPictyresItem = document.querySelector('.gallery');
const imageInstance = galleryItems.reduce(
	(acc, item) =>
		acc +
		`<a class="gallery__item" href="${item.original}">
            <img class="gallery__image"
            src="${item.preview}" 
            alt="${item.description}"/>
        </a>
        `,
	''
);
gelleryPictyresItem.insertAdjacentHTML('beforeend', imageInstance);
console.log(imageInstance);

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250
});
