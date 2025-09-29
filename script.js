// Toggle Theme Function
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    }
});

// Add click animations to novel cards
document.addEventListener('DOMContentLoaded', () => {
    const novelCards = document.querySelectorAll('.novel-card');
    
    novelCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            console.log('Searching for:', searchQuery);
            // Add your search logic here
            alert(`Mencari: ${searchQuery}`);
        }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});

// Genre button click handlers
document.addEventListener('DOMContentLoaded', () => {
    const genreButtons = document.querySelectorAll('.genre-btn');
    
    genreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const genre = this.textContent;
            console.log('Genre selected:', genre);
            // Add your genre filter logic here
            alert(`Filter genre: ${genre}`);
        });
    });
});

// Release item click handlers
document.addEventListener('DOMContentLoaded', () => {
    const releaseItems = document.querySelectorAll('.release-item');
    
    releaseItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.release-title').textContent;
            const chapter = this.querySelector('.release-chapter').textContent;
            console.log('Opening:', title, chapter);
            // Add your chapter navigation logic here
            alert(`Membuka: ${title} - ${chapter}`);
        });
    });
});