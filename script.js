$(document).ready(function(){
    configurarInicio ();
    $('.myicono' ).click(function(e){
        $('#navbar ul').toggleClass('lista-sm' );
    })
    function configurarInicio () {
        var urlPath = window.location.pathname;
        console.log(urlPath);
        $('nav a').each(function(){
            var href = $(this).attr('href')
            console.log(href);
            var indice = urlPath.length - href.length;
            console.log(urlPath.substring(indice));
            if(urlPath.substring(indice)===href) {
                console.log('match');
                $(this).closest('li').addClass('active');
            }
        })
    }
})


  
  
  
  
  
  
  