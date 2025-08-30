// ===== AUTH MODAL FUNCTIONALITY =====
const authModal = document.getElementById('authModal');
const authModalContent = document.getElementById('authModalContent');
const openLoginBtn = document.getElementById('openLoginBtn');
const openRegisterBtn = document.getElementById('openRegisterBtn');
const closeAuthBtn = authModal.querySelector('.closeBtn');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');

// Form validation flags
let isLoginValid = false;
let isRegisterValid = false;

// Open modal with login form
openLoginBtn.addEventListener('click', () => {
  authModal.classList.add('active');
  loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
  document.body.style.overflow = 'hidden';
});

// Open modal with register form
openRegisterBtn.addEventListener('click', () => {
  authModal.classList.add('active');
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

// Switch to register form
showRegisterLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
});

// Switch to login form
showLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'flex';
});

// Close modal
closeAuthBtn.addEventListener('click', () => {
  authModal.classList.remove('active');
  document.body.style.overflow = '';
});

// Click outside to close
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Login form validation
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Simple validation
  if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('loginEmailError').style.display = 'block';
    document.getElementById('loginEmail').classList.add('input-error');
    isLoginValid = false;
  } else {
    document.getElementById('loginEmailError').style.display = 'none';
    document.getElementById('loginEmail').classList.remove('input-error');
    isLoginValid = true;
  }
  
  if (password.length < 6) {
    document.getElementById('loginPasswordError').style.display = 'block';
    document.getElementById('loginPassword').classList.add('input-error');
    isLoginValid = false;
  } else {
    document.getElementById('loginPasswordError').style.display = 'none';
    document.getElementById('loginPassword').classList.remove('input-error');
    isLoginValid = true;
  }
  
  if (isLoginValid) {
    // Here you would typically send data to server
    alert('Login successful! (This is a demo)');
    authModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Register form validation
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirm = document.getElementById('registerConfirm').value;
  
  // Reset all errors
  document.querySelectorAll('#registerForm .form-error').forEach(el => {
    el.style.display = 'none';
  });
  document.querySelectorAll('#registerForm input').forEach(el => {
    el.classList.remove('input-error');
  });
  
  isRegisterValid = true;
  
  // Validate name
  if (name.trim() === '') {
    document.getElementById('registerNameError').style.display = 'block';
    document.getElementById('registerName').classList.add('input-error');
    isRegisterValid = false;
  }
  
  // Validate email
  if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('registerEmailError').style.display = 'block';
    document.getElementById('registerEmail').classList.add('input-error');
    isRegisterValid = false;
  }
  
  // Validate password
  if (password.length < 6) {
    document.getElementById('registerPasswordError').style.display = 'block';
    document.getElementById('registerPassword').classList.add('input-error');
    isRegisterValid = false;
  }
  
  // Validate password match
  if (password !== confirm) {
    document.getElementById('registerConfirmError').style.display = 'block';
    document.getElementById('registerConfirm').classList.add('input-error');
    isRegisterValid = false;
  }
  
  if (isRegisterValid) {
    // Here you would typically send data to server
    alert('Registration successful! (This is a demo)');
    authModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Switch to login form after successful registration
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
  }
});

