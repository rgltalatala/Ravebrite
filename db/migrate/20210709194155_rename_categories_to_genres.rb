class RenameCategoriesToGenres < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :category, :genre
  end
end
