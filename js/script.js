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



let totalValue = 0;
const $totalValueTag = $(`<h2 class="total">Total: $<span class ="total-to-pay">${totalValue}</span></div>`);
const $activities = $('.activities');

$activities.append($totalValueTag);

$activities.on('click', 'input', function(event) {
  let checkbox = $(this).parent()[0];

  // console.log(checkboxText);

  if (checkbox.innerText.indexOf('Tuesday 9am') >= 0 && $(this).is(':checked')) {
    $('.activities label:contains("Tuesday 9am")').children().attr("disabled", true);
    $('.activities label:contains("Tuesday 9am")').css("color", "gray");
    $(this).removeAttr("disabled");
    $(this).parent().css("color", 'black');
  } else if (checkbox.innerText.indexOf('Tuesday 9am') >= 0 && $(this).is(':checked') === false) {
    $('.activities label:contains("Tuesday 9am")').children().removeAttr("disabled");
    $('.activities label:contains("Tuesday 9am")').parent().css("color", "black");
  }

  if (checkbox.innerText.indexOf('Tuesday 1pm') >= 0 && $(this).is(':checked')) {
    $('.activities label:contains("Tuesday 1pm")').children().attr("disabled", true);
    $(this).removeAttr("disabled");
  } else if (checkbox.innerText.indexOf('Tuesday 1pm') >= 0 && $(this).is(':checked') === false) {
    $('.activities label:contains("Tuesday 1pm")').children().removeAttr("disabled");
  }

  $('.activities input:checked').each(function(i){
    let match = $('.activities input:checked').parent()[i].innerText;
    // match = match.find('JavaScript');
    $('.total-to-pay').text(match);
  })

}
);
//
// console.log($totalValueTag.innerText);

// To show the correct section releted to the selected payment.
$('#payment').val('credit card').change(function() {
    switch ($('#payment').val()) {
        case 'credit card':
            $('#payment').nextAll().hide();
            $('#credit-card').show();
            break;
        case 'paypal':
            $('#payment').nextAll().hide();
            $('#paypal').show();
            break;
        case 'bitcoin':
            $('#payment').nextAll().hide();
            $('#bitcoin').show();
            break;
    }
});

// it showes the user if the {{input}} matches the {{regex}}.
const tester = ($input, regex) => {
    $input.keyup(function(event){
        if($input.val() === "") {
            $input.removeClass('error');
        } else {
            if(regex.test($input.val())) {
                $input.removeClass('error');
                $input.addClass('correct');
            } else {
                $input.removeClass('correct');
                $input.addClass('error');
            }
        }
    });
}

tester($('#cvv'),/^\d{3}$/);
tester($('#zip'),/^\d{5}$/);
tester($('#cc-num'),/^\d{13,16}$/);
