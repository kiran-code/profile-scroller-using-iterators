// document.getElementById('next').addEventListener('click', randomUser);

// function randomUser(){
//   const xhr = new XMLHttpRequest();

//   // OPEN 
  // xhr.open('GET', 'https://randomuser.me/api/', true);

  // //onload
  // xhr.onload = function(){
  //   if(xhr.status === 200){
  //     console.log('response', JSON.parse(xhr.responseText).results[0]);
  //     return JSON.parse(xhr.responseText).results[0];
  //   }
  // }

  // // SEND request
  // xhr.send();
// }


const data = [
  {
    name: 'John',
    age: 29,
    gender: 'male',
    lookingfor: 'female',
    location: 'New York City, NY',
    image: 'https://randomuser.me/api/portraits/men/99.jpg'
  },
  {
    name: 'Linda',
    age: 22,
    gender: 'female',
    lookingfor: 'male',
    location: 'Boston, MA',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Mark',
    age: 35,
    gender: 'male',
    lookingfor: 'female',
    location: 'Miami, FL',
    image: 'https://randomuser.me/api/portraits/men/44.jpg'
  }
];

// Profile Iterator
function profileIterator(profiles){
  let nextIndex = 0;  
  return {
    next: function(){
      // if(nextIndex === 3){
      //   nextIndex = 0;
      // }
      return nextIndex < profiles.length? 
      {value: profiles[nextIndex++], done: false}:
      {done: true} 
    }
  }
}

const profiles = profileIterator(data);

// nextProfile();

// console.log(profiles.next().value);

// document.getElementById('next').addEventListener('click', nextProfileXhr);

// function nextProfile(){
  
//   const current = profiles.next();
 
//   if(!current.done){
//     const currentProfile = current.value;

//     document.getElementById('profileDisplay').innerHTML = `
//       <ul class="list-group">
      
//         <li class="list-group-item">Name: ${currentProfile.name}</li>
//         <li class="list-group-item">Age: ${currentProfile.age}</li>
//         <li class="list-group-item">Gender: ${currentProfile.gender} Preference: ${currentProfile.gender}</li>
//         <li class="list-group-item">Location: ${currentProfile.location}</li>
//       </ul>
//     `;

//     document.getElementById('imageDisplay').innerHTML = `
//       <img src="${currentProfile.image}">
//     `
//   } else {
//     window.location.reload();
//   } 
// }

  document.getElementById('next').addEventListener('click', nextProfileXhr);
  
  nextProfileXhr();
  
  function nextProfileXhr(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/', true);

    //onload

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 3){
        console.log('3');
        document.getElementById('profileDisplay').innerHTML = `<img style='width: 100%;' src="/images/loading.gif">`;
      }
    }

    xhr.onload = function(){
      console.log('4');
      if(xhr.status === 200){
        const currentProfile = JSON.parse(xhr.responseText).results[0];
        
        //document.getElementById('profileDisplay').innerHTML = `<img style='width: 100%;' src="/images/loading.gif">`;
        document.getElementById('imageDisplay').innerHTML = '';
        setTimeout(function(){
          document.getElementById('profileDisplay').innerHTML = `
          <ul class="list-group">
          
            <li class="list-group-item">Name: ${currentProfile.name.first} ${currentProfile.name.last}</li>
            <li class="list-group-item">Age: ${currentProfile.dob.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender} Preference: ${currentProfile.gender}</li>
            <li class="list-group-item">Location: ${currentProfile.location.city}, ${currentProfile.location.state}</li>
          </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `
          <img src="${currentProfile.picture.medium}">
        `
        }, 1000);
    
      }
    }

    // SEND request
    xhr.send(); 
  }