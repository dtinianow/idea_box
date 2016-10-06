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
