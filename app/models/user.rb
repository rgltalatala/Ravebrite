class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, :fname, :lname, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :hosted_events,
    foreign_key: :host_id,
    source: :events

  has_many :bookmarks,
    foreign_key: :user_id,
    source: :bookmarks

  has_many :registrations,
    foreign_key: :user_id,
    source: :registrations

  has_many :registered_events,
    through: :registrations,
    source: :registrations

  has_many :bookmarked_events,
    through: :bookmarks,
    source: :bookmarks
  

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
