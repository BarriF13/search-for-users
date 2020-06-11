// Search input
//-10 initialize github
const github = new Github;
//-15 init UI
  const ui = new UI;
//-1
const searchUser = document.getElementById('searchUser');


//-2 Search input  event listener
searchUser.addEventListener('keyup', (e) => {
  //-3 Get input text in a var
  const userText = e.target.value;
  //-4 Check if user enter a text 
  if (userText !== '') {
    //-9
    // Make http call
    github.getUser(userText)
      .then(data => {
        //-11 console.log(data);
        if (data.profile.message === 'Not Found') {
          //-12 Show alert -20 takes a msg and a class
          ui.showAlert('User not found', 'alert alert-danger');

        } else {
          //-13 show profile --comes from ui.js
          ui.showProfile(data.profile);//-16 data.profile is giving us a user
          ui.showRepos(data.repos);
        }
      })
  } else {
    //-18 Clear profile-- we call it from ui.js
    ui.clearProfile();
  }
});