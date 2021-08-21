class Event < ApplicationRecord
    validates :title, :description, :location, :genre, :start_date, :end_date, :start_time, :end_time, :host_id, presence: true
    
    # validate :ensure_photo

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    has_many :registrations,
        foreign_key: :event_id,
        source: :registrations

    has_many :attendees,
        through: :registrations,
        source: :registrations
    
    has_many :bookmarks,
        foreign_key: :event_id,
        class_name: :Bookmark

    has_one_attached :photo

    def self.genres
        genres = [
            "House", 
            "Techno", 
            "Dubstep", 
            "Trap", 
            "Trance", 
            "Future Bass", 
            "Ambient", 
            "Hardstyle",
            "Drum and Bass",
            "Multi-genre"
        ]
    end

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "Must be attached"
        end
    end
end