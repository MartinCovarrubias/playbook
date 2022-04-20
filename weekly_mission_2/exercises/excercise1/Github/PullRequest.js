const pullRequest = {
    title: 'My awesome pull request',
    branchName: 'master',
    dateCreated: '2020-05-01',
    status: 'open',
    repositoryNameAssociated: 'My repository',
    getStatus: function(){
        return `This pull request ${this.title} is ${this.status}`
    },
    getGeneralInfo: function(){
        return `This pull request ${this.title} was created by ${this.author}`
    }
}