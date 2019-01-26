//when the page loads the first field is focused by default
const name = document.querySelector('#name');
const eMail =  document.querySelector('#mail');
const titleField = document.querySelector('#title');
const testerEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$('#name').focus();
$("#other-title").parent().hide();
titleField.addEventListener('click', (element) => {
//quando otherjobs viene clicckato
if(element.target.value === 'other') {
//rimuovi hide da other jobs
   $("#other-title").parent().fadeIn( "slow" );
//jobRoleField.parentElement.classList.remove('hide');       
//quando uno qualunque degli elementi escluso other viene clicckato
} else {
//aggiungi hide a other-jobs
$("#other-title").parent().fadeOut( "slow" );   
}
})
//when name or e0-mail is sumbitted uncorrectly you should haiglight the missing filed
if(testerEmail.test(eMail.value)) {
	console.log('corretta')
} else {
	eMail.classList.add('focus-error');
}






 //Name field can't be blank
// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, 
//just that it's formatted like one: dave@teamtreehouse.com for example.
//extra credito

//real time error message 
//give to the user instructions while in typing in the field





    