/*
MusicFindByBT
API Used: iTunes Search API (https://itunes.apple.com/search)
Why itunes!? It’s public, needs no login, and gives track info, artwork, and 30s previews all at once.

How I call it: 
– Grab what you type (artist/genre) 
– Fetch `https://itunes.apple.com/search?term=${yourInput}&media=music&limit=20` 
– Turn the JSON into song cards on the page

What it does:
You type something like “jazz” or “Adele,” hit Find Songs, and voilà—
you get album art, song title, artist, and a play button for a preview.

Future ideas:
• Let people save favorites to localStorage  
• Show more results with “Load More”  
• Filter by album or explicit content  
• Show full album details or artist bio  
*/

const musicSearchButton = document.getElementById("musicSearchButton");
const musicSearchInput = document.getElementById("musicSearchInput");
const songResultsContainer = document.getElementById("songResults");

musicSearchButton.addEventListener("click", () => {
  const userQuery = musicSearchInput.value.trim();
  if (!userQuery) return;

  songResultsContainer.innerHTML = "<p>Fetching songs… 🎧</p>";

  fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      userQuery
    )}&media=music&limit=20`
  )
    .then((response) => response.json())
    .then((data) => {
      songResultsContainer.innerHTML = "";
      if (data.results.length === 0) {
        songResultsContainer.innerHTML =
          "<p>No tracks found. Try another keyword!</p>";
        return;
      }

      data.results.forEach((track) => {
        const songCard = document.createElement("div");
        songCard.className = "song-card";

        songCard.innerHTML = `
          <img 
            src="${track.artworkUrl100.replace("100x100", "300x300")}" 
            alt="Album art for ${track.trackName}"
          />
          <div class="details">
            <h2>${track.trackName}</h2>
            <p>by ${track.artistName}</p>
          </div>
          <audio controls src="${track.previewUrl}">
            Your browser doesn’t support audio previews.
          </audio>
        `;

        songResultsContainer.appendChild(songCard);
      });
    })
    .catch((error) => {
      songResultsContainer.innerHTML = `<p>Oops, something went wrong: ${error.message}</p>`;
      console.error("Fetch error:", error);
    });
});
