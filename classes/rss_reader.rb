require 'rss/1.0'
require 'rss/2.0'
require 'open-uri'
   
class RssReader
  attr_accessor :title, :link, :description, :date, :items, :source, :status

  def initialize(source, limit=0)
      @source = source
      self.consume(limit) unless source.nil?
  end

  def consume(limit=0,options={})
     begin
		   content=""
		   open(self.source){|s| content = s.read}
		   rss = RSS::Parser.parse(content, false)
		   
		   self.title = rss.channel.title
		   self.link = rss.channel.link
		   self.description = rss.channel.description
		   self.date = rss.channel.date
		   self.items = limit == 0 ? rss.items : rss.items[0..(limit-1)]
       self.status = true
     rescue
       self.status = false
     end
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


