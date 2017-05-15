function calculateHours() {
	//Get a reference to the form.
	var employeeForm = document.forms['employeeform'];

	//Get references to the elements of the form.
	var employeeName = employeeForm.elements['employeename'].value;
	var hourlyWage = employeeForm.elements['hourlywage'].value;
	var weekDates = employeeForm.elements['weekDates'].value;
	var mondayHours = employeeForm.elements['mondayhours'].value;
	var tuesdayHours = employeeForm.elements['tuesdayhours'].value;
	var wednesdayHours = employeeForm.elements['wednesdayHours'].value;
	var thursdayHours = employeeForm.elements['thursdayhours'].value;
	var fridayHours = employeeForm.elements['fridayhours'].value;

	if(employeeName === "" || hourlyWage === "" || weekDates === "" || mondayHours === "" || tuesdayHours === "" || wednesdayHours === "" || thursdayHours === "" || fridayhours === "") {
		window.alert("Make sure that all of the fields are filled in before you click 'Calculate'!");
	}
}