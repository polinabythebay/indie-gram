class Post < ActiveRecord::Base
  has_many :comments

  #simple out of the box way to 
  #format json output
  #you can also use jbuilder, rabl-rails, and 
  #active model serializers
  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end

