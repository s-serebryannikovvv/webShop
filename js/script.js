document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const tabs = () => {
		const cardDetailChangeElems = document.querySelectorAll('.card-detail__change'),
			cardDetailsTitleElem = document.querySelector('.card-details__title'),
			cardImageItemElem = document.querySelector('.card__image_item'),
			cardDetailsPriceElem = document.querySelector('.card-details__price'),
			descriptionMemoryElem = document.querySelector('.description__memory');

		const data = [{
				name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
				img: 'img/iPhone-graphite.png',
				price: '95990',
				memoryRom: 128,
			},
			{
				name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
				img: 'img/iPhone-silver.png',
				price: '120990',
				memoryRom: 256,
			},
			{
				name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
				img: 'img/iPhone-blue.png',
				price: '98990',
				memoryRom: 128,
			},
		];

		const deactive = () => {
			cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
		}

		cardDetailChangeElems.forEach((btn, i) => {
			btn.addEventListener('click', () => {
				if (!btn.classList.contains('active')) { // проверяем есть ли active
					deactive();
					btn.classList.add('active');

					cardDetailsTitleElem.textContent = data[i].name;
					cardImageItemElem.src = data[i].img;
					cardImageItemElem.alt = data[i].name;
					cardDetailsPriceElem.textContent = data[i].price + '₽';
					descriptionMemoryElem.textContent = `Встроенная память (ROM) ${data[i].memoryRom} ГБ`
					btn.classList.add('active');
				}
			});

		});

	};




	tabs();
});