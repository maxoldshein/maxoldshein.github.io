function calculateHours() {
	//Get a reference to the form.
	var employeeForm = documents.forms['employeeform'];

	//Get references to the elements of the form.
	var employeeName = employeeForm.elements['employeename'];
	var hourlyWage = employeeForm.elements['hourlywage'];
	var weekDates = employeeForm.elements['weekDates'];
	var mondayHours = employeeForm.elements['mondayhours'];
	var tuesdayHours = employeeForm.elements['tuesdayhours'];
	var wednesdayHours = employeeForm.elements['wednesdayHours'];
	var thursdayHours = employeeForm.elements['thursdayhours'];
	var fridayHours = employeeForm.elements['fridayhours'];

	if(employeeName == "" || hourlyWage = "" || weekDates = "" || mondayHours == "" || tuesdayHours == "" || wednesdayHours == "" || thursdayHours == "" || fridayhours == "") {
		window.alert("Make sure that all of the fields are filled in before you click 'Calculate'!");
	}
}