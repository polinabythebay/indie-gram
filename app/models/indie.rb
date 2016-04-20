class Indie < ActiveRecord::Base

  mount_uploader :photo, PhotoUploader
end
