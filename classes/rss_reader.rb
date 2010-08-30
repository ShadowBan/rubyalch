require 'nokogiri'
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
		   puts "Here"
		   doc = Nokogiri::HTML(open(self.source))
        
		   self.title = doc.xpath('/rss/channel/title')
		   
		   #self.link = doc.xpath('/rss/channel/link')
		   #self.description = rss.channel.description
		   #self.date = rss.channel.date
		   #self.items = limit == 0 ? rss.items : rss.items[0..(limit-1)]
		   #self.linkify_items
       self.status = true
     rescue
       self.status = false
     end
  end
  
  private
  
    def linkify_items
      self.items.each do |item|
        item.description.gsub!(/(http.*(  ||$))/,'<a href="\1">\1</a>')
      end
    end

end


