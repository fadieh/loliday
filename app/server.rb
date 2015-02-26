require 'sinatra'

set :public_folder, Proc.new { File.join(root, '..', 'public') }

set :show_exceptions, false

	get '/' do
		erb :index
	end