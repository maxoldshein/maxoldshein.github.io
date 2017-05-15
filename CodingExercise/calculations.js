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

	if(employeeName == "" || employeeName == null || hourlyWage == "" || hourlyWage == null || weekDates == "" || weekDates == null || mondayHours == "" || mondayHours == null || tuesdayHours == "" || tuesdayHours == null || wednesdayHours == "" || wednesdayHours == null || thursdayHours === "" || thursdayHours == null || fridayhours === "" || fridayHours == null) {
		window.alert("Make sure that all of the fields are filled in before you click 'Calculate'!");
	} else {
		var totalHours = parseInt(mondayHours) + parseInt(tuesdayHours) + parseInt(wednesdayhours) + parseInt(thursdayHours) + parseInt(fridayHours);
		var totalPayment = parseFloat(hourlyWage) * totalHours;

		var text = "Payment for " + employeeName + " for the week " + weekDates ": " + totalPayment;

		var divobject = document.getElementById('hourCalculations');
		divobject.innerHTML = text;
	}
}