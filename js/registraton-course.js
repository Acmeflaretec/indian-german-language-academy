
			document.addEventListener('DOMContentLoaded', function() {
					var registerButton = document.querySelector('.btn-primary');
					if (registerButton) {
							registerButton.addEventListener('click', function(event) {
									event.preventDefault(); // Prevent form submission
									var name = document.getElementById('name');
									var email = document.getElementById('email');
									var course = document.getElementById('course');
									var classPreference = document.getElementById('class-preference');
	
									// Check if all elements are found
									if (name && email && course && classPreference) {
											console.log('Name:', name.value);
											console.log('Email:', email.value);
											console.log('Course Choice:', course.value);
											console.log('Class Preference:', classPreference.value);
									} else {
											console.error('One or more elements not found.');
									}
							});
					} else {
							console.error('Register button not found.');
					}
			});
