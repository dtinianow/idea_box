$(document).ready(function() {
  getIdeas();
  createIdea();
  deleteIdea();
  editIdea('.idea-title', updateTitle);
  editIdea('.idea-body', updateBody);
  upvote();
  downvote();
  searchIdeas();
  sortIdeas();
});
