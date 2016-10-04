class Api::V1::IdeasController < ApplicationController

  def index
    render json: Idea.order(created_at: :desc)
  end

  def create
    idea = Idea.create(idea_params)
    if idea.save
      render json: idea, status: 201
    else
      render 'Invalid Idea', status: 400
    end
  end

private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
