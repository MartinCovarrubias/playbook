const user = {
    user: "martin", 
    username: "marCova", 
    bio: "...", 
    age: 24,
    location: "...",
    email: "...",
    getGeneralUserInfo: function() {
        return `${this.user} is ${this.age} years old and lives in ${this.location}.`;
    }

}