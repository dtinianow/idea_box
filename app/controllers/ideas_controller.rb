class IdeasController < ApplicationController
  respond_to :html, :json

  def index
    @ideas = Idea.order(created_at: :desc)
    respond_with @ideas
  end
end
