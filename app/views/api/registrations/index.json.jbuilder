@registrations.each do |registration|
    json.set! registration.id do
        json.extract! registration, :id, :user_id, :event_id
        json.extract! registration.event, :title, :description, :start_date, :start_time
    end
end