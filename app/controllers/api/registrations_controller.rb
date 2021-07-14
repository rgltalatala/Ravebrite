class Api::RegistrationsController < ApplicationController
    before_action :require_logged_in, only: [:index, :create, :destroy]

    def index
        @registrations = User.find_by(id: params[:userId]).registrations

        render :index
    end
    
    def create
        @event = Event.find_by(id: params[:event_id])

    end

    def destroy
        @registration = current_user.registrations.find_by(id: params[:id])

        if @registration.destroy
            render :show
        else
            render json: @registration.errors.full_messages, status: 422
        end
    end
end