# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Event.destroy_all
Event.connection.execute('ALTER SEQUENCE events_id_seq RESTART WITH 1')
Registration.destroy_all
Registration.connection.execute('ALTER SEQUENCE registrations_id_seq RESTART WITH 1')
Bookmark.destroy_all
Bookmark.connection.execute('ALTER SEQUENCE registrations_id_seq RESTART WITH 1')

# Users 

demo = User.create({email: "demo@user.com", password: "demouser", first_name: "Demo", last_name: "User"})
raph = User.create({email: "raph@ex.com", password: "123456", first_name: "Raph", last_name: "Talatala"})
ali = User.create({email: "ali@ex.com", password: "123456", first_name: "Ali", last_name: "Ahmed"})
chase = User.create({email: "chase@ex.com", password: "123456", first_name: "Chase", last_name: "Van Haselen"})
jack = User.create({email: "jack@ex.com", password: "123456", first_name: "Jack", last_name: "Liu"})
zoe = User.create({email: "zoe@ex.com", password: "123456", first_name: "Zoe", last_name: "Anne"})
paula = User.create({email: "paula@ex.com", password: "123456", first_name: "Paula", last_name: "Rae"})
mika = User.create({email: "mika@ex.com", password: "123456", first_name: "Mika", last_name: "Tumi"})
ciara = User.create({email: "ciara@ex.com", password: "123456", first_name: "Ciara", last_name: "Mae"})
aaron = User.create({email: "aaron@ex.com", password: "123456", first_name: "Aaron", last_name: "Zhang"})

# Events

event1 = Event.create!({
    host_id: raph.id,
    title: "Raph's Rave",
    description: "A night of dancing and fun with Raph's favorite house hits!",
    location: "Brooklyn Mirage 140 Stewart Ave, Brooklyn, NY 11237",
    genre: Event.genres[0],
    start_date: "2021-10-2",
    end_date: "2021-10-3",
    start_time: "10:00 PM",
    end_time: "2:00 AM",
})


event2 = Event.create!({
    host_id: demo.id,
    title: "Electric Zoo",
    description: "Your favorite DJs coming to perform at Randall's Island during Labor Day Weekend!",
    location: "20 Randall's Island Park, New York, NY 10035",
    genre: Event.genres[9],
    start_date: "2021-10-3",
    end_date: "2021-10-6",
    start_time: "3:00 PM",
    end_time: "1:00 AM",
})

event3 = Event.create!({
    host_id: chase.id,
    title: "Tiesto at MSG",
    description: "For one night only, Tiesto will perform his latest album at Madison Square Garden!",
    location: "Madison Square Garden 4 Pennsylvania Plaza, New York, NY 10001",
    genre: Event.genres[4],
    start_date: "2021-10-17",
    end_date: "2021-10-17",
    start_time: "8:00 PM",
    end_time: "11:00 PM",
})

event4 = Event.create!({
    host_id: jack.id,
    title: "In the Trap",
    description: "Jack Liu on the 1s and 2s playing some trap classics.",
    location: "Schimanski 54 N 11th St, Brooklyn, NY 11249",
    genre: Event.genres[3],
    start_date: "2021-10-21",
    end_date: "2021-10-22",
    start_time: "8:00 PM",
    end_time: "4:00 AM",
})

event5 = Event.create!({
    host_id: zoe.id,
    title: "Louis the Child",
    description: "The future bass duo comes to Terminal 5!",
    location: "Terminal 5 610 W 56th St, New York, NY 10019",
    genre: Event.genres[5],
    start_date: "2021-10-28",
    end_date: "2021-10-29",
    start_time: "9:00 PM",
    end_time: "2:30 AM",
})

event6 = Event.create!({
    host_id: paula.id,
    title: "Porter Robinson - Nurture Live",
    description: "Experience Porter Robinson's newest album at the best venue in New York.",
    location: "Avant Gardner 140 Stewart Ave, Brooklyn, NY 11237",
    genre: Event.genres[5],
    start_date: "2021-10-22",
    end_date: "2021-10-23",
    start_time: "10:00 PM",
    end_time: "4:00 AM",
})

event7 = Event.create!({
    host_id: ciara.id,
    title: "Sullivan King",
    description: "Metal meets Dubstep on the Hudson with Sullivan King",
    location: "Pier 40 353 West St, New York, NY, 10014",
    genre: Event.genres[2],
    start_date: "2021-12-21",
    end_date: "2021-10-22",
    start_time: "10:00 PM",
    end_time: "4:00 AM",
})

