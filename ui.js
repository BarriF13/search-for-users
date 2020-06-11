///-14 we are making a visibility in dom
class UI {
  constructor() {
    this.profile = document.getElementById('profile');//== <div id="profile"></div>

  }
  showProfile(user) {
    //-17 console.log(user);-- we are making template literal for user now
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-5">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>

            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>

            <span class="badge badge-success">Followers: ${user.public_followers}</span>

            <span class="badge badge-info">Following: ${user.public_following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>   
    <h3 class="page-heading mb-3"> Latest Repos</h3>
    <div id="repos"></div>
  `;
  }
}