$(document).ready(function() {
  getIdeas();
})

function getIdeas() {
  var x = $.ajax({
    url: 'http://localhost:3000/api/v1/ideas',
    type: 'get',
  }).then(collectIdeas)
  .then(renderIdea)
}

function collectIdeas( ideasData ) {
  return ideasData.map(createIdeaHTML);
}

function renderIdea( ideaData ) {
  $('#ideas-table').append(ideaData)
}

function createIdeaHTML( idea ) {
  return $(
    "<tr class='idea-"
    + idea.id
    + "'><td>"
    + idea.title
    + "</td><td>"
    + idea.body
    + "</td><td>"
    + idea.quality
    + "</td><td></tr>"
  )
}
