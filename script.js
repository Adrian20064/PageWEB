const form = document.getElementById("form_input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = document.getElementById("city_mag").value;

  fetch("city_storage.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ city: city }),
  })
    .then(() => {
      form.reset();
    })
    .catch((error) => html`<p>Error: ${error.message}</p>`);
});
