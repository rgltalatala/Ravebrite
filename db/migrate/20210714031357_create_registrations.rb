class CreateRegistrations < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
    end

    add_index :registrations, :user_id
    add_index :registrations, :event_id
  end
end
