// Assignment - 5 


//Check all invalid input error
function getErrorFromInput(idName){
	const idDoc = document.getElementById(idName);
	
	if(isNaN(idDoc.value)){
		document.getElementById(idName+'-error').innerText = '*Please Enter a Number in '+ document.getElementById(idName+'-label').innerText+' Field';
		return true;
	} else if(idDoc.value==''){
		document.getElementById(idName+'-error').innerText = '*Please fillup the '+ document.getElementById(idName+'-label').innerText+' Field';
		return true;
	} else if(parseFloat(idDoc.value)<0){
		document.getElementById(idName+'-error').innerText = '*Please Enter a Non-Negative Number in '+ document.getElementById(idName+'-label').innerText+' Field';
		return true;
	}
	else {
		document.getElementById(idName+'-error').innerText = '';
	}
	return false;
}

document.getElementById('calculate-button').addEventListener('click', function(){
	const error1 = getErrorFromInput('income');
	const error2 = getErrorFromInput('food');
	const error3 = getErrorFromInput('rent');
	const error4 = getErrorFromInput('cloth');
	if(error1==false && error2==false && error3==false && error4==false)
	{
		
	} else{
		alert('Something Wrong Please Check the Error Message');
	}
});