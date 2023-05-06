////////////////////////////////
// Rank you comfort with the following material on a scale of 0 - 5:
////////////////////////////////
4

////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i < 21; i++){
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i < 201; i++){
    if (i % 2 == 0){
    console.log(i)}
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i < 201; i++){
    if (i % 3 == 0){
        if (i % 5 == 0){
            console.log("Fizzbuzz")
        }
        else {
            console.log("Fizz")
        }
        }
    else if (i % 5 == 0){
    console.log("Buzz")
    }

}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1.
plantee[2] = 5001

//2.
wolfy[3] = "Gotham City"

//3.

dart[3] += ", Hawkins"
console.log(dart)
wolfy[0] = "Gameboy"
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
//.1
const members = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (turtle in members){
    members[turtle] = members[turtle].toUpperCase()
}
console.log(members)
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
for (item in favMovies){
    if (favMovies[item] === "Titanic"){
        console.log(item)
    }
}
//.1
favMovies.sort()
console.log(favMovies,"< question1")
//.2
favMovies.pop()
//.3
favMovies.push("Guardians of the Galaxy")
//.4
favMovies.reverse()
//.5
favMovies.shift()
console.log(favMovies,"< question5")
//6
favMovies.unshift()
console.log(favMovies,"< question6")
// It doesnt do anything unless something is passed in

//.7
let index = 0
for (item in favMovies){
    if (favMovies[item] === "Django Unchained"){
        index = item
    }
}
favMovies.splice(index,1,"Avatar")
console.log(favMovies)
//.8 

let newLen = favMovies.length / 2

//.9
let newSlice = favMovies.slice(0,newLen)
console.log(newSlice,"< new array")

//.10
for (item in newSlice){
    if (newSlice[item] ===  "Fast and Furious"){
        console.log(item)
    }  
}

function indexFinder(search){
    return search == "Fast and Furious";
}

console.log(newSlice.findIndex(indexFinder))

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
//.1
whereIsWaldo.splice(1,1)
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo[2][1][1])


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


