// ============================================
// script.js
// Handles: navbar toggle, hero search,
//          featured colleges on home page
// ============================================

// ------ NAVBAR HAMBURGER TOGGLE ------
// When user clicks the ☰ button on mobile,
// show/hide the nav links
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
}


// ------ FEATURED COLLEGES (Home Page) ------
// Pick first 6 colleges from the data array
// (collegeData is defined in colleges.js... but
//  since script.js runs on index.html and we
//  don't want to load all of colleges.js there,
//  we define a small featured list right here.)

const featuredColleges = [
  {
    id: 1,
    name: "Indian Institute of Technology, Bombay",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Government",
   img: "https://image-static.collegedunia.com/public/reviewPhotos/1103222/1000138985.jpg"
  },
  {
    id: 2,
    name: "Indian Institute of Science",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Deemed",
    img: "https://picsum.photos/400/250?random=2"
  },
  {
    id: 3,
    name: "Delhi Technological University",
    city: "New Delhi",
    state: "Delhi",
    type: "Government",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Anna University",
    city: "Chennai",
    state: "Tamil Nadu",
    type: "Government",
    img: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&h=200&fit=crop"
  },
  {
    id: 5,
    name: "Jadavpur University",
    city: "Kolkata",
    state: "West Bengal",
    type: "Government",
    img: "https://imgs.search.brave.com/-HN2tcj-YaHHW4r6c2lfbi91jUI9ar4WT642BBmJvOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZiL0phZGF2cHVy/X1VuaXZlcnNpdHlf/TmF0aW9uYWxfSW5z/dHJ1bWVudHNfQ2Ft/cHVzLmpwZw"
  },
  {
    id: 6,
    name: "BITS Pilani",
    city: "Pilani",
    state: "Rajasthan",
    type: "Deemed",
    img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=200&fit=crop"
  }
];

// Render featured college cards on home page
const featuredContainer = document.getElementById("featuredCards");
if (featuredContainer) {
  featuredColleges.forEach(function (college) {
    featuredContainer.innerHTML += `
      <div class="card">
        <img class="card-img" src="${college.img}" alt="${college.name}" loading="lazy" />
        <div class="card-body">
          <span class="card-type">${college.type}</span>
          <p class="card-name">${college.name}</p>
          <p class="card-location">📍 ${college.city}, ${college.state}</p>
          <a href="details.html?id=${college.id}" class="card-btn">View Details</a>
        </div>
      </div>
    `;
  });
}


// ------ HERO SEARCH ------
// Redirects user to colleges.html with the
// search term passed in the URL
function doHeroSearch() {
  const query = document.getElementById("heroSearch").value.trim();
  if (query) {
    // Go to colleges page and pass the search query as a URL parameter
    window.location.href = "colleges.html?search=" + encodeURIComponent(query);
  } else {
    window.location.href = "colleges.html";
  }
}

// Also trigger search on Enter key press
const heroSearchInput = document.getElementById("heroSearch");
if (heroSearchInput) {
  heroSearchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") doHeroSearch();
  });
}