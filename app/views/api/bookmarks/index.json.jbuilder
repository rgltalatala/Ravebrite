# @bookmarks.each do |bookmark|
#     json.set! bookmark.id do
#         json.extract! bookmark, :id, :user_id, :event_id
#         json.extract! bookmark.event, :title, :description, :start_date, :start_time
#     end
# end

    current_user.bookmarks.each do |bookmark|
        json.set! bookmark.id do
            json.extract! bookmark, :id, :user_id, :event_id
            json.extract! bookmark.event, :title, :description, :start_date, :start_time
        end
    end