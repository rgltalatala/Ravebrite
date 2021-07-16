class Api::RegistrationsController < ApplicationController
    before_action :require_logged_in, only: [:index, :create, :destroy]

    def index
        # debugger
        @registrations = User.find_by(id: params[:user_id]).registrations
        # debugger
        render :index
    end
    

    def create
        @registration = Registration.new(registration_params)
        
        if @registration.save
            @event = Event.find_by(id: registration_params[:event_id])
            render 'api/events/show' # change this to user show page
        else
            render json: ["Can't complete purchase"], status: 422
        end
    end

    def destroy
        @registration = Registration.find_by(id: params[:id])

        if @registration && @registration.destroy
            @registrations = current_user.registrations
            render :index
        else
            render json: @registration.errors.full_messages, status: 422
        end
    end

    private

    def registration_params
        params.require(:registration).permit(:user_id, :event_id)
    end
end