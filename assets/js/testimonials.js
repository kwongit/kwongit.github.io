document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#testimonials-content");

  try {
    // Fetch the JSON file
    const response = await fetch("./assets/recommendations.json");

    // Handle HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON
    const data = await response.json();

    // Update the DOM
    container.innerHTML = data
      .map(
        (rec) => `
          <blockquote>
            <p>"${rec.recommendation}"</p>
            <footer>${rec.name}, ${rec.jobTitle}</footer>
          </blockquote>
        `
      )
      .join("");
  } catch (error) {
    // Handle errors
    container.innerHTML = `<p>Error loading recommendations: ${error.message}</p>`;
  }
});
