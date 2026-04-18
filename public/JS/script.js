// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  // Auto-trim username and email fields on change
  const trimInputs = document.querySelectorAll('input[name="username"], input[name="email"]');
  trimInputs.forEach(input => {
    input.addEventListener('blur', function() {
      this.value = this.value.trim();
    });
  });
})()

// Password toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-password');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.previousElementSibling; // Get the input field
      const icon = this.querySelector('i');

      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });

  // Favorite button functionality
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  favoriteButtons.forEach(btn => {
    btn.addEventListener('click', async function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const listingId = this.getAttribute('data-listing-id');
      const isFavorited = this.classList.contains('favorited');
      const icon = this.querySelector('i');
      
      try {
        const endpoint = isFavorited ? `/favorites/${listingId}/remove` : `/favorites/${listingId}/add`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (response.ok) {
          this.classList.toggle('favorited');
          if (this.classList.contains('favorited')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            this.style.backgroundColor = '#fe424d';
            this.style.color = 'white';
          } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            this.style.backgroundColor = '';
            this.style.color = '';
            
            // If on favorites page, remove the parent card with an animation
            if (window.location.pathname === '/favorites') {
              const card = this.closest('.col');
              card.style.transition = 'all 0.5s ease';
              card.style.opacity = '0';
              card.style.transform = 'scale(0.8)';
              setTimeout(() => card.remove(), 500);
            }
          }
          
          this.classList.add('clicked');
          setTimeout(() => this.classList.remove('clicked'), 500);
        } else if (response.status === 401) {
          window.location.href = '/login';
        }
      } catch (err) {
        console.error('Error toggling favorite:', err);
      }
    });
  });

  // Share button functionality
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', async function(e) {
      e.preventDefault();
      
      const title = document.querySelector('.detail-title')?.textContent || 'Check out this amazing place on WanderLand!';
      const url = window.location.href;

      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: 'I found this beautiful property on WanderLand and thought you might like it!',
            url: url
          });
        } catch (err) {
          console.error('Error sharing:', err);
        }
      } else {
        // Fallback: Copy to clipboard
        try {
          await navigator.clipboard.writeText(url);
          // Temporary UI feedback
          const originalContent = this.innerHTML;
          this.innerHTML = '<i class="fa-solid fa-check"></i>';
          this.style.color = '#28a745';
          setTimeout(() => {
            this.innerHTML = originalContent;
            this.style.color = '';
          }, 2000);
          
          // Optionally trigger a custom toast/alert
          alert('Link copied to clipboard!');
        } catch (err) {
          console.error('Failed to copy link:', err);
        }
      }
    });
  });
});
