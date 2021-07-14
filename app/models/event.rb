class Event < ApplicationRecord
    validates :title, :description, :location, :genre, :start_date, :end_date, :start_time, :end_time, :host_id, presence: true
    
    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    # has_many :registrations,
    #     foreign_key: :event_id,
    #     source: :registrations

    # has_many :attendees,
    #     through: :registrations,
    #     source: :registrations

    # def self.genres
        
    # end
end