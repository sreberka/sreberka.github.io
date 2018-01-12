# Task 3

1.db.restaurants.find({'borough' : 'Queens', 'cuisine' : 'Chinese'}).count()<br />
  Result: 728

2.db.restaurants.find(null,{restaurant_id:1, _id:0}).sort({'grades.score': -1}).limit(1)<br />
  Result: 40372466

3.db.restaurants.updateMany({'borough' : 'Manhattan'}, {$push: {grades : { grade: "A", score: 7, date: ISODate()}}})

4.db.restaurants.find({'grades.8.score' : {$lt : 7}}, {name:1, _id:0})<br />
  Result: { "name" : "Silver Krust West Indian Restaurant" }<br />
          { "name" : "Pure Food" }

5.db.restaurants.find({$and:[{'cuisine' : 'Seafood'},{grades: {$elemMatch: {grade: "B", date: {$gte : ISODate("2014-02-01T00:00:00Z"),  $lte : ISODate("2014-03-01T00:00:00Z")}}}}]}, {borough:1, _id:1})<br />
  Result:<br />
  { "_id" : ObjectId("5a5759ae4e35d1925ff54fa4"), "borough" : "Bronx" }<br />
  { "_id" : ObjectId("5a5759ae4e35d1925ff5521f"), "borough" : "Manhattan" }


# Task 3

1.db.restaurants.createIndex({ 'name': 1 })

2.db.restaurants.dropIndex('name_1')

3.db.restaurants.createIndex({ restaurant_id:1,borough:1 })

4.db.restaurants.createIndex({ cuisine: 1 }, { partialFilterExpression: { borough: 'Staten Island' }})

5.db.restaurants.createIndex({ name: 1 }, { partialFilterExpression: { 'grades.8.score': {$lt : 7}}})