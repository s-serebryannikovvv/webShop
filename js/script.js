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

	const accordion = () => {
		const characteristicsListElem = document.querySelector('.characteristics__list');
		const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

		characteristicsItemElems.forEach(elem => { // если нужна одна активная вкладка, то нужно сделать перебор  и у кого есть active, прописать height
			if (elem.children[1].classList.contains('active')) {
				elem.children[1].style.height = `${elem.children[1].scrollHeight}px`;
			}
		})

		const open = (button, dropDown) => { //открытие аккордиона
			closeAllDrops(button, dropDown); // закрытие всех других окон аккордиона
			dropDown.style.height = `${dropDown.scrollHeight}px`; // управление высотой элемента
			button.classList.add('active'); // добавление класса active
			dropDown.classList.add('active');
		};

		const close = (button, dropDown) => {
			button.classList.remove('active');
			dropDown.classList.remove('active');
			dropDown.style.height = '';
		};

		const closeAllDrops = (button, dropDown) => { // закрытие всех других окон аккордиона
			characteristicsItemElems.forEach((elem) => { //получаем родителя и перебираем 
				if (elem.children[0] !== button) {
					close(elem.children[0], elem.children[1]);
				}
			});
		}

		characteristicsListElem.addEventListener('click', (event) => {
			const target = event.target;
			if (target.classList.contains('characteristics__title')) {
				const parent = target.closest('.characteristics__item');
				const description = parent.querySelector('.characteristics__description');
				description.classList.contains('active') ?
					close(target, description) :
					open(target, description);
			}
		});
		document.body.addEventListener('click', (event) => { //при клике вне акардиона, закрыть открытые вкладки
			const target = event.target;
			console.log(event.target);

			if (!target.closest('.characteristics__list')) {
				closeAllDrops();
			}
		})

	};

	const modal = () => {
		const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
		const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
		const modal = document.querySelector('.modal');
		const modalClose = modal.querySelector('.modal__close');
		const cardDetailsTitle = document.querySelector('.card-details__title');
		const modalTitle = document.querySelector('.modal__title');
		const modalSubtitle = document.querySelector('.modal__subtitle');

		const openModal = () => { // открытие модального окна
			modal.classList.add('open');
			document.addEventListener('keydown', escapeHandler); //вызов функции по закрытию модального окна по Escape

		};

		const closeModal = () => {
			modal.classList.remove('open');
			document.removeEventListener('keydown', escapeHandler) //удаляем обработчик события
		};



		const escapeHandler = event => { //закрытие модального окна по кнопке Escape 
			if (event.code === 'Escape') {
				closeModal();
			};
		};
		// modalClose.addEventListener('click', () => { //закрытие окна первый вариант
		// 	modal.classList.remove('open');
		// });

		modal.addEventListener('click', (event) => { //закрытие вторым вариантом
			const target = event.target;
			if (target.classList.contains('modal__close') || target === modal) { //закрытие модального окна по кнопке X и вне окна
				closeModal();
			}
		});
		cardDetailsButtonBuy.addEventListener('click', openModal)


	}

	tabs();
	accordion();
	modal();
});