let counter = 0;

function up(){
    if (counter < 7) {
        counter++;
        load();
    }
}

function down(){
    if (counter > 1){
        counter--;
        load();
    }
}

function load(){
    $(function(){
        $("#includedContent").load("./" + counter + "/index.html");
       /* $("#includedScript").load("./" + counter + "/matrix.js");*/
    });
    $('head')
        .append( $('<link rel="stylesheet" type="text/css" />').attr('href', "./" + counter + "/style.css") );
    /*$('head')
        .append( $('<script></script>').attr('src', "./" + counter + "/matrix.js") );*/
}
