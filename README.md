# 🎬 React Subscription-Based Streaming Service App

A modern **React-based Netflix-style streaming app** with **Tailwind CSS**, integrated with **TMDB** for movies, and powered by **GPT for movie suggestions**. This app features user authentication, a protected browsing page, trailer highlights, and intelligent movie suggestions.

---

## 🚀 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Abhishek679/Subscription-Based-Streaming-Service-App.git
   cd Subscription-Based-Streaming-Service-App
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the development server**  
   ```bash
   npm run dev
   ```

4. **Python backend** (authentication API)  
   - Ensure Python backend is running (instructions in backend folder if applicable).

---

## 🌟 Features

### ✅ Authentication
- **Sign In / Sign Up**
  - Form validation using `useRef`
  - Redirects to **Browse** page upon login
- **User Profile Dropdown**
  - Access profile options via profile image

---

### 🔒 Protected Browse Page
Only accessible after successful login.

- **Header** – Navigation & User Controls  
- **Main Movie Section**  
  - Auto-playing **trailer in background**
  - Movie **title & description**
- **Movie Suggestions**
  - Scrollable movie list based on categories (like Netflix UI)

---

### 🤖 GPT-Based Movie Search
- Custom **search bar**
- Integrated **GPT API** for movie name suggestions
- GPT fetches relevant movie titles and hits **TMDB APIs** to fetch movie info
- Displayed via:
  - `GptMoviesSuggestions` (search list container)
  - `GptSearchResult` (render search results)

---

## ⚙️ Tech Stack

| Frontend       | Backend           | APIs Used           |
|----------------|-------------------|---------------------|
| React (Vite)   | Python (FastAPI)  | TMDB (Movies DB)    |
| Tailwind CSS   | REST APIs         | GPT (Movie Suggest) |
| Redux Toolkit  |                   |                     |

---

## 🛠️ Current Development Progress

- ✅ Created React app
- ✅ Configured Tailwind CSS
- ✅ Built header and auth forms
- ✅ Implemented login/signup functionality
- ✅ Connected to Python backend (sign-in/sign-out APIs)
- ✅ Created user profile & dropdown
- ✅ Registered and integrated TMDB API
- ✅ Fetched “Now Playing” movies
- ✅ Created custom hook: `useHighlight` for trailer backgrounds
- ✅ Created Redux store and `moviesSlice`
- ✅ Built `MainContainer` (trailer + title/desc)
- ✅ Built `SecondaryContainer` (scrollable movie rows by category)
- ✅ Integrated GPT for smart search
- ✅ Built `Search`, `GptMoviesSuggestions`, and `GptSearchResult` components

---

## 📸 Screenshots

### 🔐 Browse Page
<p align="center">
    <img src="./public/screenshots/Screenshot 2025-06-16 at 10.51.18 PM.png" width="600"/>
</p>

### 🔐 Movie List Catagory Wise
<p align="center">
    <img src="./public/screenshots/Screenshot 2025-06-16 at 10.46.48 PM.png" width="600"/>
</p>

### 🔐 Search Page
<p align="center">
    <img src="./public/screenshots/Screenshot 2025-06-16 at 10.48.04 PM.png" width="600"/>
</p>

---

## 📁 Folder Structure (Frontend)

```
src/
├── components/
│   ├── Header.js
│   ├── Body.js
│   ├── Browse.js
│   ├── GptMoviesSuggestions.js
│   ├── SecondaryContainer.js
│   ├── GptSearch.js
│   ├── GptSearchResultMovies.js
│   ├── Login.js
│   ├── MainContainer.js
│   ├── MovieCard.js
│   ├── MovieList.js
│   ├── VideoBackground.js
│   └── VideoTitle.js
├── hooks/
│   ├── useHighlightMovie.js
│   ├── useNowPlayingMovies.js
│   ├── usePopularMovies.js
│   └── useTopRatedMovies.js
├── utils/
│   ├── appStore.js
│   ├── conatant.js
│   ├── gptSlice.js
│   ├── movieSlice.js
│   ├── opneai.js
│   ├── userSlice.js
│   └── validate.js
├── pages/
│   ├── LoginPage.jsx
│   └── BrowsePage.jsx
```

---

## 🧠 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📃 License

MIT License – _Feel free to use and modify._

---

## 🙋‍♂️ Author

Made with ❤️ by [Abhishek Dubey](https://github.com/Abhishek679)
