// Array

// While mapping we not have to specify the type it extract from the array.

const heroes = ["batman", "ironman", "deadpool"];
//  Here it automatically set to string
heroes.map(hero => {
    return `hero is ${hero}`;
});

const scores = [70, 80, 90, 86, 78];
// Here it automatically set to number.
scores.map(score => {
    return `hero is ${score}`;
});
