@events.each do |event|
    json.set! event.id do 
        json.partial! event, event: @event
        # json.photoUrl url_for(event.photo)

        event.bookmarks.each do |bookmark|
            json.set! bookmark.user_id do
                json.extract! bookmark, :id, :user_id, :event_id
            end
        end
    end
end

# filter by genre here
# json.genres(Event.genres)