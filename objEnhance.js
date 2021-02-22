const createInstructor = (firstName, lastName) =>({firstName,lastName});

const favoriteNumber = 42;
const instructor = {
    firstName:"Colst",
    [favoriteNumber]:'That"s my favorite number'
}

var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  const createAnimal = (spieces,verb,noise)=>({
      spieces,
    [verb](){
        console.log(noise);
    }
  });