// ===== SETTINGS MODAL FUNCTIONALITY =====
const settingsModal = document.getElementById('settingsModal');
const settingsModalContent = document.getElementById('settingsModalContent');
const navSettings = document.getElementById('nav-settings');
const closeSettingsBtn = settingsModal.querySelector('.closeBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

// Open settings modal
navSettings.addEventListener('click', (e) => {
  e.preventDefault();
  settingsModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Close settings modal
closeSettingsBtn.addEventListener('click', () => {
  settingsModal.classList.remove('active');
  document.body.style.overflow = '';
});

// Click outside to close
settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Toggle theme functionality
toggleThemeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    toggleThemeBtn.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-mode');
    toggleThemeBtn.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleThemeBtn.textContent = 'Switch to Light Mode';
} else {
  document.body.classList.remove('dark-mode');
  toggleThemeBtn.textContent = 'Switch to Dark Mode';
}

// ===== MUSIC PLAYER FUNCTIONALITY =====
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const currentTimeElem = document.getElementById("currentTime");
const durationElem = document.getElementById("duration");
const playBtn = document.getElementById("playBtn");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const coverArt = document.getElementById("coverArt");
const allSongsContainer = document.getElementById("allSongsContainer");
const volumeControl = document.getElementById("volumeControl");

// Full player elements
const fullPlayerOverlay = document.getElementById("fullPlayerOverlay");
const fullPlayerCoverArt = document.getElementById("fullPlayerCoverArt");
const fullPlayerSongTitle = document.getElementById("fullPlayerSongTitle");
const fullPlayerArtist = document.getElementById("fullPlayerArtist");
const fullPlayBtn = document.getElementById("fullPlayBtn");
const fullPlayerProgressBar = document.getElementById("fullPlayerProgressBar");
const fullCurrentTime = document.getElementById("fullCurrentTime");
const fullDuration = document.getElementById("fullDuration");
const fullPlayerVolumeControl = document.getElementById("fullPlayerVolumeControl");
const closeFullPlayerBtn = document.getElementById("closeFullPlayerBtn");

// Format seconds to M:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

// Songs data
const placeholderCover = "soniktune logo.png";
const songs = [
  { 
    title: "Kadosh", 
    artist: "Joe Mettle", 
    src: "kadosh.mp3", 
    cover: "Copy-of-MixtapeAlbum-Cover-Art-1024x1024.jpg" 
  },
  { 
    title: "Shona Phansi Mix", 
    artist: "Nostalgic", 
    src: "Shona_Phansi__Nostalgic_Mix_(256k).mp3", 
    cover: "AlbumCovers_Blonde-1200x1200.jpg" 
  },
  { 
    title: "Summertime", 
    artist: "Billy Preston", 
    src: "Billy Preston - Summertime.mp3", 
    cover: "wp5215885.jpg" 
  },
  { 
    title: "Everyday with Jesus", 
    artist: "MaKhumalo", 
    src: "Everyday with Jesus.mp3", 
    cover: "" 
  },
  { 
    title: "You can't beat God's giving", 
    artist: "Billy Preston", 
    src: "Billy Preston - You Can_t Beat God Giving (Live) [Official Video].mp3", 
    cover: "1600w-2aE_LYxWtEI.jpg" 
  },
  { 
    title: "Special", 
    artist: "Agent Snypa", 
    src: "Agent Snypa Special.mp3", 
    cover: "" 
  },
  { 
    title: "Christ is on the way", 
    artist: "Tru South", 
    src: "Tru_South_&_Christian_K___Christ_Is_On_The_Way.mp3", 
    cover: "" 
  }
];

let currentSongIndex = 0;
let isPlaying = false;
let lastVolume = 0.5; // Remember last volume for mute toggle

// Load a song by index and update both players
function loadSong(index) {
  // Show loading state
  coverArt.classList.add('loading');
  fullPlayerCoverArt.classList.add('loading');
  
  currentSongIndex = index;
  const song = songs[index];
  
  // Set audio source
  audio.src = song.src;
  
  // Update mini player
  songTitle.textContent = song.title;
  artist.textContent = song.artist;
  coverArt.src = song.cover || placeholderCover;
  coverArt.alt = `${song.title} cover art`;
  
  // Update full player
  fullPlayerCoverArt.src = song.cover || placeholderCover;
  fullPlayerCoverArt.alt = `${song.title} cover art`;
  fullPlayerSongTitle.textContent = song.title;
  fullPlayerArtist.textContent = song.artist;
  
  // Remove loading state when cover art loads
  coverArt.onload = () => {
    coverArt.classList.remove('loading');
    fullPlayerCoverArt.classList.remove('loading');
  };
  
  // Fallback if cover fails to load
  coverArt.onerror = () => {
    coverArt.src = placeholderCover;
    coverArt.classList.remove('loading');
    fullPlayerCoverArt.src = placeholderCover;
    fullPlayerCoverArt.classList.remove('loading');
  };
  
  // Play automatically if player was playing
  if (isPlaying) {
    audio.play()
      .then(() => {
        playBtn.textContent = "⏸";
        fullPlayBtn.textContent = "⏸";
      })
      .catch(error => {
        console.error("Playback failed:", error);
        alert("Playback failed. Please check your audio files.");
      });
  }
}

// Play / Pause toggle
function togglePlay(event) {
  if (event) event.stopPropagation();
  
  if (audio.paused) {
    audio.play()
      .then(() => {
        isPlaying = true;
        playBtn.textContent = "⏸";
        fullPlayBtn.textContent = "⏸";
      })
      .catch(error => {
        console.error("Playback failed:", error);
        alert("Could not play the song. The audio file may be missing or corrupted.");
      });
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶";
    fullPlayBtn.textContent = "▶";
  }
}

// Play next song
function nextSong(event) {
  if (event) event.stopPropagation();
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) {
    audio.play()
      .catch(error => console.error("Playback failed:", error));
  }
}

// Play previous song
function prevSong(event) {
  if (event) event.stopPropagation();
  // If song is more than 3 seconds in, restart it instead
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
      audio.play()
        .catch(error => console.error("Playback failed:", error));
    }
  }
}

