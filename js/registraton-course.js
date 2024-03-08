



// document.addEventListener('DOMContentLoaded', function() {
// 	var registrationForm = document.getElementById('registrationForm');
// 	if (registrationForm) {
// 			registrationForm.addEventListener('submit', function(event) {
// 				event.preventDefault();
// 					var name = document.getElementById('name');
// 					var email = document.getElementById('email');
// 					var course = document.getElementById('course');
// 					var classPreference = document.getElementById('class-preference');

// 					// Check if all required fields are filled
// 					if (!name.value || !email.value) {
						
						
// 							return false;
// 					}

// 					// If all required fields are filled, proceed with logging
// 					console.log('Name:', name.value);
// 					console.log('Email:', email.value);
// 					console.log('Course Choice:', course.value);
// 					console.log('Class Preference:', classPreference.value);
// 					var closeButton = document.querySelector('.modal .modal-header .close');
// 					closeButton.click(); // Trigger click event on the close button
// 					// removing values after register
//            name.value=''
//            email.value=''

// 			});
// 	} else {
// 			console.error('Registration form not found.');
// 	}

// });

const scriptURL = 'https://script.google.com/macros/s/AKfycbxlqTdVJTF3Lw0rGjO3tX-acIysA0yG8Ql0Zu05Fut9tnCMkhtMam7k6O1utudN8lGI/exec'
const form = document.forms['registrationForm']

form.addEventListener('submit', e => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
			if (response.ok) {
				console.log('Success!', response);
				// Optionally, you can reset the form after successful submission
				var closeButton = document.querySelector('.modal .modal-header .close');
					closeButton.click();
				form.reset();
			} else {
				console.error('Error!', response.statusText);
				// You might want to provide user feedback here
			}
		})
		.catch(error => {
			console.error('Error!', error.message);
			// You might want to provide user feedback here
		});
});

// form.addEventListener('submit', e => {
// 	e.preventDefault()
// 	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
// 		.then(response => console.log('Success!', response))
// 		.catch(error => console.error('Error!', error.message))
// })
	

	
	
	