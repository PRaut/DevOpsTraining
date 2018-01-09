// login form validation index.html
function validate() {
			var name = document.forms["loginform"]["uname"].value;
			var pwd = document.forms["loginform"]["pwd"].value;
			if (name === "" || pwd === "" ) {
				alert("Enter Name/Password");
				return false;
			} else{
				if(name === 'test' && pwd === 'test')
				{
					return true;
				}else{
					return false;
				}
			}
		}

// store and redirect page with data to product display page product.html
function storeAndRedirect() {
	var prdId = document.forms["prdDetailsForm"]["prdId"].value;
	var prdName = document.forms["prdDetailsForm"]["prdName"].value;
	var prdPrice = document.forms["prdDetailsForm"]["prdPrice"].value;
	var prdQty = document.forms["prdDetailsForm"]["prdQty"].value;
	alert(prdId + " "+  prdName + " "+ prdPrice + " "+ prdQty);
	if(prdId === "" || prdName === "" || prdPrice === "" || prdQty === ""){
		alert("Please fill all details");
		return false;
	}else{
		localStorage.clear();
		localStorage.setItem("prdId", prdId);
		localStorage.setItem("prdName" , prdName);
		localStorage.setItem("prdPrice", prdPrice);
		localStorage.setItem("prdQty", prdQty);
		
		var prdId = document.forms["prdDetailsForm"]["prdId"].value = "";
		var prdName = document.forms["prdDetailsForm"]["prdName"].value = "";
		var prdPrice = document.forms["prdDetailsForm"]["prdPrice"].value = "";
		var prdQty = document.forms["prdDetailsForm"]["prdQty"].value = "";
		
		return true;
	}
	
}

// Register user on registration user
function registerUser(){
	alert("Registration successful");
}