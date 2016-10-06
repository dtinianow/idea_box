require 'rails_helper'

describe 'Ideas' do
  context "#Index" do
    it 'can return all ideas in reverse order' do

      idea = create(:idea, title: 'Hi', body: 'Hello', created_at: Date.yesterday)
      idea = create(:idea)

      get '/api/v1/ideas'

      ideas = JSON.parse(response.body)
      idea = ideas.last

      expect(response).to be_success
      expect(ideas.length).to eq(2)
      expect(ideas.class).to eq(Array)
      expect(idea.class).to eq(Hash)
      expect(idea['title']).to eq('Hi')
      expect(idea['body']).to eq('Hello')
      expect(idea['quality']).to eq('swill')
    end
  end

  context "#Create" do
    it 'can create a new idea' do

      params = {
        title: "Hey",
        body: "Hello"
      }

      post '/api/v1/ideas', idea: params

      idea = JSON.parse(response.body)

      expect(response.status).to eq 201
      expect(idea.class).to eq(Hash)
      expect(idea['title']).to eq('Hey')
      expect(idea['body']).to eq('Hello')
      expect(idea['quality']).to eq('swill')
    end
  end

  context "#Update" do
    it 'can update an idea' do

      idea = create(:idea)
      params = {
        title: "Hey",
        body: "Hello",
        quality: 'genius'
      }

      put "/api/v1/ideas/#{idea.id}", idea: params

      idea = JSON.parse(response.body)

      expect(response).to be_success
      expect(idea.class).to eq(Hash)
      expect(idea['title']).to eq('Hey')
      expect(idea['body']).to eq('Hello')
      expect(idea['quality']).to eq('genius')
    end
  end

  context '#Destroy' do
    it 'can delete an idea' do
      idea = create(:idea)

      delete "/api/v1/ideas/#{idea.id}"

      expect(response.status).to eq 204
    end
  end
end
