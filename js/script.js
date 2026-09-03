"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const backToTop = document.querySelector(".back-to-top");

menuToggle.addEventListener("click", () => {
	const isOpen = mainNav.classList.toggle("is-open");
	menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		mainNav.classList.remove("is-open");
		menuToggle.setAttribute("aria-expanded", "false");
	});
});

window.addEventListener("scroll", () => {
	backToTop.classList.toggle("is-visible", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".filter-button").forEach((button) => {
	button.addEventListener("click", () => {
		document.querySelectorAll(".filter-button").forEach((item) => {
			item.classList.toggle("is-active", item === button);
		});

		document.querySelectorAll(".project").forEach((project) => {
			const shouldShow = button.dataset.filter === "all" || project.dataset.category === button.dataset.filter;
			project.classList.toggle("is-hidden", !shouldShow);
		});
	});
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
	event.preventDefault();
	event.currentTarget.reset();
	document.querySelector(".form-feedback").textContent = "Merci, votre demande a bien été préparée. Nous vous recontacterons rapidement.";
});

document.querySelectorAll(".section-toggle").forEach((button) => {
	button.addEventListener("click", () => {
		const section = button.closest("section");
		const content = section.querySelector(".section-content");
		const isOpen = content.classList.toggle("is-open");

		button.setAttribute("aria-expanded", String(isOpen));
		button.querySelector("span").textContent = isOpen ? "Masquer le contenu" : "Afficher le contenu";
		button.querySelector("strong").textContent = isOpen ? "-" : "+";
	});
});
