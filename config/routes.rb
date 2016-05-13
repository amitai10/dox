Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'documents#index'

  get '/docs', to: 'documents#docs'
  post '/docs', to: 'documents#create'
  put '/docs', to: 'documents#edit'

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
end
