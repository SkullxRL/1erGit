import gsap from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
	const card = document.querySelector('.maintenance-card');
	const orbA = document.querySelector('.orb-a');
	const orbB = document.querySelector('.orb-b');
	const revealItems = gsap.utils.toArray('.reveal');

	if (!card) {
		return;
	}

	const logo = card.querySelector('.logo');
	const status = card.querySelector('.status');
	const title = card.querySelector('h1');
	const lead = card.querySelector('.lead');
	const countdown = card.querySelector('.countdown');
	const dot = card.querySelector('.dot');
	const links = gsap.utils.toArray('.links a');
	const scrollLink = card.querySelector('.scroll-link');

	gsap.timeline({
		defaults: {
			ease: 'power2.out',
		},
	})
		.from(card, {
			autoAlpha: 0,
			y: 32,
			duration: 0.6,
		})
		.from([logo, status, title, lead, countdown], {
			autoAlpha: 0,
			y: 18,
			stagger: 0.1,
			duration: 0.45,
		}, '-=0.3')
		.from(links, {
			autoAlpha: 0,
			y: 14,
			stagger: 0.08,
			duration: 0.35,
		}, '-=0.15')
		.from(scrollLink, {
			autoAlpha: 0,
			y: 12,
			duration: 0.3,
		}, '-=0.1');

	if (logo) {
		gsap.to(logo, {
			y: -6,
			duration: 1.8,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		});
	}

	if (dot) {
		gsap.to(dot, {
			scale: 1.35,
			opacity: 0.45,
			duration: 0.8,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		});
	}

	if (orbA && orbB) {
		gsap.to(orbA, {
			x: 45,
			y: 30,
			duration: 8,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		});

		gsap.to(orbB, {
			x: -40,
			y: -24,
			duration: 9,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		});
	}

	if (revealItems.length > 0) {
		const revealOnScroll = () => {
			revealItems.forEach((item) => {
				const rect = item.getBoundingClientRect();
				const threshold = window.innerHeight * 0.82;

				if (rect.top < threshold && !item.dataset.revealed) {
					item.dataset.revealed = 'true';
					gsap.to(item, {
						autoAlpha: 1,
						y: 0,
						duration: 0.7,
						ease: 'power2.out',
					});
				}
			});
		};

		revealOnScroll();
		window.addEventListener('scroll', revealOnScroll, { passive: true });
		window.addEventListener('resize', revealOnScroll);
	}

	window.addEventListener('mousemove', (event) => {
		const offsetX = (event.clientX / window.innerWidth - 0.5) * 18;
		const offsetY = (event.clientY / window.innerHeight - 0.5) * 18;

		gsap.to(card, {
			rotateY: offsetX * 0.35,
			rotateX: -offsetY * 0.25,
			transformPerspective: 900,
			transformOrigin: 'center',
			duration: 0.6,
			ease: 'power2.out',
		});
	});

	window.addEventListener('mouseleave', () => {
		gsap.to(card, {
			rotateX: 0,
			rotateY: 0,
			duration: 0.6,
			ease: 'power2.out',
		});
	});
});