# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
# User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Event.destroy_all
# Event.connection.execute('ALTER SEQUENCE events_id_seq RESTART WITH 1')
Registration.destroy_all
# Registration.connection.execute('ALTER SEQUENCE registrations_id_seq RESTART WITH 1')

# Users 

demo = User.create({email: "demo@user.com", password: "demouser", first_name: "Demo", last_name: "User"})
raph = User.create({email: "raph@ex.com", password: "123456", first_name: "Raph", last_name: "Talatala"})
ali = User.create({email: "ali@ex.com", password: "123456", first_name: "Ali", last_name: "Ahmed"})
chase = User.create({email: "chase@ex.com", password: "123456", first_name: "Chase", last_name: "Van Haselen"})
jack = User.create({email: "jack@ex.com", password: "123456", first_name: "Jack", last_name: "Liu"})

# Events

event1 = Event.create!({
    host_id: raph.id,
    title: "Raph's Rave",
    description: "A night of dancing and fun with Raph's favorite house hits!",
    location: "Brooklyn Mirage 140 Stewart Ave, Brooklyn, NY 11237",
    genre: Event.genres[0], # replace this with genre_id when I create genre class? 
    start_date: "2021-8-9",
    end_date: "2021-8-10",
    start_time: "8:00 PM",
    end_time: "4:00 AM",
})

event2 = Event.create!({
    host_id: demo.id,
    title: "Electric Zoo",
    description: "Your favorite DJs coming to perform at Randall's Island during Labor Day Weekend!",
    location: "20 Randall's Island Park, New York, NY 10035",
    genre: Event.genres[10],
    start_date: "2021-9-3",
    end_date: "2021-9-6",
    start_time: "3:00 PM",
    end_time: "1:00 AM",
})

event3 = Event.create!({
    host_id: chase.id,
    title: "CVH at MSG",
    description: "For one night only, Chase Van Haselen will perform his debut album at Madison Square Garden!",
    location: "Madison Square Garden 4 Pennsylvania Plaza, New York, NY 10001",
    genre: Event.genres[10],
    start_date: "2021-8-17",
    end_date: "2021-8-17",
    start_time: "8:00 PM",
    end_time: "11:00 PM",
})

event4 = Event.create!({
    host_id: jack.id,
    title: "In the Trap",
    description: "Jack Liu on the 1s and 2s playing some trap classics.",
    location: "Schimanski 54 N 11th St, Brooklyn, NY 11249",
    genre: Event.genres[3],
    start_date: "2021-9-21",
    end_date: "2021-9-22",
    start_time: "8:00 PM",
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

# image1 = URI.open('https://ravebrite-dev.s3.amazonaws.com/arthur-edelmans-nu7AOx73UOM-unsplash.jpg')
# image2 = URI.open('https://ravebrite-dev.s3.amazonaws.com/colin-lloyd-5TGwSC4dHOU-unsplash.jpg')
# image3 = URI.open('https://ravebrite-dev.s3.amazonaws.com/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg')
# image4 = URI.open('https://ravebrite-dev.s3.amazonaws.com/nick-kane-NMx_9N2QC5o-unsplash.jpg')

event1.photo.attach(io: image1, filename: 'arthur-edelmans-nu7AOx73UOM-unsplash.jpg')
event2.photo.attach(io: image2, filename: 'colin-lloyd-5TGwSC4dHOU-unsplash.jpg')
event3.photo.attach(io: image3, filename: 'nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg')
event4.photo.attach(io: image4, filename: 'nick-kane-NMx_9N2QC5o-unsplash.jpg')

event1.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'arthur-edelmans-nu7AOx73UOM-unsplash.jpg')), filename: 'arthur-edelmans-nu7AOx73UOM-unsplash.jpg')
event2.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg')), filename: 'nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg')
event3.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'colin-lloyd-5TGwSC4dHOU-unsplash.jpg')), filename: 'colin-lloyd-5TGwSC4dHOU-unsplash.jpg')
event4.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'nick-kane-NMx_9N2QC5o-unsplash.jpg')), filename: 'nick-kane-NMx_9N2QC5o-unsplash.jpg')
