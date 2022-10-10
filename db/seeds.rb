# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

john = User.create(firstname: "john", lastname: "doe", email: "johndoe@gmail.com", password_digest: "password")
jane = User.create(firstname: "jane", lastname: "doe", email: "janedoe@gmail.com", password_digest: "password")
bill = User.create(firstname: "bill", lastname: "burr", email: "billburr@gmail.com", password_digest: "password")

bedsitter = Property.create(property_name:"faraja apartments", price:12500, location:"ruiru")
singleroom = Property.create(property_name:"joska singlerooms", price:4500, location:"kawangware")
one_bedroom = Property.create(property_name:"highland apartments", price:22500, location:"kilimani")

purchase_one = Purchase.create(user_id:john.id, property_id:bedsitter.id, name: bedsitter.property_name)
purchase_two = Purchase.create(user_id:jane.id, property_id:one_bedroom.id, name: one_bedroom.property_name)
purchase_three = Purchase.create(user_id:bill.id, property_id:singleroom.id, name: singleroom.property_name)