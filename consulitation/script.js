$(document).ready(function() {
    $("#form").submit(function(){
        $.ajax({
            type: "POST",
            url:"base.php",
            data: $(this).serialize()
        }).done(function(){
            alert("Письмо нам отправлено!");
            window.location.href = '../main.html';
            
        });
        return false;
    });
});