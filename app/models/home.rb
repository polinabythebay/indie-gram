class Home < ActiveRecord::Base

  mount_uploader :photo, PhotoUploader
end
