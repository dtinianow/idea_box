require 'rails_helper'

RSpec.describe Idea, type: :model do

  context "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:body) }
    it { should define_enum_for(:quality) }
  end

  it "has a default quality of swill" do
    idea = create(:idea)

    expect(idea.quality).to eq("swill")
  end
end
