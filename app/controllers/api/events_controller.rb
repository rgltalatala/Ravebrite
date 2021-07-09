class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        render :index
    end

    def show
        @event = Event.find_by(id: params[:id])
    end
    
    def create
      @event = Event.new(event_params)
  
      if @event.save
        render :show
      else
        render json: @event.errors.full_messages, status: 422
      end
    end
    
    def edit
        @event = Event.find_by(id: params[:id])
        render :edit 
    end

    def update
        if @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: :unprocessable_entity
        end
    end
    
    def destroy
        @event = Event.find(params[:id])

        if @event.destroy
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end
  
    private
  
    def event_params
      params.require(:event).permit(:title, :description, :location, :category, :start_date, :end_date, :start_time, :end_time, :host_id)
    end
  end
  