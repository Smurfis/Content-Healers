  function initMap() {
    const placeId = 'YOUR_PLACE_ID';
    const reviewsContainer = document.getElementById('reviews-container');

    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({ placeId: placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        place.reviews.forEach(review => {
          const reviewElement = document.createElement('div');
          reviewElement.classList.add('review');
          reviewElement.innerHTML = `
            <div class="review-author">${review.author_name}</div>
            <div class="review-text">${review.text}</div>
          `;
          reviewsContainer.appendChild(reviewElement);
        });
      } else {
        console.error('Error fetching reviews:', status);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    initMap();
  });
