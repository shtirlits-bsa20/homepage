$(document).ready(
    function () {
        $("#alert_button").click(
            function () {
                alert("Не стоит нажимать кнопку 4:20");
                $('body').append('<audio src="Military March - WENN DIE SOLDATEN DURCH DIE STADT MARSCHIEREN.mp3" type="audio/mpeg" autoplay="autoplay"></audio>');
                $('main').css("background","none");
                $('.jsbackg_jg').css("background-image","url(https://i.imgur.com/GpmRglB.jpg)");
                $('#ava').attr("src","https://i.imgur.com/Q0jtfvE.png");
                $('.page').attr("style","border-color: red;");
            }
        );

    }
);