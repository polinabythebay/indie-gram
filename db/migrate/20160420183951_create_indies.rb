class CreateIndies < ActiveRecord::Migration
  def change
    create_table :indies do |t|

      t.timestamps
    end
  end
end
