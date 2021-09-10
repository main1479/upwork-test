// =======================================
// sticky nav
// =======================================
const nav = document.querySelector('.nav');
const stickyNav = (entries) => {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// =======================================
// Mobile Menu
// =======================================
// Mobile menu
const navTrigger = document.querySelectorAll('.menu__trigger');
navTrigger.forEach((btn) => {
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
	});
});
