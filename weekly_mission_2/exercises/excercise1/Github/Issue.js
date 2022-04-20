const issue = {
    title : 'My title',
    repositoryNameAssociated: 'My repository',
    status: 'open',
    numberOfComments: 10,
    labels: ['bug', 'enhancement'],
    author: 'MartinCovarrubias',
    dateCreated: '2020-05-01',
    lastUpdate: '2020-05-01',
    getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.author}`
    },
    getStatus: function(){
        return `This issue ${this.title} is ${this.status}`
    }
    

}