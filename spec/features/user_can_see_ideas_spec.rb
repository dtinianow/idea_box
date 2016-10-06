require 'rails_helper'

describe "User can see ideas", :type => :feature, :js => true do
  scenario 'they visit the root path and see title, description, and quality' do

    idea = create(:idea)
    ideas = Idea.order(created_at: :desc)
    alphabet_truncated_body = 'a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v'

    visit root_path

    expect(ideas.first).to eq idea
    expect(idea.quality).to eq 'swill'
    expect(page).to have_content 'Idea Box'

    wait_for_ajax
    find("#idea-#{idea.id}")

    within("#idea-#{idea.id}") do
      expect(page).to have_content idea.title
      expect(page).to have_content alphabet_truncated_body
      expect(page).to have_content idea.quality
    end
  end
end
