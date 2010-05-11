require 'rss/1.0'
require 'rss/2.0'
require 'open-uri'
   
class RssReader
  attr_accessor :title, :link, :description, :date, :items, :source

  def initialize(source)
      @source = source
      self.consume() unless source.nil?
  end

  def consume(options={})
     content=""
     open(self.source){|s| content = s.read}
     rss = RSS::Parser.parse(content, false)
     
     self.title = rss.channel.title
     self.link = rss.channel.link
     self.description = rss.channel.description
     self.date = rss.channel.date
     self.items = rss.items
  end
  
  def linkify_items()
    self.items.each do |item|
      item.description.gsub!(/(http.*(  ||$))/,'<a href="\1">\1</a>')
    end
  end
  
  def linkify_item(item)
    item.description.gsub!(/(http.*(  ||$))/,'<a href="\1">\1</a>')
  end

end


