class AddPropertyDescriptionToProperties < ActiveRecord::Migration[7.0]
  def change
    add_column :properties, :property_description, :string
  end
end
