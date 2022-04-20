const user ={
    name: 'John',
    age: 30,
    location: 'Miami',
    email: 'example@gmail.com',
    numbersOfFriends: 10,
    numberOfPhotos: 100,
    getGeneralUserInfo: function(){
        return `${this.name} is ${this.age} years old and lives in ${this.location}.`;
    },
    getNumberOfFriends: function(){
        return `${this.name} has ${this.numbersOfFriends} friends.`;
    }       
}