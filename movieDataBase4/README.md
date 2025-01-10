HeavyD Movies 🎬
HeavyD Movies is a web application built to explore, watch, and manage your favorite movies and TV shows. Users can browse trending movies and series, add favorites, and enjoy a sleek, responsive UI powered by React, Tailwind CSS, and TMDb API.

Features
Browse Movies & TV Series
 Explore popular and trending movies or TV series using TMDb API.


Add to Favorites
 Save your favorite movies and series to revisit them later.


Movie Player
 Enjoy sample movie trailers in an immersive video player interface.


Dark Mode Toggle
 Switch between light and dark themes to personalize your viewing experience.


Responsive Design
 Optimized for desktop, tablet, and mobile viewing

Technologies Used
Frontend
React: A JavaScript library for building user interfaces.
React Router: For client-side routing.
Tailwind CSS: Utility-first CSS framework for styling.
Backend (API Integration)
TMDb API: Fetching movie and TV show data.
Axios: For making HTTP requests.
State Management
Context API: For managing favorites across components.

Project Structure
src  
├── components  
│   ├── MovieCard.jsx       # Displays movie details with favorite functionality  
│   ├── MoviePlayer.jsx     # Handles video player for movies  
│   ├── Navbar.jsx          # Top navigation bar with links and dark mode toggle  
│  
├── context  
│   ├── FavoritesContext.jsx # Context for managing favorite movies  
│  
├── pages  
│   ├── Home.jsx            # Displays now playing movies and currently airing series  
│   ├── Movies.jsx          # Popular movies listing  
│   ├── Series.jsx          # Popular TV series listing  
│   ├── Browse.jsx          # Category-based browsing for movies and series  
│   ├── Favorites.jsx       # Displays user’s favorite movies and series  
│  
├── services  
│   ├── movieService.js     # TMDb API functions for movies and TV series  
│  
├── App.jsx                 # Main app component  
├── Main.jsx                # Entry point for React app  
├── index.css               # Global styles  
└── tailwind.config.js      # Tailwind configuration  


Environment Variables
This project requires an API key from TMDb (The Movie Database).
I created a TMDb account and generate an API key:
 https://www.themoviedb.org/settings/api



Usage
Home Page
Displays a list of movies that are "Now Playing" and TV series that are "Currently Airing".
Movies Page
Browse popular movies fetched from the TMDb API.
Series Page
Browse popular TV series fetched from the TMDb API.
Browse Page
Switch between movies and series to explore trending content.
Favorites Page
View and manage your saved favorites.
Navbar
Quickly navigate between different sections of the app.

Author
HeavyD Movies is designed and developed by Olusegun Adeyemi