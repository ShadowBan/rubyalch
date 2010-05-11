class HomeController < ApplicationController
  def index
    @twitter = RssReader.new("http://twitter.com/statuses/user_timeline/131731693.rss")
    @twitter.linkify_items
  end
end
