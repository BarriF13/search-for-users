//-5 making a class to send it to app.js

class Github {
  constructor() {
    //-6 We got them from github dev 
    this.client_id = '84dc4e3ff984f02b82fb';
    this.client_secret = '4ac6c9e8c0c349066df491a8a282bb0d3327d04e';
    // to getting specific repos we add some properties here
    this.repos_count = 5;
    this.repos_sort = 'created : asc';
  }
  //-7 we are making get request with async
  //- 8 we are making two requests -one for user one for repo
  async getUser(user) {
    //-user
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //-repo
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();
    //- we use promise to get object faster
    // repos: repos is the same as just say repos
    return {
      profile,
      repos
    }
  }
}