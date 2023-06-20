$(document).ready(function() {
  // Function to render the data
  function renderData(data, containerId) {
    const container = document.getElementById(containerId);

    const row = document.createElement("div");
    row.classList.add("row");

    data.forEach(item => {
      const col = document.createElement("div");
      col.classList.add("col-md-3");
      col.innerHTML = `
      <div class="category">
        <h3>${item.name}</h3>
        <p>Description of ${item.name}</p>
        <a href="#" class="btn">Shop Now</a>
      </div>
    `;
      row.appendChild(col);
    });

    container.appendChild(row);
  }


// Fetch data for categories
  fetch("categories.json")
    .then(response => response.json())
    .then(categories => {
      renderData(categories, "featuredCategories");
    })
    .catch(error => {
      // Handle any errors
      console.error("Error:", error);
    });

// Fetch data for popular
  fetch("popular.json")
    .then(response => response.json())
    .then(popular => {
      renderData(popular, "popularCategories");
    })
    .catch(error => {
      // Handle any errors
      console.error("Error:", error);
    });

// Fetch data for deals
  fetch("deals.json")
    .then(response => response.json())
    .then(deals => {
      renderData(deals, "dealCategories");
    })
    .catch(error => {
      // Handle any errors
      console.error("Error:", error);
    });

});

$(document).ready(function() {
  $('#carouselExample').carousel({
    interval: 2000 // Set the interval time in milliseconds (e.g., 2000 = 2 seconds)
  });
});
