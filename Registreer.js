;(function() { 
	'use strict';

	// wait till DOM is loaded
	window.addEventListener('load', function() {
		// add novalidate to form
		document.getElementById('form1').setAttribute('novalidate', 'novalidate');
		// intercept document submit
		document.getElementById('form1').addEventListener('submit', function(e) {
			// halt event
			e.preventDefault();
			e.stopPropagation();

			// form checking
			var isValid = true;

			// error messages shortcuts
			var errName = document.getElementById('errName');
			var errZIP = document.getElementById('errZIP');
			var errCity = document.getElementById('errCity');
			var errPassword = document.getElementById('errPassword');
            var errPassword2 = document.getElementById('errPassword2');
            var errAdres = document.getElementById('errAdres');
            var errBirthdate = document.getElementById('errBirthdate');

			// input shortcuts
			var qstName = document.getElementById('qstName');
            var qstZIP = document.getElementById('qstZIP');
            var qstCity = document.getElementById('qstCity');
            var qstPassword = document.getElementById('qstPassword');
            var qstPassword2 = document.getElementById('qstPassword2');
            var qstAdres = document.getElementById('qstAdres');
            var qstBirthdate = document.getElementById('qstBirthdate');
			
			
			
			// hide all error messages
			var errMessages = document.querySelectorAll('.message--error');
			for (var i = 0; i < errMessages.length; i++) {
				errMessages[i].style.display = 'none';
			}

			
			// mail with regex
			if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/.test(qstEmail.value)) {
				isValid = false;
				errEmail.innerHTML = 'gelieve een geldig email in te vullen';
				errEmail.style.display = 'block';
				qstEmail.classList.remove("valid");
				qstEmail.classList.add("invalid");		
			}
			else {
				errEmail.style.display = "none";
				qstEmail.classList.remove("invalid");
				qstEmail.classList.add ("valid");
		
            }
			  
			  
	
			//check scroll foutmelding
			if(qstZIP.value == '' || qstCity.value == '' || qstName.value == '' || qstPassword == '' || qstPassword2 == '' || qstBirthdate == ''){
				isValid = false;
				window.scrollTo(0, 0);
				document.getElementById('summary').style.display = "block";
				document.getElementById('form1').style.display = 'block';
				document.getElementById('thankyou').style.display = 'none';
			}
			else{
				document.getElementById('summary').style.display = 'none';
				document.getElementById('form1').style.display = 'none';
				document.getElementById('thankyou').style.display = 'block';
			}

			// check street and number
			if (qstAdres.value == '') {
				isValid = false;
				errAdres.innerHTML = 'gelieve een straat en nummer in te vullen';	
				errAdres.style.display = 'block';
				qstAdres.classList.remove("valid");
				qstAdres.classList.add("invalid");		
			}
			else {
				errAdres.style.display = "none";
				qstAdres.classList.remove("invalid");
				qstAdres.classList.add ("valid");
				
            }

			// check zip
			if (qstZIP.value == '') {
				isValid = false;
				errZIP.innerHTML = 'gelieve een postcode in te vullen';	
				errZIP.style.display = 'block';
				qstZIP.classList.remove("valid");
				qstZIP.classList.add("invalid");		
			}
			else {
				errZIP.style.display = "none";
				qstZIP.classList.remove("invalid");
				qstZIP.classList.add ("valid");
		
            }

			// check city
			if (qstCity.value == '') {
				isValid = false;
				errCity.innerHTML = 'gelieve een gemeente in te vullen';	
				errCity.style.display = 'block';
				qstCity.classList.remove("valid");
				qstCity.classList.add("invalid");		
			}
			else {
				errCity.style.display = "none";
				qstCity.classList.remove("invalid");
				qstCity.classList.add ("valid");
		
            }

			//check name
			if(qstName.value == ''){
				isValid = false;
				errName.innerHTML = 'gelieve een naam in te geven';
				errName.style.display = 'block';
				qstName.classList.remove("valid");
				qstName.classList.add("invalid");		
			}
			else {
				errName.style.display = "none";
				qstName.classList.remove("invalid");
				qstName.classList.add ("valid");
		
            }
			//check password
			if(qstPassword.value == '' || qstPassword2.value == ''){
				isValid = false;
				errPassword.innerHTML = 'gelieve een wachtwoord in te vullen';
				errPassword2.innerHTML = 'gelieve een wachtwoord in te vullen';
				errPassword.style.display = 'block';
				errPassword2.style.display = 'block';
				qstPassword.classList.remove("valid");
				qstPassword.classList.add("invalid");
				qstPassword2.classList.remove("valid");
				qstPassword2.classList.add("invalid");		
			}
			else {
				errPassword.style.display = "none";
				qstPassword.classList.remove("invalid");
				qstPassword.classList.add ("valid");
				errPassword2.style.display = "none";
				qstPassword2.classList.remove("invalid");
				qstPassword2.classList.add ("valid");
		
            }
			
			if(qstPassword != qstPassword2){
				isValid == false;
				errPassword2.innerHTML = 'Het wachtwoord is niet hetzelfde';
				errPassword2.style.display = 'block';
			}

            // check birthdate

            if(qstBirthdate.value == ''){
				isValid = false;
				errBirthdate.innerHTML = 'gelieve je geboortedatum in te vullen';
				errBirthdate.style.display = 'block';
				qstBirthdate.classList.remove("valid");
				qstBirthdate.classList.add("invalid");		
			}
			else {
				errBirthdate.style.display = "none";
				qstBirthdate.classList.remove("invalid");
				qstBirthdate.classList.add ("valid");
		
            }

			
			// draw conclusion
			if (isValid) {
					var naam = document.getElementById('qstName').value;
					var email = document.getElementById('qstEmail').value;
					var wachtwoord = document.getElementById('qstPassword').value;
					var wachtwoordb = document.getElementById('qstPassword2').value;
					var postcode = document.getElementById('qstZIP').value;
					var stad = document.getElementById('qstCity').value;
					var straat = document.getElementById('qstAdres').value;
					var geboortedatum = document.getElementById('qstBirthdate').value;
				

				let data = {
					"records": [{
						"fields": {
							"Naam": naam,
							"Email": email,
							"Wachtwoord": wachtwoord,
							"Wachtwoordbevestig":wachtwoordb,
							"Postcode": postcode,
							"Stad": stad,
							"Adress": straat,
							"Geboortedatum" : geboortedatum
						}
					}]
				};

				fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/Registreer', {
					method: 'POST',
					headers: {
						'Authorization': 'Bearer keyqNc8YK7gvWwhpu',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				})
				.then(response => response.json())
			} 
			else {
							
			}

		});
	})

})();

