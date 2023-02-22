import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const { email, message } = form;

//jeśli localStorage nie puste>uzupełnij pola
if (localStorage.getItem("feedback-form-state") !== null) {
	const oldData = JSON.parse(localStorage.getItem("feedback-form-state"));
	email.value = oldData.email;
	message.value = oldData.message;
}

function updateLocalStorage() {
	localStorage.setItem(
		"feedback-form-state",
		JSON.stringify({
			email: email.value,
			message: message.value,
		}),
	);
}
form.addEventListener("input", throttle(updateLocalStorage, 500));

//po submit'cie wyzzeruj dane
form.addEventListener("submit", (e) => {
	localStorage.removeItem("userEmail");
});

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const feedback = { email: email.value, message: message.value };
	form.reset();
	console.log(feedback);
	localStorage.removeItem("feedback-form-state");
});
