function createIdea() {
  $('#save-new-idea').on('click', function(e){
    var ideaParams = {
      idea: {
        title: $('#idea-title').val(),
        body: $('#idea-body').val(),
        quality: 'swill'
      }
    }
    $.post('/api/v1/ideas', ideaParams)
    .then(createIdeaHTML)
    .then(renderIdea)
    .fail(handleError)

    e.preventDefault();
    clearInputFields();
  })
}

function clearInputFields(){
  $('#idea-title').val('')
  $('#idea-body').val('')
}
