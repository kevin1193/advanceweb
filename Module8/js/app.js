var k;
var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
$(function(){
    var app = {};
    $('<input/>').attr({ type: 'text', id: 'search', class:'span8', dataProvide:'typeahead' , dataItems:'5' }).appendTo('.searchinput');
    $('input[type=text]').keyup(function(e) {
      if (e.keyCode == 8)
      {
        $('#container').empty();

      }
      if(e.keyCode == 13) {
 
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: $('#search').val(),
                apikey: 'c6rs6q6s6rpjfqje7gpsnz89'
        },
        success:showMovies
        }); 
      }
    });
    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;
    }
    function showMovies(response){
        $('#jumbo-content').empty();
        $('#content').empty();
        console.log('response', response);
        var movies = response.movies;
        if(movies.length ==0){
            $('#container').append('<h2>Did you mean:'+ $('#search').val()+'? No Result found');
            }
        else{
            $('#container').append('<h2>Did you mean '+ $('#search').val()+'? Results:'+response.total+'<h2>');
        }
        for (var i = 0; i < movies.length; i++){
            var movie = movies[i];

            $('#container').append('<div class = "wrapper"><h3>' + movie.title + '</h3>' +'<div class="imgcontainer"><img src="' + movie.posters.thumbnail + '"/></div><div class="details">About:<br>'+movie.synopsis+'<br>Year:'+movie.year+'<br>Casts:'+movie.abridged_cast[1].name+'</div></div>');
            
            };  
            $('details').hover(function(ev) {
            var data = $(ev.target).closest('tr').data();
            var movie = app.movies[data.id];
            $('.movie-detail').html(getTemplate('tpl-movie-detail', movie));
        });
    }   
});
var data = [
        "Ant",
        "Batman",
        "Beauty and the Beast",
        "Braveheart",
        "Blade",
        "Conan the Barbarian",
        "Curthroat Island",
        "Change Up",
        "Districy 9",
        "Eagle",
        "Fire",
        "Ghost",
        "Gran Torino",
        "Heart",
        "Home Alone",
        "Ip Man",
        "Ice Age",
        "Incendies",
        "Jumanji",
        "Killer Elite",
        "Kite Runner",
        "Lion King",
        "La Haine",
        "Madagascar",
        "Shutter Island",
        "Superman",
        ];
$(function() {

    $( '#search' ).typeahead(
    {
         source:data
    }); 
});

$(function(){
 var app = {};
 $('#sbtn').click(function() {
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: $('#search').val(),
                apikey: 'c6rs6q6s6rpjfqje7gpsnz89'
        },
        success:showMovies
        }); 
   });
 function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;
    }
 function showMovies(response){
        $('#jumbo-content').empty();
        $('#content').empty();
        console.log('response', response);
        var movies = response.movies;
        if(movies.length ==0){
            $('#container').append('<h2>Did you mean:'+ $('#search').val()+'? No Result found');
            }
        else{
            $('#container').append('<h2>Did you mean '+ $('#search').val()+'? Results:'+response.total+'<h2>');
        }
        for (var i = 0; i < movies.length; i++){
            var movie = movies[i];
        $('#jumbo-content').empty();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                movie._index = i;
                $('#content').append(getTemplate('tpl-box-office-item', movie));
        }
            };
            $('details').hover(function(ev) {
            var data = $(ev.target).closest('tr').data();
            var movie = app.movies[data.id];
            $('.movie-detail').html(getTemplate('tpl-movie-detail', movie));
        });
        
        
    }   
});


$(function() {
    var app = {};
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';
    $('#box-office').click(function() {
    $.ajax({
        url: url,
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        dataType: 'jsonp',
        success: showBoxOffice
        }); 

    });
    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;
    }
    function showBoxOffice(response) {
        $('#jumbo-content').empty();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                movie._index = i;
                $('#content').append(getTemplate('tpl-box-office-item', movie));
        }
    $('details').hover(function(ev) {
            var data = $(ev.target).closest('tr').data();
            var movie = app.movies[data.id];
            $('.movie-detail').html(getTemplate('tpl-movie-detail', movie));
        });
    }
});
$(function() {
    var app = {};
    var url= 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
    $('#in-theatres').click(function() {
    $.ajax({
        url: url,
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        dataType: 'jsonp',
        success: showIntheatres
        }); 
    });
    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;
    }
    function showIntheatres(response) {
        $('#jumbo-content').empty();
        $('#content').empty();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                movie._index = i;
                $('#content').append(getTemplate('tpl-box-office-item', movie));
        }
        $('#details').hover(function(ev) {
            var data = $(ev.target).closest('tr').data();
            var movie = app.movies[data.id];
            $('.movie-detail').html(getTemplate('tpl-movie-detail', movie));
        });
    }
});
$(function() {
    var app = {};
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';
    $('#upcoming').click(function() {
    $.ajax({
        url: url,
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        dataType: 'jsonp',
        success: showUpcoming
        }); 

    });
    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;
    }
    function showUpcoming(response) {
        $('#jumbo-content').empty();
        $('#content').empty();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                movie._index = i;
                $('#content').append(getTemplate('tpl-box-office-item', movie));
        }
        $('#details').hover(function(ev) {
            var data = $(ev.target).closest('tr').data();
            var movie = app.movies[data.id];
            $('.movie-detail').html(getTemplate('tpl-movie-detail', movie));
        });
    }
});



