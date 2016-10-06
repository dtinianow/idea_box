function editIdeaTitle() {
  $('#ideas-table').on('blur', '.idea-title', saveIdeaTitle)
  $('#ideas-table').on('keydown', '.idea-title', function(e) {
    if(e.keyCode == 13)
    {
      e.preventDefault();
      $(this).blur();
    }
  })
}

function saveIdeaTitle() {
  var newTitle = $(this).text();
  var $idea = $(this).closest('tr');

  $.ajax({
    url: '/api/v1/ideas/' + $idea.data('id'),
    type: 'put',
    data: { idea: { title: newTitle } }
  }).fail(handleError)
}

function editIdeaBody() {
  $('#ideas-table').on('blur', '.idea-body', saveIdeaBody)
  $('#ideas-table').on('keydown', '.idea-body', function(e) {
    if(e.keyCode == 13)
    {
      e.preventDefault();
      $(this).blur();
    }
  })
}

function saveIdeaBody() {
  var newBody = $(this).text();
  var $idea = $(this).closest('tr');

  $.ajax({
    url: '/api/v1/ideas/' + $idea.data('id'),
    type: 'put',
    data: { idea: { body: newBody } }
  }).fail(handleError)
}
