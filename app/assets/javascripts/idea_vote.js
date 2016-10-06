var qualities = ['swill', 'plausible', 'genius']

function editIdeaQuality(newQuality, $idea, $quality){
  $.ajax({
    url: '/api/v1/ideas/' + $idea.data('id'),
    type: 'put',
    data: { idea: { quality: newQuality } }
  }).fail(handleError)
  $quality.text(newQuality);
}

function upvote(){
  $('#ideas-table').on('click', '.upvote-idea', function(){
    var $idea = $(this).closest('tr');
    var $quality = $idea.find('.idea-quality');
    var qualityText = $quality.text();
    var qualityIndex = qualities.indexOf(qualityText);

    if (qualityText != 'genius') {
      var newQuality = qualities[qualityIndex + 1]
      editIdeaQuality(newQuality, $idea, $quality);
    }
  })
}

function downvote(){
  $('#ideas-table').on('click', '.downvote-idea', function(){
    var $idea = $(this).closest('tr');
    var $quality = $idea.find('.idea-quality');
    var qualityText = $quality.text();
    var qualityIndex = qualities.indexOf(qualityText);

    if (qualityText != 'swill') {
      var newQuality = qualities[qualityIndex - 1]
      editIdeaQuality(newQuality, $idea, $quality);
    }
  })
}
