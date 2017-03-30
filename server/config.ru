#require sinatra/base
require 'sinatra/base'

#require controllers
require './controllers/ApplicationController'
require './controllers/CharacterController'

#require models
require './models/CharacterModel'

#map routes
map('/'){run ApplicationController}
map('/characters'){run CharacterController}

