Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      get 'boards/most_recent'
      post 'boards/create'
      get 'boards/show/:id', to: 'boards#show'
      resources :boards do
        collection do 
          get 'all', to: 'boards#all'
        end
      end
    end
  end
  

  get '*path', to: 'homepage#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
