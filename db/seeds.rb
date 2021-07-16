# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all
Registration.destroy_all

# Users 

demo = User.create({email: "demo@user.com", password: "demouser", first_name: "Demo", last_name: "User"})
raph = User.create({email: "raph@ex.com", password: "123456", first_name: "Raph", last_name: "Talatala"})
ali = User.create({email: "ali@ex.com", password: "123456", first_name: "Ali", last_name: "Ahmed"})
chase = User.create({email: "chase@ex.com", password: "123456", first_name: "Chase", last_name: "Van Haselen"})
jack = User.create({email: "jack@ex.com", password: "123456", first_name: "Jack", last_name: "Liu"})

# Events

event1 = Event.create({
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

event2 = Event.create({
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

event3 = Event.create({
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

event4 = Event.create({
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

ticket1 = Registration.create({
    user_id: 2,
    event_id: 4
})

ticket2 = Registration.create({
    user_id: 3,
    event_id: 4
})

ticket2 = Registration.create({
    user_id: 4,
    event_id: 4
})

ticket3 = Registration.create({
    user_id: 5,
    event_id: 4
})

ticket4 = Registration.create({
    user_id: 2,
    event_id: 4
})

ticket5 = Registration.create({
    user_id: 1,
    event_id: 1
})

ticket6 = Registration.create({
    user_id: 5,
    event_id: 3
})

ticket7 = Registration.create({
    user_id: 4,
    event_id: 3
})