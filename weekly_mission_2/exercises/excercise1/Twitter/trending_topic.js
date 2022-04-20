const tredingTopic ={
    tredingTopicName: '#trendingTopic',
    Numbertweets: 100,
    NumbertweetsPerPage: 10,
    getTweets: function(){
        return `${this.tredingTopicName} has ${this.Numbertweets} tweets`
    }

}