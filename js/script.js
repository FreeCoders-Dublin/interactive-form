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
