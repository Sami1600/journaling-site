const submitButton = document.getElementById('s/button')
/* submitButton.addEventListener('click', addStory) */
submitButton.addEventListener('click', saveNewPost)

function addStory(e){
    e.preventDefault(); // stops form submitting
   
    const title = document.getElementById('story-title');
    const story = document.getElementById('story-entry');
    console.log(title.value);
    console.log(story.value);
    
    const newtitle = document.createElement('h4');
    newtitle.className = "postTitle";
    newtitle.textContent = title.value;
    
    const newstory = document.createElement('p');
    newstory.className = "theStory";
    newstory.textContent = story.value;
    

    const newdiv = document.createElement('div')
    const main = document.querySelector('main')
    newdiv.className = "apost";
    main.append(newdiv);
    newdiv.appendChild(newtitle);
    newdiv.appendChild(newstory);

    document.querySelector('form').reset(); //to clear form for new entries
}

//FOR EACH STORY IN JSON - addDivStory

function saveNewPost(e) {
    e.preventDefault(); // stops form submitting
    
    let newPost = {
        timestamp: Date.now(),
        title: document.getElementById('story-title').value,
        story: document.getElementById('story-entry').value,
        comments: []
    }
    
    fetch('http://localhost:3000/data/new', {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newPost)})
    .then(resp => resp.text())
    .then(text => console.log(text))
    .catch(error => console.error(error));

    
    document.querySelector('form').reset(); //to clear form for new entries

    //for display purposes only
    console.warn('added a new post');
}


//function for timestamp
/* we need another function that saves data to .JSON file */
//we need a function that fetches data to json file and foreach creates new div/card
// need a function that sorts all the posts by descending order of most recent date - can choose most commented or most emoji-ed sort?
//function for count emoji reactions - add to HTML

/* 
module.exports = { charCount }; */