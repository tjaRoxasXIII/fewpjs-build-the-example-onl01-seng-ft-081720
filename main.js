// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heartObjects = document.getElementsByClassName("like-glyph")
for(const heart of heartObjects) {
  heart.addEventListener("click", function(){
    
    mimicServerCall()
      .then(function(serverMessage) {
        if (heart.innerText == EMPTY_HEART) {
          fullHeart(heart)
        }
        else {
          heart.innerText = EMPTY_HEART
          heart.style.color = ""
        }
      })
      .catch(function(error) {
        alert("An error has occurred!")
      })
  })
}

function fullHeart(obj) {
  obj.className = "activated-heart"
  heart.innerText = FULL_HEART
  heart.style.color = "red"
}

function emptyHeart(obj) {
  obj.className = ""
  heart.innerText = EMPTY_HEART
  heart.style.color = ""
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
