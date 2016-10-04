class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.order(created_at: :desc)
  end

  def create
    idea = Idea.create(idea_params)
    if idea.save
      respond_with idea
    else
      render 'Invalid Idea'
    end
  end

private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
