$(document).ready(function() {
    let height = $('#text-box').height();
    // console.log(height);
    if (height >= 122) {
        $('#text-box').css('padding-top', '0px');
    } else if (height >= 70) {
        $('#text-box').css('padding-top', '30px');
    } else {
        $('#text-box').css('padding-top', '50px');
    }

    $("button").click(function(){
       let height = $('#text-box').height();
    //  console.log(height);
        if (height >= 122) {
            $('#text-box').css('padding-top', '0px');
        } else if (height >= 70) {
            $('#text-box').css('padding-top', '30px');
        } else {
            $('#text-box').css('padding-top', '50px');
        }
      });
})