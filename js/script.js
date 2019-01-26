//when the page loads the first field is focused by default
const name = $('#name');
const eMail =  $('#mail');
const titleField = $('#title');
const testerEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$('#name').focus();
$("#other-title").parent().hide();
titleField.on('click', (element) => {
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
});

/// T-SHIRT

$("#colors-js-puns").hide();


$("#design").change(function () {
    $('#color').val('select-color');
    if ($("#design").val() === "js puns") {
    $("#colors-js-puns").show();
    $("#color").children().hide();
    $("#color").children("option").eq(1).show();
    $("#color").children("option").eq(2).show();
    $("#color").children("option").eq(3).show();
} else if ($("#design").val() === "heart js") {
    $("#colors-js-puns").show();
    $("#color").children().hide();
    $("#color").children("option").eq(4).show();
    $("#color").children("option").eq(5).show();
    $("#color").children("option").eq(6).show();
} else {$("#colors-js-puns").hide();
}
});

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
    $('.activities label:contains("Tuesday 9am")').css("color", "black");
  }

  if (checkbox.innerText.indexOf('Tuesday 1pm') >= 0 && $(this).is(':checked')) {
    $('.activities label:contains("Tuesday 1pm")').children().attr("disabled", true);
    $('.activities label:contains("Tuesday 1pm")').css("color", "gray");
    $(this).removeAttr("disabled");
    $(this).parent().css("color", 'black');
  } else if (checkbox.innerText.indexOf('Tuesday 1pm') >= 0 && $(this).is(':checked') === false) {
    $('.activities label:contains("Tuesday 1pm")').children().removeAttr("disabled");
    $('.activities label:contains("Tuesday 1pm")').css("color", "black");
  }

  totalValue = 0;
  $('.activities input:checked').each(function(i){
    let totalNumber = $('.activities input:checked').parent()[i].innerText;
    totalNumber = totalNumber.match(/\$\d+/)[0];
    totalNumber = totalNumber.replace('$', '');
    totalValue += parseInt(totalNumber);
  })
    $('.total-to-pay').text(totalValue);
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
            $input.removeClass('correct');
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
tester(eMail,testerEmail);
