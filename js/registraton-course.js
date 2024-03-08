document.addEventListener('DOMContentLoaded', function() {
	var registrationForm = document.getElementById('registrationForm');
	if (registrationForm) {
			registrationForm.addEventListener('submit', function(event) {
				event.preventDefault();
					var name = document.getElementById('name');
					var email = document.getElementById('email');
					var course = document.getElementById('course');
					var classPreference = document.getElementById('class-preference');

					// Check if all required fields are filled
					if (!name.value || !email.value) {
						
						
							return false;
					}

					// If all required fields are filled, proceed with logging
					console.log('Name:', name.value);
					console.log('Email:', email.value);
					console.log('Course Choice:', course.value);
					console.log('Class Preference:', classPreference.value);






					var closeButton = document.querySelector('.modal .modal-header .close');
					closeButton.click(); // Trigger click event on the close button

			});
	} else {
			console.error('Registration form not found.');
	}





	
});

	

	
	
	