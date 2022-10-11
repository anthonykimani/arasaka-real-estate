# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding...please wait"

john = User.create(first_name: "john", last_name: "doe", email: "johndoe@gmail.com", password_digest: "password")
jane = User.create(first_name: "jane", last_name: "doe", email: "janedoe@gmail.com", password_digest: "password")
bill = User.create(first_name: "bill", last_name: "burr", email: "billburr@gmail.com", password_digest: "password")

bedsitter = Property.create(property_type:"bedsitter", property_name:"faraja apartments", price:12500, location:"ruiru", image:"https://i.postimg.cc/fb4Kz16V/bedroom.jpg", property_description:"A quiet neighborhood in the surburbans outside the city")
singleroom = Property.create(property_type:"singleroom", property_name:"joska singlerooms", price:4500, location:"kawangware", image:"https://i.postimg.cc/HnW3G5F3/couch.jpg", property_description:"Comfort is a must in this deluxe apartment with spacious rooms")
one_bedroom = Property.create(property_type:"one_bedroom", property_name:"highland apartments", price:22500, location:"kilimani", image:"https://i.postimg.cc/t496BpQt/roam-in-color-Rry-Fk4n-v-Os-unsplash.jpg", property_description:"A fully decked out dining room for those family moments")
two_bedroom = Property.create(property_type:"two_bedroom", property_name:"Dove apartments", price:32500, location:"kitui", image:"https://i.postimg.cc/TPwDX0PK/studio.jpg", property_description:"The Perfect Chill spot for you and your friends ")
doubleroom = Property.create(property_type:"doubleroom", property_name:"oscar singlerooms", price:6500, location:"utawala", image:"https://i.postimg.cc/2STZJMCp/sitting-room.jpg", property_description:"A Customized experience dealing with the rarest Decor")
mansion = Property.create(property_type:"apartment", property_name:"Lux apartments", price:42500, location:"kileleshwa", image:"https://i.postimg.cc/pr9hnLjR/highrise.jpg", property_description:"A House in the Sky overlooking the Horizon is the morning you need")


purchase_one = Purchase.create(user_id:john.id, property_id:bedsitter.id, name: bedsitter.property_name)
purchase_two = Purchase.create(user_id:jane.id, property_id:one_bedroom.id, name: one_bedroom.property_name)
purchase_three = Purchase.create(user_id:bill.id, property_id:singleroom.id, name: singleroom.property_name)


# https://i.postimg.cc/SxYdpmt0/apartments.jpg
# https://i.postimg.cc/fb4Kz16V/bedroom.jpg
# https://i.postimg.cc/3r9nXSDq/burners.jpg
# https://i.postimg.cc/mrMm7TQ3/chimney.jpg
# https://i.postimg.cc/bYM2f1XJ/contruction.jpg
# https://i.postimg.cc/HnW3G5F3/couch.jpg
# https://i.postimg.cc/pr9hnLjR/highrise.jpg
# https://i.postimg.cc/65mcS8cL/highrise-contruction.jpg
# https://i.postimg.cc/3Jv08W7Z/home-street.jpg
# https://i.postimg.cc/htRzfgtR/mansion.jpg
# https://i.postimg.cc/R0MWLRtP/minimalist.jpg
# https://i.postimg.cc/t496BpQt/roam-in-color-Rry-Fk4n-v-Os-unsplash.jpg
# https://i.postimg.cc/vm3cqVLG/roberto-nickson-so3wg-JLw-Dxo-unsplash.jpg
# https://i.postimg.cc/2STZJMCp/sitting-room.jpg
# https://i.postimg.cc/TPwDX0PK/studio.jpg
# https://i.postimg.cc/tC3Pd7f4/unknown.jpg


puts "Seeding 100% Complete"