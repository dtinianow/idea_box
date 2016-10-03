class CreateIdea < ActiveRecord::Migration[5.0]
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :body
      t.column :quality, :integer, default: 0

      t.timestamps
    end
  end
end
