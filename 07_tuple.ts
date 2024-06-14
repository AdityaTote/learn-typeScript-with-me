//  Tuples

// Tuples restrict to follow the sequence of data type pass while delcareing the tuple. 
let oldUser: [ string, number ] = [ "", 4 ];


type User1 = [ number, string ]
let newUser: User1 = [5,""]
//  it follows all opertion of array
newUser[1] = ""
newUser.push() 
// but it does not follow order or sequence f data type passed . 
//  So be carefull.
