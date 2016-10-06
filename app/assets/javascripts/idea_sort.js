function sortIdeas() {
  $('#sort-ideas-by-quality').on('click', function(){
    sortByQuality()
  })
}

function sortByQuality( ideas ) {
  var swillIdeas = [];
  var plausibleIdeas = [];
  var geniusIdeas = [];
  var $ideas = $('#ideas-table').find('.idea')

  $.each($ideas, function(index, idea){
    var quality = idea.children[2].innerHTML
    if (quality == 'swill') {
      swillIdeas.push(idea);
    } else if (quality == 'plausible') {
      plausibleIdeas.push(idea);
    } else if (quality == 'genius') {
      geniusIdeas.push(idea);
    }
  })
  var $sortedIdeas = geniusIdeas.concat(plausibleIdeas).concat(swillIdeas);
  $.each($sortedIdeas, function(index, idea){
    $('#ideas-table').prepend(idea);
  })
}
