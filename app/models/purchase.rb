class Purchase < ApplicationRecord
  belongs_to :users
  belongs_to :properties
end
