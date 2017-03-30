#require sinatra/base
require 'sinatra/base'

#require controllers
require 'ApplicationController'
require 'CharacterController'

#require models
require './models/CharacterModel'

#map routes
map('/'){run ApplicationController}
map('/characters'){run CharacterController}

