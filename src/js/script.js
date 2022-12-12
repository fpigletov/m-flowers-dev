'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //Form
    const nextBtn = document.querySelector('.body-form__btn_next');
    const backBtn = document.querySelector('.body-form__btn_back');
    const formBlocks = document.querySelectorAll('.body-form__block');

    nextBtn.addEventListener('click', () => {
        formBlocks[0].style.display = 'none';
        formBlocks[1].style.display = 'block';
    });

    backBtn.addEventListener('click', () => {
        formBlocks[1].style.display = 'none';
        formBlocks[0].style.display = 'block';
    });

    //Header-On-Scroll
    const header = document.querySelector('.header');

	function headerActive() {
		if (window.scrollY > 0) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	}

	window.addEventListener('scroll', headerActive);

    //Dinamic Adaptive
    const registrationBtn = document.querySelector('.actions-header__registration');
    const langBtns = document.querySelector('.actions-header__lang');	
    const loginBtn = document.querySelector('.actions-header__login');
    const headerMenu = document.querySelector('.header__menu');
	const headerBurger = document.querySelector('.actions-header__burger');
	const symbolLabel = document.querySelector('.body-form__label_symbol');
	const confirmLabel = document.querySelector('.body-form__label_confirm');
	const symbolImg = document.querySelector('.body-form__symbols-img');
    
    function dinamicAdaptiv() {
		const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
		
		if (viewportWidth <= 1200 && viewportWidth >= 768) {
			if (symbolLabel) {
				confirmLabel.after(symbolLabel);
			}	
		} else {
			if (symbolLabel) {
				symbolImg.after(symbolLabel);
			}
		}
		
		if (viewportWidth <= 992) {
			if (registrationBtn) {
				headerMenu.append(registrationBtn);
			}	
		}
		else {
			if (registrationBtn) {
				headerBurger.before(registrationBtn);
			}
		}
	
		
		if (loginBtn) {
			if (viewportWidth <= 600) {				
				registrationBtn.after(loginBtn);
			} else {
				langBtns.after(loginBtn);				
			}
		}
		
    }

    window.addEventListener('resize', dinamicAdaptiv);
	window.addEventListener('load', () => {
		dinamicAdaptiv();
		headerActive();
	}); 


    
	//Burger Menu
	function burgerMenu(btnSelector, bodySelector, itemsSelector) {

		const btn = document.querySelector(btnSelector);
		const body = document.querySelector(bodySelector);
		const items = document.querySelectorAll(itemsSelector); 

		btn.addEventListener('click', () => {
			btn.classList.toggle('active');
			body.classList.toggle('active');

			let ariaLabel = btn.getAttribute('aria-label');
			if (ariaLabel === 'Открыть меню') {
				btn.setAttribute('aria-label', 'Закрыть меню');
			} else {
				btn.setAttribute('aria-label', 'Открыть меню');
			}
		});

		

		items.forEach(item => {
			item.addEventListener('click', () => {
				body.classList.toggle('active');
				btn.classList.toggle('active');
			});
		});
	}
    
    if (document.querySelector('.actions-header__burger')) {
		burgerMenu('.actions-header__burger', '.header__menu','.header__item');
	}

	document.addEventListener('click', (e) => {
		const burgerBtn = document.querySelector('.actions-header__burger');
		const target = e.target;

		if (!target.closest('.header__menu') && !target.classList.contains('actions-header__burger') && !target.classList.contains('actions-header__burger-span')) {

			if (headerMenu.classList.contains('active')) {
				headerMenu.classList.remove('active');        
			}

			if (burgerBtn.classList.contains('active')) {
				burgerBtn.classList.remove('active');       
			}
        }
	});
});