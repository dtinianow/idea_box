require 'rails_helper'

RSpec.feature 'User can see ideas' do
  scenario 'they visit the root path and see title, description, and quality' do

    backwards_idea = create(:backwards_idea)
    alphabet_idea  = create(:alphabet_idea)
    ideas = Idea.order(created_at: :desc)
    alphabet_truncated_body = 'a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v'

    visit root_path

    expect(ideas.first).to eq alphabet_idea
    expect(ideas.last).to eq backwards_idea
    expect(alphabet_idea.quality).to eq 'swill'
    expect(page).to have_content 'Ideabox'

    within("#idea-#{alphabet_idea.id}") do
      expect(page).to have_content alphabet_idea.title
      expect(page).to have_content alphabet_truncated_body
      expect(page).to have_content alphabet_idea.quality
    end
  end
end
