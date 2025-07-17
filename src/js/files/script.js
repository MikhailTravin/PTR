import { bodyLock, bodyUnlock, bodyLockToggle } from "../files/functions.js";

//поиск
const searchIcon = document.querySelector('.search-header__button');

if (searchIcon) {
	const searchInput = document.querySelector('.search-header__inputs');
	searchIcon.addEventListener("click", function (e) {
		searchInput.classList.toggle("_search-open")
	});
	window.addEventListener('click', e => {
		const target = e.target
		if (!target.closest('.search-header__inputs') && !target.closest('.search-header__button')) {
			searchInput.classList.remove('_search-open')
		}
	})
}

//========================================================================================================================================================

//карточка товара
const galleryItems = document.querySelectorAll('.product-card__item');
const productCard = document.querySelectorAll('.product-card__images');

if (galleryItems) {
	galleryItems.forEach(item => {
		item.addEventListener("mouseenter", function (e) {
			//преобразуем коллекцию узлов children в массив
			let child_count = this.parentNode.children.length;
			let child_arr = [];
			for (let i = 0; i < child_count; i++) {
				child_arr.push(this.parentNode.children[i]);
			}
			// фильтруем детей, которые не относятся к текущему узлу
			let filter_child_arr = [];
			for (let i = 0; i < child_count; i++) {
				let curr_child = this.parentNode.children[i];
				if (curr_child !== this)
					filter_child_arr.push(curr_child);
				curr_child.classList.remove("_active")
			}
			this.classList.add("_active")
		});

	});
	productCard.forEach(card => {
		card.addEventListener("mouseleave", function (e) {
			const $elements = this.querySelectorAll(`.product-card__item`);
			$elements.forEach(element => {
				element.classList.remove("_active")
			});
			$elements[0].classList.add("_active")
		});
	});
}

//========================================================================================================================================================

//избранное
const productCardFavourites = document.querySelectorAll('.product-card__favourites');

if (productCardFavourites) {
	productCardFavourites.forEach(item => {
		item.addEventListener("click", function (e) {
			item.classList.toggle("_active")
		});
	});
}

//========================================================================================================================================================

const selectInputs = document.querySelectorAll('.select__input > input');

if (selectInputs) {
	selectInputs.forEach(input => {
		input.addEventListener("change", function (e) {
			let parent = e.target.parentNode;
			if (input.value >= 1) {
				parent.classList.add('_active')
			}
			else {
				parent.classList.remove('_active')
			}
		});
	});
}