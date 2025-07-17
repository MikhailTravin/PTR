import { _slideUp, _slideDown, _slideToggle } from "../files/functions.js";

function selectCatalog() {

	const select = document.querySelectorAll('.select');
	const optionMenus = document.querySelectorAll('.select__menu');
	if (optionMenus) {
		optionMenus.forEach((optionMenu, i) => {
			const selectBtn = optionMenu.querySelector('.select__btn');
			const selectClose = document.querySelectorAll('.select__close');
			const selectOptions = optionMenu.querySelectorAll('.select__option');
			const selectOther = document.querySelector('.select-other');
			const sBtntext = optionMenu.querySelector('.btntext-other');

			const filterIcons = document.querySelector('.catalog__icons');
			const filterClose = document.querySelector('.filter-catalog__close');
			const filterRemoveAll = document.querySelector('.filter-catalog__remove');

			let optionMenusItem = optionMenus[i].closest(".select__menu");
			let selectTexts = optionMenusItem.querySelectorAll('.select__option-text');
			let selectCounts = optionMenusItem.querySelector(".select__count");

			if (select) {

				selectBtn.addEventListener("click", function (e) {
					let elem_active = optionMenu.classList.contains("_active")
					optionMenus.forEach(opt => {
						opt.classList.remove('_active');
					})
					optionMenu.classList.toggle("_active", !elem_active)
				});

				selectTexts.forEach(item => {
					item.addEventListener("click", (function (e) {
						item.classList.toggle("_active");
						if (selectCounts) {
							let activeCount = [...selectTexts].filter((i => i.classList.contains("_active"))).length;
							selectCounts.textContent = activeCount;
							if (activeCount > 0) selectCounts.classList.add("_active"); else selectCounts.classList.remove("_active");
						}
					}));
				});

				window.addEventListener('click', e => {
					const target = e.target
					if (!target.closest('.select__options') && !target.closest('.select__menu') && !target.closest('.filter-catalog__remove') && !target.closest('.select__option')) {
						optionMenu.classList.remove("_active")
					}
				})

				selectClose.forEach(close => {
					close.addEventListener("click", function (e) {
						optionMenu.classList.remove("_active")
					});
				});
			}

			if (selectOther) {
				selectOptions.forEach(option => {
					option.addEventListener("click", function (e) {
						if (sBtntext) {
							if (e.target.classList.contains('.select__option-text') != null) {
								const selectedOption = option.querySelector('.select__option-text').innerText;
								sBtntext.innerText = selectedOption;
								selectTexts.forEach(el => { el.classList.remove('_active'); });
							};
							optionMenu.classList.remove("_active")
						}
					});
				});
			}

			if (filterIcons) {
				filterIcons.addEventListener("click", (function (e) {
					document.documentElement.classList.add("_filter-open");
				}));

				filterClose.addEventListener("click", (function (e) {
					document.documentElement.classList.remove("_filter-open");
				}));

				filterRemoveAll.addEventListener('click', function () {
					selectTexts.forEach(item => {
						item.classList.remove('_active')
					});
					selectCounts.textContent = 0;
					selectCounts.classList.remove('_active')
				});
			}

		});
	}
}

selectCatalog();


