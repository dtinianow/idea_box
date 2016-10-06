function searchIdeas() {
  $('#ideaFilter').on('keyup', function(){
    var $searchQuery = $('#ideaFilter').val()
    checkMatches($searchQuery)
  })
}

function checkMatches(searchQuery) {
  var $ideas = $('#ideas-table').find('.idea')
  $.each($ideas, function(index, idea){
    var title = $(idea).find('.idea-title').text()
    var body = $(idea).find('.idea-body').text()
    if (title.indexOf(searchQuery) >= 0 || body.indexOf(searchQuery) >= 0) {
      $(idea).show();
    } else {
      $(idea).hide();
    }
  })
}
