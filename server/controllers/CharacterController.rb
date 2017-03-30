class CharacterController < ApplicationController

	options '*' do
		response.headers["Allow"]  = "HEAD,GET,POST,PATCH,PUT,DELETE,OPTIONS"

		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    	response['Access-Control-Allow-Origin'] = '*'

    	"cool"

	end	

	get '/' do
		response['Access-Control-Allow-Origin'] = '*'

		content_type :json    

		@characters = Character.all  					# return list of all items
		@characters.to_json								# in json format
	end
	
	get '/:id' do
		content_type :json

		id = params[:id]								# the parameter we are using to searh is id

		@character = Character.find(id)					# find character using id parameter
		@characters.to_json
	end

	post '/' do
		response['Access-Control-Allow-Origin'] = '*'
		
		content_type :json

		puts JSON.parse(request.body.read.to_s)						# output the new json object

		@character = Character.new									# define new char as var so it can be saved
		@character.name = JSON.parse(request.body.read.to_s)		# turn key value into json object
		@character.cartoon = JSON.parse(request.body.read.to_s)		# turn key value into json object
		@character.saved											# save character
		@characters = Character.all
		@characters.to_json
	end

	patch '/:id' do
		content_type :json

		id = params[:id]

		@character = Character.find(id)
		@character.name = params[:name]								# pass parameter name to be patched
		@character.cartoon = params[:cartoon]						# pass parameter cartoon to be patched
		@character.saved											
		@characters = Character.all
		@characters.to_json	
		
	end

	delete '/:id' do
		content_type :json

		id = params[:id]

		@character = Character.find(id)								# find the character by id parameter
		@character.destroy											# delete the character
		@characters = Character.all
		@characters.to_json
	end

end

