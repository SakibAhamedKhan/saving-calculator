// Assignment - 5 


//Check all invalid input error
function getErrorFromInput(idName){
	const idDoc = document.getElementById(idName);
	idDoc.style.border = '3px solid red';
	const inputValue = parseFloat(idDoc.value);
	if(isNaN(inputValue)){
		document.getElementById(idName+'-error').innerText = '*Please Enter a Number in '+ document.getElementById(idName+'-label').innerText+' Field';
		return true;
	} else if(inputValue<0){
		document.getElementById(idName+'-error').innerText = '*Please Enter a Non-Negative Number in '+ document.getElementById(idName+'-label').innerText+' Field';
		return true;
	}
	else {
		document.getElementById(idName+'-error').innerText = '';
		idDoc.style.border = 'none';
	}
	return false;
}

//Save input field if more 100
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

// Get Value from Text
function getTextValue(idName){
	const idDoc = document.getElementById(idName);
	return parseFloat(idDoc.innerText);
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
		if(totalBalance<0){
			setAmount('total-expenses', 0);
			setAmount('total-balance', 0);
			alert('Your Income: '+getInputValue('income')+'\nYour Expenses: '+totalExpenses+'\nSo, Your Expenses is more than your Income! Thats not possible!');
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
	const error1 = specialErrorSave('save');
	
	//check error in Save field
	if(error1==false){
		const error2 = getErrorFromInput('save');
		if(error2==false){
			let balance = getInputValue('income');
			if(isNaN(balance)){	
				alert('You Must Fill up the Income Field');

			} 
			else{
				let savePercent = getInputValue('save');
				let save = (balance/100)*savePercent;
				setAmount('save-amount', save);
				
				if(getTextValue('total-expenses')==0){
					let remaining = getInputValue('income') - save;
					setAmount('remain-balance',remaining);
				} 
				else{
					let remaining = getTextValue('total-balance') - save;
					const errorId = document.getElementById('save-error');
					
					if(remaining<0){
						setAmount('save-amount', 0);
						setAmount('remain-balance',0);
						alert('Your Balance is: '+getTextValue('total-balance')+'\nYour Saving is: '+save+
								'\nSo, Your Saving is more than Balance! Thats not possible!');
					} 
					else{
						setAmount('remain-balance',remaining);
					}
					
				}
			}
			
		}
	}
});