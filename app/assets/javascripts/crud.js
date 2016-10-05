$(document).ready(function() {
  getIdeas();
  createIdea();
  deleteIdea();
  editIdea();
});

function getIdeas() {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'get',
  }).then(collectIdeas)
  .then(renderIdea)
  .fail(handleError)
};

function collectIdeas( ideasData ) {
  return ideasData.map(createIdeaHTML);
};

function renderIdea( ideaData ) {
  $('#ideas-table').append(ideaData);
};

function createIdeaHTML( idea ) {
  return $(
    "<tr class=idea data-id='"
    + idea.id
    + "'><td class=idea-title contenteditable='true'>"
    + idea.title
    + "</td><td>"
    + truncate(idea.body)
    + "</td><td>"
    + idea.quality
    + "</td><td><button class='delete-idea'>Delete</button></td></tr>"
  )
};

function truncate( body ) {
  return body.split(' ').slice(0, 100).join(" ")
};

function handleError( error ) { console.log(error) };

function createIdea() {
  $('#save-new-idea').on('click', function(){
    var ideaParams = {
      idea: {
        title: $('#idea-title').val(),
        body: $('#idea-body').val(),
        quality: 0
      }
    }
    $.post('/api/v1/ideas', ideaParams)
    .then(createIdeaHTML)
    .then(renderIdea)
    .fail(handleError)
  })
}

function deleteIdea() {
  $('#ideas-table').on('click', '.delete-idea', function(){
    var $idea = $(this).closest('.idea');
    $.ajax({
      url: '/api/v1/ideas/' + $idea.data('id'),
      type: 'delete'
    }).then(function(){
      $idea.remove()
    }).fail(handleError)
  })
}

function editIdea() {
  $('#ideas-table').on('blur', '.idea-title', function(){
    var newTitle = $(this).text();
    // var tableRow = $(this).closest('tr');
    console.log(newText);
    // console.log(tableRow.text());
    // var ideaId = tableRow.data('id')
    // console.log(ideaId);
  })
}
