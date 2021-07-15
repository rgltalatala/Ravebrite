@registrations.each do |registration|
    json.set! registration.id do
        json.extract! registration, :user_id, :event_id
    end
end