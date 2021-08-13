class ChangeLikesToBookmarks < ActiveRecord::Migration[5.2]
  def change
    rename_table :likes, :bookmarks
  end
end