// Toggle mute when clicking volume slider
function toggleMute() {
  if (audio.volume > 0) {
    lastVolume = audio.volume;
    audio.volume = 0;
    volumeControl.value = 0;
    fullPlayerVolumeControl.value = 0;
  } else {
    audio.volume = lastVolume;
    volumeControl.value = lastVolume;
    fullPlayerVolumeControl.value = lastVolume;
  }
}

// Populate song list in the UI
function populateSongList() {
  const container = document.getElementById('allSongsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.classList.add("song-card");
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Play ${song.title} by ${song.artist}`);
    card.tabIndex = 0;
    
    card.innerHTML = `
      <img src="${song.cover || placeholderCover}" alt="${song.title} cover" />
      <div class="song-title">${song.title}</div>
      <div class="song-artist">${song.artist}</div>
    `;
    
    // Play song when clicked
    card.addEventListener("click", () => {
      loadSong(index);
      isPlaying = true;
      audio.play()
        .then(() => {
          playBtn.textContent = "⏸";
          fullPlayBtn.textContent = "⏸";
        })
        .catch(error => {
          console.error("Playback failed:", error);
          alert("Could not play the song. The audio file may be missing.");
        });
    });
    
    // Also play on Enter key for accessibility
    card.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        loadSong(index);
        isPlaying = true;
        audio.play()
          .then(() => {
            playBtn.textContent = "⏸";
            fullPlayBtn.textContent = "⏸";
          })
          .catch(error => console.error("Playback failed:", error));
      }
    });
    
    container.appendChild(card);
  });
}

// Initialize the player
function initPlayer() {
  // Load first song
  loadSong(currentSongIndex);
  
  // Set initial volume
  audio.volume = volumeControl.value;
  
  // Populate song list
  populateSongList();
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Space to play/pause (when not focused on form elements)
    if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      togglePlay();
    }
    
    // Right arrow for next song
    if (e.code === 'ArrowRight') {
      nextSong();
    }
    
    // Left arrow for previous song
    if (e.code === 'ArrowLeft') {
      prevSong();
    }
  });
}

// Sync progress bars and time displays for both players
audio.addEventListener("loadedmetadata", () => {
  durationElem.textContent = formatTime(audio.duration);
  fullDuration.textContent = formatTime(audio.duration);
  progressBar.max = 100;
  fullPlayerProgressBar.max = 100;
});

audio.addEventListener("timeupdate", () => {
  currentTimeElem.textContent = formatTime(audio.currentTime);
  fullCurrentTime.textContent = formatTime(audio.currentTime);
  if (audio.duration) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    fullPlayerProgressBar.value = progress;
  }
});

// When song ends, play next one
audio.addEventListener("ended", nextSong);

// Seek audio when progress bars change
progressBar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
});

fullPlayerProgressBar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (fullPlayerProgressBar.value / 100) * audio.duration;
  }
});

// Volume controls sync
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
  fullPlayerVolumeControl.value = volumeControl.value;
  lastVolume = audio.volume; // Update last volume for mute toggle
});

fullPlayerVolumeControl.addEventListener("input", () => {
  audio.volume = fullPlayerVolumeControl.value;
  volumeControl.value = fullPlayerVolumeControl.value;
  lastVolume = audio.volume; // Update last volume for mute toggle
});

// Toggle mute when volume slider is clicked
volumeControl.addEventListener('click', (e) => {
  if (e.target === volumeControl) {
    increaseVolume();
  }
});

fullPlayerVolumeControl.addEventListener('click', (e) => {
  if (e.target === fullPlayerVolumeControl) {
    increaseVolume();
  }
});

// Clicking the mini player opens full player overlay
const player = document.getElementById("player");
const mainContent = document.querySelector('.main');
const sidebar = document.querySelector('.sidebar');
player.addEventListener("click", () => {
  fullPlayerOverlay.classList.add("active");
  mainContent.classList.add('main-blur');
  sidebar.classList.add('main-blur');
  document.body.style.overflow = "hidden";
});

// Close full player overlay
closeFullPlayerBtn.addEventListener("click", () => {
  fullPlayerOverlay.classList.remove("active");
  mainContent.classList.remove('main-blur');
  sidebar.classList.remove('main-blur');
  document.body.style.overflow = "";
});

// Prevent clicks on controls inside mini player from opening full player
const controls = document.querySelectorAll("#player .controls button, #player input");
controls.forEach(btn => btn.addEventListener("click", e => e.stopPropagation()));

// Also stop propagation for full player controls buttons (prev, play, next)
const fullControlsBtns = document.querySelectorAll("#fullPlayerControls button, #fullPlayerContent input");
fullControlsBtns.forEach(btn => btn.addEventListener("click", e => e.stopPropagation()));

// ===== NAVIGATION FUNCTIONALITY =====
const navHome = document.getElementById('nav-home');
const navSearch = document.getElementById('nav-search');
const navLibrary = document.getElementById('nav-library');
const contentArea = document.querySelector('.content');

// Function to load content
function loadContent(page) {
  // Remove active class from all nav items
  [navHome, navSearch, navLibrary, navSettings].forEach(item => {
    item.classList.remove('active');
  });

  // Add active class to clicked item
  document.getElementById(`nav-${page}`).classList.add('active');

  // Here you would typically fetch content from server
  // For this demo, we'll just show different text
  switch(page) {
    case 'home':
      contentArea.innerHTML = `
        <div class="song-list" id="allSongsContainer">
          <!-- Home content - song list will be populated by JS -->
        </div>
      `;
      populateSongList(); // Re-populate songs for home page
      break;
      
    case 'search':
      contentArea.innerHTML = `
        <div class="search-page">
          <h2>Search</h2>
          <input type="text" id="searchInput" placeholder="Artists, songs, or albums" />
          <div class="search-results">
            <!-- Search results would appear here -->
            <p>Search for music to see results</p>
          </div>
        </div>
      `;
      break;
      
    case 'library':
      contentArea.innerHTML = `
        <div class="library-page">
          <h2>Your Library</h2>
          <div class="playlists">
            <p>Your saved playlists will appear here</p>
            <!-- Playlist items would appear here -->
          </div>
        </div>
      `;
      break;
      
    case 'settings':
      // Settings is handled by the modal, so we don't change content here
      break;
  }
}

// Event listeners for navigation
navHome.addEventListener('click', (e) => {
  e.preventDefault();
  loadContent('home');
});

navSearch.addEventListener('click', (e) => {
  e.preventDefault();
  loadContent('search');
});

navLibrary.addEventListener('click', (e) => {
  e.preventDefault();
  loadContent('library');
});

// Initialize the player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initPlayer();
  loadContent('home'); // Load home content by default
});