json.extract! @event, :id, :title, :description, :location, :genre, :start_date, :end_date, :start_time, :end_time, :host_id
json.photoUrl url_for(@event.photo)


json.bookmarks do
    @event.bookmarks.each do |bookmark|
        json.set! bookmark.user_id do
            json.extract! bookmark, :id, :user_id, :event_id
        end
    end
end
# json.genres(Event.genres)

#want key of user/registrations/bookmarks to show associated data