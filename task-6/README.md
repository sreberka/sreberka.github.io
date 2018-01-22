# Aggregating Airlines Collection

1.db.airlines.aggregate( [ { $group : { _id: "$class", total: { $sum: 1}}}, { $project: { _id: 0, class: "$_id", total: "$total"}} ] )<br />
  Result: <br />
  { "class" : "F", "total" : 140343 }<br />
  { "class" : "L", "total" : 23123 }<br />
  { "class" : "P", "total" : 5683 }<br />
  { "class" : "G", "total" : 17499 }<br />

2.db.airlines.aggregate([<br />
      {$match: { destCountry: {$ne: "United States"}}},<br />
      {$group: {_id: "$destCity", avgPassengers: {$avg: "$passengers"}}},<br />
      {$project: {_id: 0, avgPassengers: "$avgPassengers", city: "$_id"}},<br />
      {$sort: {avgPassengers: -1}}<br />
      ])<br />
  Result: <br />
  { "avgPassengers" : 8052.380952380952, "city" : "Abu Dhabi, United Arab Emirates" }<br />
  { "avgPassengers" : 7176.596638655462, "city" : "Dubai, United Arab Emirates" }<br />
  { "avgPassengers" : 7103.333333333333, "city" : "Guangzhou, China" }<br />

3.db.airlines.aggregate([<br />
      {$match: { destCountry: "Latvia"}},<br />
      {$group: {_id: "$destCountry", carriers: {$addToSet: "$carrier"}}}<br />
      ])<br />
  Result: { "_id" : "Latvia", "carriers" : [ "Uzbekistan Airways", "Blue Jet SP Z o o", "JetClub AG" ] }<br />

4.db.airlines.aggregate([<br />
       {$match: { originCountry: "United States", destCountry: {$in: ["Greece", "Italy", "Spain"]}}},<br />
       {$group: {_id: "$carrier", total: {$sum: "$passengers"}}},<br />
       {$sort: {total: -1}},<br />
       {$limit: 10},<br />
       {$skip: 3}<br />
    ])<br />
  Result: <br />
       { "_id" : "Compagnia Aerea Italiana", "total" : 280256 }<br />
       { "_id" : "United Air Lines Inc.", "total" : 229936 }<br />
       { "_id" : "Emirates", "total" : 100903 }<br />
       { "_id" : "Air Europa", "total" : 94968 }<br />
       { "_id" : "Meridiana S.p.A", "total" : 20308 }<br />
       { "_id" : "Norwegian Air Shuttle ASA", "total" : 13344 }<br />
       { "_id" : "VistaJet Limited", "total" : 183 }<br />

5.db.airlines.aggregate([<br />
      {$match: { originCountry: "United States"}},<br />
      {$group: {_id: {state: "$destState", city: "$destCity"}, passengers: {$sum: "$passengers"}}},<br />
      {$sort: {passengers: -1}},<br />
      {$limit: 5},<br />
      {$sort: {_id: 1}},<br />
      {$project: {_id:0, totalPassengers: "$passengers", location: "$_id"}}<br />
    ])<br />
  Result: <br />
       { "totalPassengers" : 16682161, "location" : { "state" : "California", "city" : "Los Angeles, CA" } }<br />
       { "totalPassengers" : 16393166, "location" : { "state" : "Colorado", "city" : "Denver, CO" } }<br />
       { "totalPassengers" : 25929030, "location" : { "state" : "Georgia", "city" : "Atlanta, GA" } }<br />
       { "totalPassengers" : 24259929, "location" : { "state" : "Illinois", "city" : "Chicago, IL" } }<br />
       { "totalPassengers" : 15928987, "location" : { "state" : "Texas", "city" : "Dallas/Fort Worth, TX" } }<br />






