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

    axios.post('https://wordscapesanswers.appspot.com/api/v1/send2?' + submitData + '&action=add', {
        headers: {'Access-Control-Allow-Origin': '*'}
    })
    .then(function (response) {
        $email.val('').removeAttr('disabled');
        $name.val('').removeAttr('disabled');
        $message.val('').removeAttr('disabled');
        $submit.removeAttr('disabled');
        $dataStatus.html("Success!").fadeIn();
    })
    .catch(function (e) {
        console.log(e);
        $email.val('').removeAttr('disabled');
        $name.val('').removeAttr('disabled');
        $message.val('').removeAttr('disabled');
        $submit.removeAttr('disabled');
        $dataStatus.html("Success!").fadeIn();
    });
    
    // $.ajax({ // Send an offer process with AJAX
    //     type: 'POST',
    //     url: 'https://wordscapesanswers.appspot.com/api/v1/send2',
    //     data: ,
    //     dataType: 'html',
    //     success: function(msg){
    //         // if (parseInt(msg, 0) !== 0) {
    //         //     var msg_split = msg.split('|');
    //         //     if (msg_split[0] === 'success') {
    //         //         $email.val('').removeAttr('disabled');
    //         //         $name.val('').removeAttr('disabled');
    //         //         $message.val('').removeAttr('disabled');
    //         //         $submit.removeAttr('disabled');
    //         //         $dataStatus.html(msg_split[1]).fadeIn();
    //         //     } else {
    //         //         $email.removeAttr('disabled');
    //         //         $name.removeAttr('disabled');
    //         //         $message.removeAttr('disabled');
    //         //         $submit.removeAttr('disabled');
    //         //         $dataStatus.html(msg_split[1]).fadeIn();
    //         //     }
    //         // }
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
