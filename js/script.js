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
        if(regex.test($input.val())) {
            $input.removeClass('error');
            $input.addClass('correct');
        } else {
            $input.removeClass('correct');
            $input.addClass('error');
        }
    });
}

tester($('#cvv'),/^\d{3}$/);
tester($('#zip'),/^\d{5}$/);
tester($('#cc-num'),/^\d{13,16}$/);

