#rubyalchemist.rb
require 'rubygems'
require 'sinatra'
require "sinatra/reloader" if development?
require 'dm-core'
require 'dm-migrations'
require 'haml'
require 'classes/partial'

### Helpers
helpers Sinatra::Partials

### Models
load 'classes/rss_reader.rb'
load 'classes/models.rb'

### Controler
:layout
#Home Page
get '/' do
  @twitter = RssReader.new("http://twitter.com/statuses/user_timeline/131731693.rss",5)
  @twitter.linkify_items if @twitter.status
  haml :index
end


