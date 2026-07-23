import gsap from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
	const card = document.querySelector('.maintenance-card');

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

	gsap.timeline({
		defaults: {
			ease: 'power2.out',
		},
	})
		.from(card, {
			autoAlpha: 0,
			y: 20,
			duration: 0.6,
		})
		.from([logo, status, title, lead, countdown], {
			autoAlpha: 0,
			y: 10,
			stagger: 0.1,
			duration: 0.45,
		}, '-=0.3')
		.from(links, {
			autoAlpha: 0,
			y: 8,
			stagger: 0.08,
			duration: 0.35,
		}, '-=0.15');

	if (logo) {
		gsap.to(logo, {
			y: -4,
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

	window.addEventListener('mousemove', (event) => {
		const offsetX = (event.clientX / window.innerWidth - 0.5) * 12;
		const offsetY = (event.clientY / window.innerHeight - 0.5) * 12;

		gsap.to(card, {
			rotateY: offsetX * 0.35,
			rotateX: -offsetY * 0.25,
			transformPerspective: 900,
			transformOrigin: 'center',
			duration: 0.45,
			ease: 'power2.out',
		});
	});

	window.addEventListener('mouseleave', () => {
		gsap.to(card, {
			rotateX: 0,
			rotateY: 0,
			duration: 0.45,
			ease: 'power2.out',
		});
	});
});