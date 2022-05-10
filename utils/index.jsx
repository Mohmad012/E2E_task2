import $ from 'jquery';

const openMenu = () => {
	$('.mobile-menu-toggler').on('click', function (e) {
		$('body').toggleClass('mmenu-active');
		$(this).toggleClass('active');
		e.preventDefault();
	});
}

export {
    openMenu
};
