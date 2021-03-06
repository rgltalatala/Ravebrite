Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resources :registrations, only: [:index]
      resources :bookmarks, only: [:index]
      # resources :events, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy] do
      resources :registrations, only: [:create]
      resources :bookmarks, only: [:create]
    end

    get "/users/:user_id/events", to: "events#hosted_events"
    get "/users/:user_id/bookmarks", to: "events#bookmarked_events"

    resources :registrations, only: [:destroy]
    resources :bookmarks, only: [:destroy]
    resources :genres, only: [:show]
  end

end
