let memeBtn = document.querySelector(".btn");
let memeTitle = document.getElementById("title");
let memeAuthor = document.getElementById("author");
let memeImg = document.getElementById("img-meme");

let updateMeme = (url,title,author) => {
    memeImg.src = url;
    memeTitle.innerHTML = title;
    memeTitle.style.textAlign = "center";
    memeAuthor.innerHTML = `Meme by: ${author}`;
    memeAuthor.style.textAlign = "center";
}
const memeGenerator = async () => {
    let myMeme = await fetch(`https://meme-api.com/gimme/wholesomememes`);
    let myFetch = await myMeme.json();
    // console.log(myFetch);
    updateMeme(myFetch.url,myFetch.title,myFetch.author);
}
memeGenerator();
memeBtn.addEventListener("click",memeGenerator);