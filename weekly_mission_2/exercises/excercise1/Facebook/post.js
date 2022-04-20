const post ={
    CreatedAt : "19/07/2020",
    Likes : 0,
    NumberOfComments :2 ,
    NumberOfShares : 0,
    getGeneralInfo : function(){
        return `Created at ${this.CreatedAt} and has ${this.Likes} likes, ${this.NumberOfComments} comments and ${this.NumberOfShares} shares`;
    }

}