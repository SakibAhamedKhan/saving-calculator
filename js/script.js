// Assignment - 5 


//Check all invalid input error
function getErrorFromInput(idName){
	const idDoc = document.getElementById(idName);
	idDoc.style.border = '3px solid red';
	console.log(idDoc.value);
	console.log(idName+'-error');
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
		idDoc.style.border = 'none';
	}
	return false;
}

function specialErrorSave(idName)
{
	const idDoc = document.getElementById(idName);
	idDoc.style.border = '3px solid red';
	if(parseFloat(idDoc.value)>100){
		document.getElementById(idName+'-error').innerText = '*Your Save % must be less or equal than 100';
		return true;
	} else{
		idDoc.style.border = 'none';
	}
	return false;
}

//Get Value from Input Field
function getInputValue(idName){
	const idDoc = document.getElementById(idName);
	return parseFloat(idDoc.value);
}

//Set Amount in innerText
function setAmount(idName, amount){
	document.getElementById(idName).innerText = amount;
}

//Calculate Button Click Handle
document.getElementById('calculate-button').addEventListener('click', function(){
	const error1 = getErrorFromInput('income');
	const error2 = getErrorFromInput('food');
	const error3 = getErrorFromInput('rent');
	const error4 = getErrorFromInput('cloth');
	if(error1==false && error2==false && error3==false && error4==false)
	{
		let totalExpenses = getInputValue('food')+getInputValue('rent')+getInputValue('cloth');
		let totalBalance = getInputValue('income') - totalExpenses;
		// console.log(totalExpenses);
		if(totalBalance<0){
			alert('Your Income: '+getInputValue('income')+'\nYour Expenses: '+totalExpenses+'\nSo, Your Expenses is more than your Income!');
		} else{
			setAmount('total-expenses',totalExpenses);
			setAmount('total-balance', totalBalance);
		}
		
	} else{
		alert('Something Wrong Please Check the Error Message');
	}
});

//Save Button Click Handle
document.getElementById('save-button').addEventListener('click', function(){
	const error1 = getErrorFromInput('save');
	const error2 = specialErrorSave('save');
	if(error1==false)
	{

	}
});