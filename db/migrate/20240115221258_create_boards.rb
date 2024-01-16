class CreateBoards < ActiveRecord::Migration[7.1]
  def change
    create_table :boards do |t|
      t.string :name
      t.string :email
      t.json :grid

      t.timestamps
    end
  end
end
