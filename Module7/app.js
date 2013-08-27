var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json'
var k;
$(function(){
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

	function showMovies(response){
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
 function showMovies(response){
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
        
		
	}   
});
