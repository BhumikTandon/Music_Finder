# MusicFindByBT 🎶

A simple web app that lets you search for music tracks using the **iTunes Search API**, returning album art, track titles, artist names, and 30-second previews—all without any signup or authentication.

## Introduction

**MusicFindByBT** uses Apple’s public **iTunes Search API** to let you discover songs by typing an artist name, genre, or keyword. Search results show up to 20 tracks, each with:

- High-resolution album artwork  
- Track title  
- Artist name  
- A 30-second audio preview  

No API key or login is required—simply type your query and hit **Find Songs**!

---

## How It Works

1. **User Input**  
   The user types a query (e.g. “jazz” or “Adele”) into the search field.  
2. **Fetch Request**  
   The app sends a GET request to:
   https://itunes.apple.com/search?term=<YOUR_QUERY>&media=music&limit=20

3. **Render Results**  
The JSON response is parsed and each track is rendered as a card with artwork, details, and an `<audio>` preview.

---

## Features

- 🔍 **Keyword Search**: Find tracks by artist, genre, album name, or any term.  
- 🎨 **Artwork Display**: Shows 300×300 album art for each track.  
- ▶️ **Audio Preview**: Play a 30-second preview directly in the browser.  
- 🚫 **No Auth Required**: Uses iTunes’ public API—no keys or signup.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repo**  
```bash
git clone https://github.com/your-username/MusicFindByBT.git
cd MusicFindByBT

