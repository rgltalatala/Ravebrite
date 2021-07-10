class Event < ApplicationRecord
    validates :title, :description, :location, :genre, :start_date, :end_date, :start_time, :end_time, presence: true
    
    # belongs_to :host,
    #     foreign_key: :user_id,
    #     source: :user

    # has_many :registrations,
    #     foreign_key: :event_id,
    #     source: :registrations

    # has_many :attendees,
    #     through: :registrations,
    #     source: :registrations

    def self.GENRES
        @GENRES = [
            "House", 
            "Techno", 
            "Dubstep", 
            "Trap", 
            "Trance", 
            "Future Bass", 
            "Ambient", 
            "Hardstyle",
            "Drum and bass",
            "Garage"
        ]
    end
end