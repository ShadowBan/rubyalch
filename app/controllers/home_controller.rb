class HomeController < ApplicationController
  def index
    @twitter = RssReader.new("http://twitter.com/statuses/user_timeline/131731693.rss",5)
    @twitter.linkify_items if @twitter.status
  end
end
