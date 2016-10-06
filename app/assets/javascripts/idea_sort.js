function sortIdeas() {
  $('#sort-ideas-by-quality').on('click', function(){
    $.ajax({
      type: 'get',
      url: '/api/v1/ideas'
    }).then(sortByQuality)
    .then(renderIdea)
    .fail(handleError)
  })
}

function sortByQuality( ideas ) {
  var flag = 0;
  var swillIdeas = [];
  var plausibleIdeas = [];
  var geniusIdeas = [];

  ideas.forEach(function(idea){
    if (idea.quality == 'swill') {
      swillIdeas.push(idea);
    } else if (idea.quality == 'plausible') {
      plausibleIdeas.push(idea);
    } else if (idea.quality == 'genius') {
      geniusIdeas.push(idea);
    }
  })
  var sortedIdeas = geniusIdeas.concat(plausibleIdeas).concat(swillIdeas);
  if (flag == 0) {
    flag = 1;
    return sortedIdeas;
  } else {
    flag = 0;
    return sortedIdeas.reverse();
  }
}
