function calculate(){
	var custName = document.forms["detailsform"]["cname"].value;
	var prdName = document.forms["detailsform"]["prdname"].value;
	var prdPrice = document.form["detailsform"]["prdprice"].value;
	
	alert(custName + ", "+ prdName + ", " + prdPrice);
	return true;
}