function editIdea(targetClass, callback) {
  $('#ideas-table').on('blur', targetClass, callback)
  $('#ideas-table').on('keydown', targetClass, function(e) {
    if(e.keyCode == 13)
    {
      e.preventDefault();
      $(this).blur();
    }
  })
}

function updateTitle() {
  var newTitle = $(this).text();
  var $idea = $(this).closest('tr');

  $.ajax({
    url: '/api/v1/ideas/' + $idea.data('id'),
    type: 'put',
    data: { idea: { title: newTitle } }
  }).fail(handleError)
}

function updateBody() {
  var newBody = $(this).text();
  var $idea = $(this).closest('tr');

  $.ajax({
    url: '/api/v1/ideas/' + $idea.data('id'),
    type: 'put',
    data: { idea: { body: newBody } }
  }).fail(handleError)
}
