document.addEventListener("DOMContentLoaded", checkCookies);

function calculateHours() {

	//Get a reference to the form.
	var employeeForm = document.forms['employeeform'];

	//Get references to the elements of the form.
	var employeeName = employeeForm.elements['employeename'].value;
	var hourlyWage = employeeForm.elements['hourlywage'].value;
	var weekDates = employeeForm.elements['weekDates'].value;
	var mondayHours = employeeForm.elements['mondayhours'].value;
	var tuesdayHours = employeeForm.elements['tuesdayhours'].value;
	var wednesdayHours = employeeForm.elements['wednesdayhours'].value;
	var thursdayHours = employeeForm.elements['thursdayhours'].value;
	var fridayHours = employeeForm.elements['fridayhours'].value;

	if (employeeName != "" || employeeName != null) {
		setCookie("employeeName", employeeName, 1);
	}

	if (hourlyWage != "" || hourlyWage != null) {
		setCookie("hourlyWage", hourlyWage, 1);
	}

	if (employeeName == "" || employeeName == null || hourlyWage == "" || hourlyWage == null || weekDates == "" || weekDates == null || mondayHours == "" || mondayHours == null || tuesdayHours == "" || tuesdayHours == null || wednesdayHours == "" || wednesdayHours == null || thursdayHours === "" || thursdayHours == null || fridayhours === "" || fridayHours == null) {
		window.alert("Make sure that all of the fields are filled in before you click 'Calculate'!");
	} else {

		var hourlyWageNumber = parseFloat(hourlyWage);
		var mondayHoursNumber = parseFloat(mondayHours);
		var tuesdayHoursNumber = parseFloat(tuesdayHours);
		var wednesdayhoursNumber = parseFloat(wednesdayHours);
		var thursdayHoursNumber = parseFloat(thursdayHours);
		var fridayHoursNumber = parseFloat(fridayHours);
		var totalHours = mondayHoursNumber + tuesdayHoursNumber + wednesdayhoursNumber + thursdayHoursNumber + fridayHoursNumber;
		var totalPay = hourlyWageNumber * totalHours;
		var totalPayFixed = totalPay.toFixed(2);
		

		var text = "Pay summary for " + employeeName + " for the week of " + weekDates + ":<br>" +
					"Hourly wage is: $" + hourlyWageNumber + " hours<br>" +
					"Monday Hours: " + mondayHoursNumber + " hours<br>" +
					"Tuesday Hours: " + tuesdayHours + " hours<br>" +
					"Wendesday Hours " + wednesdayhoursNumber + " hours<br>" + 
					"Thursday Hours: " + thursdayHoursNumber + " hours<br>" +
					"Friday Hours: " + fridayHoursNumber + " hours<br>" +
					"Total Hours: " + totalHours + " hours<br>" + 
					"Total Pay: $" + totalPayFixed + "<br>" +
					"Manager Signature: ______________________";

		var divobject = document.getElementById('hourCalculations');
		divobject.innerHTML = text;
	}
}

function setCookie(cookieName, cookieValue, expirationTime) {
	var date = new Date();
	date.setTime(date.getTime() + (expirationTime * 24 * 60 * 60 * 1000));
	var expiration = date.toUTCString();
	document.cookie = cookieName + "=" + cookieValue + ";" + expiration + ";path=/";
}

function getCookie(cookieName) {
	var name = cookieName + "=";
	var cookieArray = doucment.cookie.split(';');

	for (var i = 0; i < cookieArray; i++) {
		var c = cookieArray[i];

		while (c.charAt(0) == ' ') {
			c.substring(1);
		}

		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return "";
}

function checkEmployeeNameCookie() {
	var employee = getCookie("employeeName");
	return employee;
}

function checkHourlyWageCookie() {
	var wage = getCookie("hourlyWage");
	return wage;
}

function checkCookies() {
	var name = checkEmployeeNameCookie();
	var wage = checkHourlyWageCookie();
	var employeeForm = document.forms['employeeform'];
	var employeeName = employeeForm.elements['employeename'];
	var hourlyWage = employeeForm.elements['hourlywage'];

	if (name != "") {
		if (wage != "") {
			window.alert("Welcome back, " + name + ". Your hourly wage is " +  wage + ".");
			employeeName.value = name;
			hourlyWage.value = wage;
		} else {
			window.alert("Welcome back, " + name + ".");
			employeeName.value = name;
		}
	} else {
		employeeName.value = "";
		hourlyWage.value = "";
	}
}