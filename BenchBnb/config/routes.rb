Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :sessions, only:[:create, :destroy]
    resources :users, only:[:create]
  end

  root "static_pages#root"
end
