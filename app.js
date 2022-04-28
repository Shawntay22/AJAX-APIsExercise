// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a. Change the string of JSON into JavaScript (It will be a JS object) and set the new value to a const variable called jokeJS1 (HINT: Use JSON.parse())
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(jokeJS1);

// 1b. Access the value for the "setup" key in the jokeJS1 object and set it to the inner text for the p1 variable/element (If done correctly the setup for the joke should display on the webpage)
const {setup} = jokeJS1;
p1.innerText = setup;

// OR 

// console.log(jokeJS1.setup);  (log not NEEDED. it is to see it in web dev tools.)

// p1.innerText = jokeJS1.setup;


// 1c. Access the value for the "punchline" key in the jokeJS1 object and set it to the inner text for the p2 variable/element (If done correctly the punchline for the joke should display on the webpage)
const {punchline} = jokeJS1;
p2.innerText = punchline;

// OR

// console.log(jokeJS1.punchline);
// p2.innerText = jokeJS1.punchline;




// Use the Friends API for questions 2 & 3 (Link below)…
// https://friends-quotes-api.herokuapp.com/


// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 2a. Use the "Returns a single random quote." endpoint/URL to GET a Random quote using axios

axios.get('https://friends-quotes-api.herokuapp.com/quotes/random')

// 2b. Use .then to create a function that sets the value returned from the axios GET request to a const variable called friendsJS2 (NOTE: You will need to create a function with a parameter. The parameter will hold the "resolved" value returned from the axios GET request).

// 2c. Inside of the same function, access the value for the "character" key in the friendsJS2 object and set it to the inner text for the p3 variable/element. Also, access the value for the "quote" key in the friendsJS2 object and set it to the inner text for the p4 variable/element (If done correctly the character and quote for the quote should display on the webpage)

// 2d. Finally, use .catch to create a function that would display the "rejected" value/error returned from the axios GET request in the console (NOTE: You will need a console log for this. Also, you will need to create a function with a parameter. The parameter will hold the "rejected" value/error returned from the axios GET request).

// 2b.
.then (friendsJS2 => {
    console.log(friendsJS2.data.character);
    console.log(friendsJS2.data.quote);
    // 2c.
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
}) 
// 2d.
.catch (rejected => {
    console.log(`Nope! Try again!`);
    console.log(rejected);
    alert(`Nope. Try Again.`);
})

// OR
/*
// 2b
.then(res => {
    console.log(`Question 2`);
    console.log(res);
    const friendsJS2 = res;
    console.log(friendsJS2);

    // 2c
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
})

// 2d
.catch (err => {
    console.log(`Question 2 Failed`);
    console.log(err);
});
*/

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 3a. Use the "Returns a single random quote." endpoint/URL again to GET another Random Quote using axios

// 3b. Create a function that uses async/await called quoteFunc which sets the value returned from the axios GET request to a const variable called quoteJS3
// 3c. Inside of the same quoteFunc function, access the value for the "character" key in the quoteJS3 object and set it to the inner text for the p5 variable/element. Also, access the value for the "quote" key in the quoteJS3 object and set it to the inner text for the p6 variable/element (If done correctly the character and quote for the quote should display on the webpage)(NOTE: Don't forget the run the quoteFunc function)

// 3d. Finally, include try and catch inside the quoteFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).


// 3b.
// 3b
async function quoteFunc(){
    try{
        // 3a
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);

        // 3c
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;
        // 3d
    } catch (err){
        console.log(err);
    }
}
quoteFunc();


// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);


// Use the TVMazeAPI for question 4 (Link below)…
// https://www.tvmaze.com/api


// 4a. Using Axios, Async/await, and the "Episode by Number" endpoint/URL display the name of the final episode in season two of "The Mandalorian" TV show as the inner text for the p7 variable/element. Also, use tvMazeFunc for the name of the async function you create. If done correctly the name of the episode should display on the webpage. (NOTE: Don't forget to run the tvMazeFunc function)(Hint: id is 38963).

// 4b. Finally, include try and catch inside the tvMazeFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).

// 4a.
async function tvMazeFunc() {
    try {
        const episodeByNum = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        p7.innerText = episodeByNum.data.name;
    // 4b.
    } catch (err){
        console.log(err);
    }
}
tvMazeFunc();

// OR
/*

const id = 38963;
const season = 2;
const episode = 8;
const tvMazeURL = `https://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${episode}`;
// Same as above
// const tvMazeURL = `https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`;

async function tvMazeFunc(){
  try {
    const show = await axios.get(tvMazeURL);
    console.log(`Question 4`);
    console.log(show);
    p7.innerText = show.data.name;
    // 4b
  } catch (err) {
    console.log(err);
  }
}
tvMazeFunc();
*/




// BONUS

// 5. Use the Poke API as well as Axios (https://pokeapi.co/) to display an image of Pikachu below the fourth div on the webpage (NOTE: You can use .then or Async Await to complete this question it is up to you)
async function pokePic(){
    try{
        const onixImg = `https://pokeapi.co/api/v2/pokemon/onix`;
        const onix = await axios.get(onixImg);
        const imgOne = document.createElement(`img`);
        imgOne.src = onix.data.sprites.front_default;
        fourth.after(imgOne);
    } catch (err) {
        console.log(err);
        console.log(`You have been defeated, try again`);
        alert(`You have been defeated, try again`);
        
    }
}
pokePic();

// OR
/*
const body = document.querySelector(`body`);

axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)

.then(res => {
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_default;
    body.append(img);
})

.catch (err => {
    console.log(err);
    alert(`You did NOT catch that Pokemon!`);
});
*/


//6. Use the OMDb API as well as Axios (http://www.omdbapi.com/) to display a movie poster of your choice next to the image of Pikachu using the t parameter endpoint (NOTE: Technically it is a query string, but they call it a parameter on the documentation. Also, you will need to create/request a FREE API key at http://www.omdbapi.com/apikey.aspx to complete this. Finally, you can use .then or Async Await to complete this question it is up to you.)

const body = document.querySelector(`body`);
const image2 = document.createElement(`img`);
body.append(image2);

const apikey = `4aaa0638`;  //(my key wouldn't work.)
const title = `You've Got Mail`;
const omdbURL = `http://www.omdbapi.com/?apikey=${apikey}&t=${title}`;

async function omdb(){
    const response = await axios.get(omdbURL);
    console.log(`Question 6`);
    console.log(response);
    image2.src = response.data.Poster;
  }
  omdb();