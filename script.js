/////////////////////////////////////////////////////// WINDOW POP UP OPENING /////////////////////////////////////////////////////////////

window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      500
  )
});
document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

/////////////////////////////////////////////////////// TRYING OBJECTS /////////////////////////////////////////////////////////////

let photographies = {

        bolivia: {
          file: ["./bolivia/bolivia1.jpg", "./bolivia/bolivia2.jpg", "./bolivia/bolivia3.jpg", "./bolivia/bolivia4.jpg"],
          score: "scoreBolivia",
        }, 
        hawaii: {
          file: ["./hawaii/hawaii1.jpg", "./hawaii/hawaii2.jpg", "./hawaii/hawaii3.jpg", "./hawaii/hawaii4.jpg"],
          score: "scoreHawaii",
        }, 
        italy: {
          file: ["./italy/italy1.jpg", "./italy/italy2.jpg", "./italy/italy3.jpg", "./italy/italy4.jpg"],
          score: "scoreItaly",
        }, 
        nepal: {
          file: ["./nepal/nepal1.jpg", "./nepal/nepal2.jpg", "./nepal/nepal3.jpg", "./nepal/nepal.jpg"],
          score: "scoreNepal",
        },
        newzealand: {
          file: ["./newzealand/newzealand1.jpg", "./newzealand/newzealand2.jpg", "./newzealand/newzealand3.jpg", "./newzealand/newzealand4.jpg"],
          score: "scoreNewzealand",
        },
        utah: {
          file: ["./utah/utah1.jpg", "./utah/utah2.jpg", "./utah/utah3.jpg", "./utah/utah4.jpg"],
          score: "scoreUtah",
        }
}


/////////////////////////////////////////////////////// ARRAY OF PICTURES /////////////////////////////////////////////////////////////

var photoList = [
  "./newzealand/newzealand1.jpg",
  "./newzealand/newzealand2.jpg",
  "./newzealand/newzealand3.jpg",
  "./newzealand/newzealand4.jpg",
  "./italy/italy1.jpg",
  "./italy/italy2.jpg",
  "./italy/italy3.jpg",
  "./italy/italy4.jpg",
  "./hawaii/hawaii1.jpg",
  "./hawaii/hawaii2.jpg",
  "./hawaii/hawaii3.jpg",
  "./hawaii/hawaii4.jpg",
  "./nepal/nepal1.jpg",
  "./nepal/nepal2.jpg",
  "./nepal/nepal3.jpg",
  "./nepal/nepal4.jpg",
  "./bolivia/bolivia1.jpg",
  "./bolivia/bolivia2.jpg",
  "./bolivia/bolivia3.jpg",
  "./bolivia/bolivia4.jpg",
  "./utah/utah1.jpg",
  "./utah/utah2.jpg",
  "./utah/utah3.jpg",
  "./utah/utah4.jpg"
]

/////////////////////////////////////////////////////// RANDOM PICTURES /////////////////////////////////////////////////////////////

const changePicturesLeftAndRight = () => {

  let previousLeft, previousRight;

  // LEFT PICTURES

  let titleLeft = document.getElementById("titleLeft1");  
  titleLeft.addEventListener("click", () => {
      let randomRight = Math.floor(Math.random() * photoList.length);
      let randomLeft = Math.floor(Math.random() * photoList.length); 

      if (photoList[randomRight] === photoList[randomLeft]) {  // NEVER THE SAME ON LEFT AND RIGHT AS SAME TIME
        // alert("Hello Test Same Picture");
        randomRight = Math.floor(Math.random() * photoList.length);
        randomLeft = Math.floor(Math.random() * photoList.length);
      }

      while (randomRight === previousRight || randomRight === previousLeft) {  // NEVER THE SAME TWICE ON EACH SIDES
          randomRight = Math.floor(Math.random() * photoList.length);
      }
      while (randomLeft === previousLeft || randomLeft === previousRight) {
          randomLeft = Math.floor(Math.random() * photoList.length);
      }

      document.getElementById("imageOnRight").src = photoList[randomRight];
      document.getElementById("imageOnLeft").src = photoList[randomLeft];

      previousLeft = randomLeft;
      previousRight = randomRight;

  });

  // RIGHT PICTURES

  let titleRight = document.getElementById("titleRight1");  
  titleRight.addEventListener("click", () => {
      let randomLeft = Math.floor(Math.random() * photoList.length);
      let randomRight = Math.floor(Math.random() * photoList.length);

      if (photoList[randomRight] === photoList[randomLeft]) {  // NEVER THE SAME ON LEFT AND RIGHT AS SAME TIME
        // alert("Hello Test Same Picture");
        randomRight = Math.floor(Math.random() * photoList.length);
        randomLeft = Math.floor(Math.random() * photoList.length);
      }

      while (randomRight === previousRight || randomRight === previousLeft) {  // NEVER THE SAME TWICE ON EACH SIDES
          randomRight = Math.floor(Math.random() * photoList.length);
          // alert("Hello Test Doubles");
      }
      while (randomLeft === previousLeft || randomLeft === previousRight) {
          randomLeft = Math.floor(Math.random() * photoList.length);
          // alert("Hello Test Doubles");
      }

      document.getElementById("imageOnLeft").src = photoList[randomLeft];
      document.getElementById("imageOnRight").src = photoList[randomRight];

      previousLeft = randomLeft;
      previousRight = randomRight;
  });
}

changePicturesLeftAndRight();

/////////////////////////////////////////////////////// SCORE VARIABLES /////////////////////////////////////////////////////////////

let scoreNewzealand = 0
let scoreItaly = 0
let scoreHawaii = 0
let scoreNepal = 0
let scoreBolivia = 0
let scoreUtah = 0

///////////////////////////////////////////////////////////// TRASH /////////////////////////////////////////////////////////////////

let trashPhotos = []

/////////////////////////////////////////////////////// LANSCAPE PHOTOS /////////////////////////////////////////////////////////////

// landscapephotographies

let winnerNewzealand = ""
let winnerItaly = ""
let winnerHawaii = ""
let winnerNepal = ""
let winnerBolivia = ""
let winnerUtah = ""





   
// imageLeft.addEventListener("mouseover","mouseleave" () => { // TOP TOP TOP
//     alert("hello");
// });



