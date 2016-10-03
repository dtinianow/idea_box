class HomeController < ApplicationController
  def index
    @ideas = Idea.order(created_at: :desc)
  end
end
