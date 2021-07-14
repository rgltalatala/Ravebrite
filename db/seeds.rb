# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

# Users 

demo = User.create({email: "demo@user.com", password: "demouser", first_name: "Demo", last_name: "User"})
raph = User.create({email: "raph@ex.com", password: "123456", first_name: "Raph", last_name: "Talatala"})
ali = User.create({email: "ali@ex.com", password: "123456", first_name: "Ali", last_name: "Ahmed"})
chase = User.create({email: "chase@ex.com", password: "123456", first_name: "Chase", last_name: "Van Haselen"})
jack = User.create({email: "jack@ex.com", password: "123456", first_name: "Jack", last_name: "Liu"})

# Events

# Genres


event1 = Event.create({
    host_id: raph.id,
    title: "Raph's Rave",
    description: "A night of dancing and fun with Raph's favorite house hits!",
    location: "Brooklyn Mirage 140 Stewart Ave, Brooklyn, NY 11237",
    genre: Event.genres[0], # replace this with genre_id when I create genre class? 
    start_date: "2021-7-9",
    end_date: "2021-7-10",
    start_time: "8:00 PM",
    end_time: "4:00 AM",
})

event2 = Event.create({
    host_id: ali.id,
    title: "Country Nights",
    description: "Ali Ahmed performing his own renditions of Kacey Musgraves' greatest tracks.",
    location: "Skinny Dennis 152 Metropolitan Ave, Brooklyn, NY 11211",
    genre: Event.genres[4],
    start_date: "2021-7-11",
    end_date: "2021-7-11",
    start_time: "6:00 PM",
    end_time: "8:00 PM",
})

event3 = Event.create({
    host_id: chase.id,
    title: "CVH at MSG",
    description: "For one night only, Chase Van Haselen will perform his debut album at Madison Square Garden!",
    location: "Madison Square Garden 4 Pennsylvania Plaza, New York, NY 10001",
    genre: Event.genres[7],
    start_date: "2021-7-17",
    end_date: "2021-7-17",
    start_time: "8:00 PM",
    end_time: "11:00 PM",
})

