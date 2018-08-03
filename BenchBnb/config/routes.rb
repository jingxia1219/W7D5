Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only:[:create, :destroy]
    resources :user, only:[:create]
  end

  root "static_pages#root"
end
