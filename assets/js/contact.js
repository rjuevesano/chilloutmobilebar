$('.resto-contact').submit(function() {
    var $form		= $(this);
    var submitData	= $form.serialize();
    var $email		= $form.find('input[name="email"]');
    var $name		= $form.find('input[name="name"]');
    var $message	= $form.find('textarea[name="message"]');
    var $submit		= $form.find('input[name="submit"]');
    var $dataStatus	= $form.find('.data-status');
    
    $email.attr('disabled', 'disabled');
    $name.attr('disabled', 'disabled');
    $message.attr('disabled', 'disabled');
    $submit.attr('disabled', 'disabled');
    
    $dataStatus.show().html('<div class="alert alert-info"><strong>Loading...</strong></div>');

    $.ajax({
        url: 'https://wordscapesanswers.appspot.com/api/v1/send2',
        data: submitData + '&action=add',
        type: 'POST',
        crossDomain: true,
        dataType: 'jsonp',
        success: function() {
        },
        error: function(e) {
            console.log(e);
        }
    });

    $email.val('').removeAttr('disabled');
    $name.val('').removeAttr('disabled');
    $message.val('').removeAttr('disabled');
    $submit.removeAttr('disabled');
    $dataStatus.html("Success!").fadeIn();
    
    // $.ajax({ // Send an offer process with AJAX
    //     type: 'POST',
    //     url: 'https://wordscapesanswers.appspot.com/api/v1/send2',
    //     data: submitData + '&action=add',
    //     dataType: 'html',
    //     success: function(msg){
    //         $email.val('').removeAttr('disabled');
    //         $name.val('').removeAttr('disabled');
    //         $message.val('').removeAttr('disabled');
    //         $submit.removeAttr('disabled');
    //         $dataStatus.html("Success!").fadeIn();
    //     },
    //     error: function(e) {
    //         console.log(e);
    //         $email.val('').removeAttr('disabled');
    //         $name.val('').removeAttr('disabled');
    //         $message.val('').removeAttr('disabled');
    //         $submit.removeAttr('disabled');
    //         $dataStatus.html("Success!").fadeIn();
    //     }
    // });
    return false;
});
