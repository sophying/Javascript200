$.ajax({
    url:'./ajaxTest1.php',
    type: 'get'
}).done(function(data){
    $('#open').text(data);
})