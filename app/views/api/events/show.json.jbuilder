json.extract! @event, :id, :title, :description, :location, :genre, :start_date, :end_date, :start_time, :end_time, :host_id

json.extract! @GENRES
#want key of user/registrations/bookmarks to show associated data