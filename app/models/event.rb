class Event < ApplicationRecord
    validates :title, :description, :location, :category, :start_date, :end_date, :start_time, :end_time :presence: true
end