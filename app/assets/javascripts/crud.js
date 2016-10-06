$(document).ready(function() {
  getIdeas();
  createIdea();
  deleteIdea();
  editIdeaTitle();
  editIdeaBody();
  upvote();
  downvote();
  search();
});

function getIdeas() {
  $.ajax({
    type: 'get',
    url: '/api/v1/ideas'
  }).then(collectIdeas)
  .then(renderIdea)
  .fail(handleError)
};

function collectIdeas( ideasData ) {
  return ideasData.map(createIdeaHTML);
};

function renderIdea( ideaData ) {
  $('#ideas-table').prepend(ideaData);
};

function createIdeaHTML( idea ) {
  return $(
    "<tr class=idea data-id='"
    + idea.id
    + "'><td class=idea-title contenteditable='true'>"
    + idea.title
    + "</td><td class=idea-body contenteditable='true'>"
    + truncate(idea.body)
    + "</td><td class=idea-quality>"
    + idea.quality
    + "<td><button type='button' class='btn btn-success upvote-idea'>Upvote</button></td>"
    + "<td><button type='button' class='btn btn-primary downvote-idea'>Downvote</button></td>"
    + "</td><td><button class='btn btn-danger delete-idea'>Delete</button></td>"
    + "</tr>"
  )
};

function truncate( body ) {
  return body.split(' ').slice(0, 100).join(" ")
};

function handleError( error ) { console.log(error) };

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

function saveIdeaTitle() {
  var newTitle = $(this).text();
  var $idea = $(this).closest('tr');

  $.ajax({
    url: '/api/v1/ideas/' + $idea.data('id'),
    type: 'put',
    data: { idea: { title: newTitle } }
  }).fail(handleError)
}

var qualities = ['swill', 'plausible', 'genius']

function upvote(){
  $('#ideas-table').on('click', '.upvote-idea', function(){
    var $idea = $(this).closest('tr');
    var $quality = $idea.find('.idea-quality');
    var qualityText = $quality.text();
    var qualityIndex = qualities.indexOf(qualityText);

    if (qualityText != 'genius') {
      var newQuality = qualities[qualityIndex + 1]

      $.ajax({
        url: '/api/v1/ideas/' + $idea.data('id'),
        type: 'put',
        data: { idea: { quality: newQuality } }
      }).fail(handleError)
      $quality.text(newQuality);
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

      $.ajax({
        url: '/api/v1/ideas/' + $idea.data('id'),
        type: 'put',
        data: { idea: { quality: newQuality } }
      }).fail(handleError)
      $quality.text(newQuality);
    }
  })
}

function search() {
  $('#ideaFilter').on('keyup', function(){
    var $searchQuery = $('#ideaFilter').val()
    checkMatches($searchQuery)
  })
}

function checkMatches(searchQuery) {
  var $ideas = $('#ideas-table').find('.idea')
  $.each($ideas, function(index, idea){
    title = $(idea).find('.idea-title').text()
    body = $(idea).find('.idea-body').text()
    if (title.indexOf(searchQuery) >= 0 || body.indexOf(searchQuery) >= 0) {
      $(idea).show();
    } else {
      $(idea).hide();
    }
  })
}
