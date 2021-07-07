class Event < ApplicationRecord
    validates :title, :description, :location, :category, :start_date, :end_date, :start_time, :end_time, presence: true
    
    belongs_to :host,
        foreign_key: :user_id,
        source: :user

    has_many :registrations,
        foreign_key: :event_id,
        source: :registrations

    has_many :attendees,
        through: :registrations,
        source: :registrations
end