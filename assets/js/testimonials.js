document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#testimonials-content");

  fetch("./assets/recommendations.json")
    .then((response) => response.json())
    .then((data) => {
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
    })
    .catch((error) => {
      container.innerHTML = `<p>Error loading recommendations: ${error.message}</p>`;
    });
});
