const searchsong=() =>{
    const searchText=document.getElementById("search").value;
   // console.log(searchText);
   //load data
   const url=`https://api.lyrics.ovh/suggest/${searchText}`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>displaysong(data.data))
}
const displaysong = song=>{
    const songContainer=document.getElementById("song-container")
    songContainer.innerHTML='';
    song.forEach(song => {
        const songdiv=document.createElement("div");
        songdiv.className=('single-result row align-items-center my-3 p-3')   
        songdiv.innerHTML= ` 
          <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                        <source src="${song.preview}" type="audio/ogg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick=getLyrics('${song.artist.name}','${song.title}') class="btn btn-success">Get Lyrics</button>
                    </div>
        
        `
        songContainer.appendChild(songdiv);  

        
    });


}

const getLyrics = (artist,title) =>{
    const url=` https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayLyrics(data.lyrics))

    }
    const displayLyrics =lyrics=>{
        const lyricsDiv =document.getElementById('songLyrics');
        lyricsDiv.innerText=lyrics;
    }

