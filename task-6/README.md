# Aggregating Airlines Collection

1.db.airlines.aggregate( [ { $group : { _id: "$class", total: { $sum: 1}}}, { $project: { _id: 0, class: "$_id", total: "$total"}} ] )<br />
  Result: <br />
  { "class" : "F", "total" : 140343 }<br />
  { "class" : "L", "total" : 23123 }<br />
  { "class" : "P", "total" : 5683 }<br />
  { "class" : "G", "total" : 17499 }<br />


