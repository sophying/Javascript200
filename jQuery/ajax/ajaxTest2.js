$(function(){
    $('#sumBtn').on('click', function(){
        $.ajax({
            url:'./ajaxTest2.php',
            type: 'get',
            data:{
                a: $('#a').val(),
                b: $('#b').val()
            }
        }).done(function(data){
            $('#result').text(data);
        })
    })
})