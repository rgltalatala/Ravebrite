@events.each do |event|
    json.set! event.id do 
        json.partial! event, event: @event
    end
end

# filter by genre here
# json.genres(Event.genres)