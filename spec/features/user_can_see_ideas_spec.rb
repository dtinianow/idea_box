require 'rails_helper'

describe "User can see ideas", :type => :feature do
  scenario 'they visit the root path and see title, description, and quality' do

    visit root_path

    expect(page).to have_content 'Idea Box'

    within('#new-idea-form') do
      expect(page).to have_content 'Submit a New Idea:'
    end

    within('#search-ideas') do
      expect(page).to have_content 'Search Ideas:'
    end

    within("#results") do
      expect(page).to have_content 'Title'
      expect(page).to have_content 'Body'
      expect(page).to have_content 'Quality'
      expect(page).to have_content 'Like'
      expect(page).to have_content 'Dislike'
      expect(page).to have_content 'Delete'
    end
  end
end
