/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let api = 'https://api.github.com/users/';

const followersArray = ['cybersck', 'ajablanco', 'juiceboxh3ro', 'neel7777', 'vanesa-tamu', 'jscheuble'];


followersArray.forEach(user => {
axios.get(api+user).then(response => {
  document.body.appendChild(populate(response.data));
}).catch(err => {
  console.log(err);
});
})


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


/*Object Format:

response {
  data {
    avatar_url: '';
    bio: '';
    blog: '';

    followers: int; | number of followers
    followers_url: '';  | link to followers page
    following: int; | number of following
    following_url: ''; | link to following page
    login: ''; | username
    name: ''; | name of user
    location: ''; | location 
    url: ''; | profile link

  }
}

*/
function populate(obj) {

  //parse obj for null values and convert numbers to strings for display
for (let key in obj) {
  if (obj[key] == null | undefined) {
    obj[key] = 'User has not provided a '+key+'.';
  }
  if (typeof obj[key] == Number) {
    obj[key] = obj[key].toString();
  }
}
let baseURL = 'https://github.com/'+obj.login;
//create component model
  const 
   card = document.createElement('div'), //componenet div
   profileImg = document.createElement('img'), //img
   cardInfo = document.createElement('div'), //subcontainer
   cardInfo_name = document.createElement('h3'), //name | string
   cardInfo_username = document.createElement('p'), //username | string
   cardInfo_location = document.createElement('p'), //location | string
   cardInfo_profile = document.createElement('p'), //profile text | string
   cardInfo_profile_link = document.createElement('a'), //profile link | string
   cardInfo_followers = document.createElement('p'), // followed by | int to string
   cardInfo_followers_link = document.createElement('a'), //link to followers | int
   cardInfo_following = document.createElement('p'), //following | int to string
   cardInfo_following_link = document.createElement('a'),
   cardInfo_bio = document.createElement('p'); //user bio | string
   

   //assign values
  profileImg.setAttribute('src', obj.avatar_url);
  cardInfo_name.textContent = obj.name;
  cardInfo_username.textContent = obj.login;
  cardInfo_location.textContent = obj.location;
  cardInfo_profile.textContent = 'Profile';
  cardInfo_profile_link.setAttribute('href', baseURL);
  cardInfo_followers_link.setAttribute('href', baseURL+'/followers');
  cardInfo_followers_link.textContent = 'Followers: '+obj.followers;
  cardInfo_following_link.setAttribute('href', baseURL+'/following');
  cardInfo_following_link.innerText = 'Following: '+obj.following;
  cardInfo_bio.textContent = 'Bio: ' + obj.bio;


  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardInfo_name.classList.add('name');
  cardInfo_username.classList.add('username');

  card.appendChild(profileImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardInfo_name);
  cardInfo.appendChild(cardInfo_username);
  cardInfo.appendChild(cardInfo_location);
  cardInfo.appendChild(cardInfo_profile_link);
    cardInfo_profile_link.appendChild(cardInfo_profile);
  cardInfo.appendChild(cardInfo_followers);
    cardInfo_followers.appendChild(cardInfo_followers_link);
  cardInfo.appendChild(cardInfo_following);
    cardInfo_following.appendChild(cardInfo_following_link);
  cardInfo.appendChild(cardInfo_bio);

return card;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
