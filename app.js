// Search input
//-10 initialize github
const github = new Github;
//-1
const searchUser = document.getElementById('searchUser');


//-2 Search input  event listener
searchUser.addEventListener( 'keyup', (e) => {
 //-3 Get input text in a var
  const userText = e.target.value;
//-4 Check if user enter a text 
  if(userText !== ''){
//-9
    // Make http call
    github.getUser(userText)
    .then(data =>{
      console.log(data);
    })
  } else {


  }
})