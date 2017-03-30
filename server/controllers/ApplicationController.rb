class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require()

	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'cartoonchars'
	)

	not_found do
		"Not Found"	
	end
end	