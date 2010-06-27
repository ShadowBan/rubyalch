### SETUP
DataMapper.setup(:default, ENV['DATABASE_URL'] || 'mysql://localhost/rubyalchemist')

### MODELS

#class Biturl
#  include DataMapper::Resource
##  
#  property :id, Serial
#  property :created_at, DateTime, :required=>true,:unique=>true
#  property :tix, String, :required=>true,:unique=>true
#  property :url, Text
#  
#  def self.gen_ticket(size=5)
#    begin
#      ticket = (1..size).map{([*('a'..'z')]+[*('A'..'Z')]+[*(1..9)].map{|n|n.to_s}).instance_eval{self[rand(self.size)]}}.join
#      test = Biturl.first(:tix=>ticket)
#      return ticket if test.nil? && !ticket.nil?
#    end while false
#  end
#end

DataMapper.finalize

#DataMapper.auto_migrate!
DataMapper.auto_upgrade!
