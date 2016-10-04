class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.order(created_at: :desc)
  end
end