event8 = Event.create!({
    host_id: mika.id,
    title: "Lane 8",
    description: "Lane 8 stops by in Brooklyn for his latest NA tour.",
    location: "Brooklyn Mirage 140 Stewart Ave, Brooklyn, NY 11237",
    genre: Event.genres[6],
    start_date: "2021-11-15",
    end_date: "2021-10-16",
    start_time: "10:00 PM",
    end_time: "4:00 AM",
})

event9 = Event.create!({
    host_id: aaron.id,
    title: "Netsky",
    description: "Jack Liu on the 1s and 2s playing some trap classics.",
    location: "Webster Hall 125 E 11th St, New York, NY 10003",
    genre: Event.genres[8],
    start_date: "2021-10-31",
    end_date: "2021-11-1",
    start_time: "10:00 PM",
    end_time: "4:00 AM",
})

event10 = Event.create!({
    host_id: ali.id,
    title: "Headhunterz @ Hammerstein",
    description: "Headhunterz brings some hardstyle to the US in the legendary Hammerstein Ballroom",
    location: "Hammerstein Ballroom 311 W 34th St, New York, NY 10001",
    genre: Event.genres[7],
    start_date: "2021-10-21",
    end_date: "2021-10-22",
    start_time: "8:00 PM",
    end_time: "4:00 AM",
})

event11 = Event.create!({
    host_id: raph.id,
    title: "Raph's Rave Pt. 2",
    description: "Raph closes the night with some techno",
    location: "King's Hall 140 Stewart Ave, Brooklyn, NY 11237",
    genre: Event.genres[1],
    start_date: "2021-10-3",
    end_date: "2021-10-3",
    start_time: "2:00 AM",
    end_time: "4:00 AM",
})

ticket1 = Registration.create!({
    user_id: raph.id,
    event_id: event4.id
})

ticket2 = Registration.create!({
    user_id: ali.id,
    event_id: event4.id

})

ticket2 = Registration.create!({
    user_id: chase.id,
    event_id: event4.id
})

ticket3 = Registration.create!({
    user_id: jack.id,
    event_id: event4.id
})

ticket4 = Registration.create!({
    user_id: raph.id,
    event_id: event4.id
})

ticket5 = Registration.create!({
    user_id: demo.id,
    event_id: event1.id
})

ticket6 = Registration.create!({
    user_id: jack.id,
    event_id: event3.id
})

ticket7 = Registration.create!({
    user_id: chase.id,
    event_id: event3.id
})

bookmark1 = Bookmark.create!({
    user_id: chase.id,
    event_id: event3.id
})

bookmark2 = Bookmark.create!({
    user_id: zoe.id,
    event_id: event6.id
})

bookmark3 = Bookmark.create!({
    user_id: paula.id,
    event_id: event5.id
})

bookmark4 = Bookmark.create!({
    user_id: mika.id,
    event_id: event1.id
})

bookmark5 = Bookmark.create!({
    user_id: aaron.id,
    event_id: event2.id
})


event1.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'raph.jpg')), filename: 'raph.jpg')
event2.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg')), filename: 'nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg')
event3.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'colin-lloyd-5TGwSC4dHOU-unsplash.jpg')), filename: 'colin-lloyd-5TGwSC4dHOU-unsplash.jpg')
event4.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'jack.jpg')), filename: 'jack.jpg')
event5.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'nick-kane-NMx_9N2QC5o-unsplash.jpg')), filename: 'nick-kane-NMx_9N2QC5o-unsplash.jpg')
event6.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'chase.jpg')), filename: 'chase.jpg')
event7.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'zachary-smith-WnzpDwxh1iQ-unsplash.jpg')), filename: 'zachary-smith-WnzpDwxh1iQ-unsplash.jpg')
event8.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg')), filename: 'marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg')
event9.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'arthur-edelmans-nu7AOx73UOM-unsplash.jpg')), filename: 'arthur-edelmans-nu7AOx73UOM-unsplash.jpg')
event10.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'colin-lloyd-dbzm9uGRWvY-unsplash.jpg')), filename: 'colin-lloyd-dbzm9uGRWvY-unsplash.jpg')
event11.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'alexander-popov-Vy2Bttl96_E-unsplash.jpg')), filename: 'alexander-popov-Vy2Bttl96_E-unsplash.jpg')
