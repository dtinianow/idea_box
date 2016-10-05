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

  def update
    idea = Idea.find(params[:id])
    if idea.update(idea_params)
      render json: idea
    else
      render 'Invalid Update', status: 400
    end
  end

  def destroy
    if Idea.destroy(params[:id])
      render :nothing => true, :status => 204
    else
      render "The item you are trying to delete does not exist"
    end
  end

private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
