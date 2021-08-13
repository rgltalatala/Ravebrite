class Api::BookmarksController < ApplicationController
    before_action :require_logged_in, only: [:index, :create, :destroy]

    def index
        @bookmarks = current_user.bookmarks
        render :index
    end
    

    def create
        @bookmark = Bookmark.new(bookmark_params)
        
        if @bookmark.save
            @event = Event.find_by(id: bookmark_params[:event_id])
            render 'api/events/show'
        else
            render json: ["Bookmark doesn't exist"], status: 422
        end
    end

    def destroy
        @bookmark = Bookmark.find_by(id: params[:id])

        if @bookmark && @bookmark.destroy
            @bookmarks = current_user.bookmarks
            render :index
        else
            render json: @bookmark.errors.full_messages, status: 422
        end
    end

    private

    def bookmark_params
        params.require(:bookmark).permit(:user_id, :event_id)
    end
end