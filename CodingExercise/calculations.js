//Maxwell Oldshein - Athenium Coding Exercise

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
		var totalHoursNumber = parseFloat(totalHours);
		var totalPay = hourlyWageNumber * totalHoursNumber;
		var totalPayNumber = parseFloat(totalPay);

		var text = "Pay summary for " + employeeName + " for the week of " + weekDates + ":<br>" +
					"Hourly wage: $" + hourlyWageNumber.toFixed(2) + "/hour<br>" +
					"Monday Hours: " + mondayHoursNumber.toFixed(2) + " hours<br>" +
					"Tuesday Hours: " + tuesdayHoursNumber.toFixed(2) + " hours<br>" +
					"Wendesday Hours " + wednesdayhoursNumber.toFixed(2) + " hours<br>" + 
					"Thursday Hours: " + thursdayHoursNumber.toFixed(2) + " hours<br>" +
					"Friday Hours: " + fridayHoursNumber.toFixed(2) + " hours<br>" +
					"Total Hours: " + totalHoursNumber.toFixed(2) + " hours<br>" + 
					"Total Pay: $" + totalPayNumber + "<br>" +
					"Manager Signature: ______________________";

		var divobject = document.getElementById('hourCalculations');
		divobject.innerHTML = text;
	}
}

//Set the cookies.
function setCookie(cookieName, cookieValue, expirationTime) {
	var date = new Date();
	date.setTime(date.getTime() + (expirationTime * 24 * 60 * 60 * 1000));
	var expiration = date.toUTCString();
	document.cookie = cookieName + "=" + cookieValue + ";" + expiration + ";path=/";
}

//Get the cookies.
function getCookie(cookieName) {
    var name = cookieName + "=";
    var cookieArray = document.cookie.split(';');

    for(var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Helper function to get the employee name cookie.
function checkEmployeeNameCookie() {
	var employee = getCookie("employeeName");
	return employee;
}

//Helper function to get the hourly wage cookie.
function checkHourlyWageCookie() {
	var wage = getCookie("hourlyWage");
	return wage;
}

//Clear the cookies.
function clearNameWageCookies() {
	document.cookie = "employeeName=; expires=Mon, 01 Jan 1990 00:00:00 UTC; path=/;";
	document.cookie = "hourlyWage=; expires=Mon, 01 Jan 1990 00:00:00 UTC, path=/;";
	return false;
}

//Main function to check cookies on page load.
function checkCookies() {
	var name = checkEmployeeNameCookie();
	var wage = checkHourlyWageCookie();
	var employeeForm = document.forms['employeeform'];
	var employeeName = employeeForm.elements['employeename'];
	var hourlyWage = employeeForm.elements['hourlywage'];

	if (name != "") {
		if (wage != "") {
			window.alert("Welcome back, " + name + ". Your hourly wage is $" +  wage + ".");
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