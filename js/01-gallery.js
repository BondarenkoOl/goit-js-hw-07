import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gelleryPictyresItem = document.querySelector('.gallery');

const imageInstance = ({ preview, original, description }) =>
	`<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</div>`;

const generatedImageList = () => {
	const imageList = galleryItems.map(imageInstance).join('');
	gelleryPictyresItem.insertAdjacentHTML('beforeend', imageList);
};
generatedImageList();

gelleryPictyresItem.addEventListener('click', (evt) => {
	evt.preventDefault();
	if (evt.target.nodeName !== 'IMG') {
		return;
	}
	const activImage = evt.target.dataset.source;
	const instance = basicLightbox.create(
		`<img src="${activImage}" width="800" height="600">`,
		{
			onShow: () => {
				document.addEventListener('keydown', onEsc);
			},
			onClose: () => {
				document.removeEventListener('keydown', onEsc);
			}
		}
	);
	instance.show();
	function onEsc(evt) {
		if (evt.key === 'Escape') {
			instance.close();
		}
	}
});
