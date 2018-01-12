# Task 3

1.db.restaurants.find({'borough' : 'Queens', 'cuisine' : 'Chinese'}).count()
  Result: 728
2.db.restaurants.find(null,{restaurant_id:1, _id:0}).sort({'grades.score': -1}).limit(1)
  Result: 40372466
3.db.restaurants.updateMany({'borough' : 'Manhattan'}, {$push: {grades : { grade: "A", score: 7, date: ISODate()}}})
4.db.restaurants.find({'grades.8.score' : {$lt : 7}}, {name:1, _id:0})
  Result: { "name" : "Silver Krust West Indian Restaurant" }
          { "name" : "Pure Food" }
5.db.restaurants.find({$and:[{'cuisine' : 'Seafood'},{grades: {$elemMatch: {grade: "B", date: {$gte : ISODate("2014-02-01T00:00:00Z"),  $lte : ISODate("2014-03-01T00:00:00Z")}}}}]}, {borough:1, _id:1})
  Result:
  { "_id" : ObjectId("5a5759ae4e35d1925ff54fa4"), "borough" : "Bronx" }
  { "_id" : ObjectId("5a5759ae4e35d1925ff5521f"), "borough" : "Manhattan" }
