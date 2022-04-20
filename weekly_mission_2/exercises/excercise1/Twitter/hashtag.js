const hashtag ={
    hashtag: '#hashtag',
    tweet: 'this is a tweet',
    tweetWithHashtag: function(){
        return this.hashtag + ' ' + this.tweet;
    }
}