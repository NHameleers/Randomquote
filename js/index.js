$(document).ready(function() {
  
  function createQuote(){
    var apiUrl = 'http://api.forismatic.com/api/1.0/?jsonp=?';
    var data = {
            lang: "en",
            method: "getQuote",
            format: "jsonp"
          };
    $.getJSON(apiUrl, data)
      .done(function(json) {
        $("#quotetext").html(json.quoteText + "<br>" + json.quoteAuthor)
      .fail(function(){                             
        $("#quotetext").text("error");            
      })                                              
    });
  } 
  /*
  function createQuote(){
      $.ajax({
        jsonp: "jsonp",
        dataType: "jsonp",
        url: 'http://api.forismatic.com/api/1.0/',
        contentType: 'application/jsonp',
        data: {
          lang: "en",
          method: "getQuote",
          format: "jsonp"
        },
        success: function(data){
          $("#quotebox").html("<p>" + data.quoteText + "<br>" + data.quoteAuthor + "</p>");
        }
      });
  }
  */
  
  $("#btn-submit").click(function(){
    createQuote();        
    }); 
});