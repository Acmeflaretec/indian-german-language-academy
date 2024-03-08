




const scriptURL = 'https://script.google.com/macros/s/AKfycbxlqTdVJTF3Lw0rGjO3tX-acIysA0yG8Ql0Zu05Fut9tnCMkhtMam7k6O1utudN8lGI/exec'
const form = document.forms['registrationForm']
const registerButton = document.getElementById('registerButton');
const loader = document.getElementById('loader');

form.addEventListener('submit', e => {
	e.preventDefault();
	loader.style.display = 'block'; // Show loading spinner
	registerButton.disabled = true; // Disable the button while waiting for response

	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
			loader.style.display = 'none'; // Hide loading spinner
			registerButton.disabled = false; // Re-enable the button
			if (response.ok) {
				console.log('Success!', response);
				// Optionally, you can reset the form after successful submission
				var closeButton = document.querySelector('.modal .modal-header .close');
					closeButton.click();
				form.reset();
			} else {
				console.error('Error!', response.statusText);
				loader.style.display = 'none'; // Hide loading spinner in case of error
				registerButton.disabled = false; // Re-enable the button
				// You might want to provide user feedback here
			}
		})
		.catch(error => {
			console.error('Error!', error.message);
			// You might want to provide user feedback here
		});
});


	
	