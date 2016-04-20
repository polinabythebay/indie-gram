class AddPhotoToIndies < ActiveRecord::Migration
  def change
    add_column :indies, :photo, :string
  end
end
