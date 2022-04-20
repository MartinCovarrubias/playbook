const biography ={

    name: "John",
    age: 30,
    location: "Miami",
    email: "",
    numbersOfFriends: 10,
    numberOfPhotos: 100,
    getGeneralUserInfo: function(){
        return `${this.name} is ${this.age} years old and lives in ${this.location}.`;
    }
}