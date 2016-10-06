require 'rails_helper'

describe 'Ideas' do
  context "#Index" do
    it 'can return all ideas in reverse order' do
      idea = create(:idea)

      get '/api/v1/ideas'

      ideas = JSON.parse(response.body)
      idea = ideas.first

      expect(response).to be_success
      expect(ideas.length).to eq(1)
      expect(ideas.class).to eq(Array)
      expect(idea.class).to eq(Hash)
      expect(idea['title']).to eq('Alphabet')
      expect(idea['body']).to eq('a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z ')
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

      expect(response).to be_success
      expect(idea.class).to eq(Hash)
      expect(idea['title']).to eq('Hey')
      expect(idea['body']).to eq('Hello')
      expect(idea['quality']).to eq('swill')
    end
  end
end

#
#   it 'can return JSON data on a specific item' do
#     get '/api/v1/items/2'
#
#     item = JSON.parse(response.body)
#
#     expect(response).to be_success
#     expect(item.class).to eq(Hash)
#     expect(item['id']).to eq(2)
#     expect(item['name']).to eq('Robotron')
#     expect(item['description']).to eq('Boop boop beep')
#   end
#
#   it 'can create an item' do
#     item_params = { name: "Brobot",
#                     description: "The broiest robot",
#                     image_url: 'http://robohash.org/1.png?set=set2&bgset=bg1&size=200x200'
#     }
#
#     post "/api/v1/items", item: item_params
#     item = Item.last
#
#     expect(response.status).to eq 201
#     expect(item['name']).to eq 'Brobot'
#     expect(item['description']).to eq 'The broiest robot'
#     expect(item['image_url']).to eq 'http://robohash.org/1.png?set=set2&bgset=bg1&size=200x200'
#   end
#
#
#   it 'can delete an item' do
#     item = items(:one)
#
#     delete "/api/v1/items/#{item.id}"
#
#     expect(response.status).to eq 204
#   end
# end
