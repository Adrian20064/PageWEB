const form = document.getElementById("form_input");
const result_message = document.getElementById("response_message");

//for storing city  and result message
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = document.getElementById("city_mag").value;

  fetch("city_storage.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city: city }),
  })
    .then((res) => res.text()) // get raw response
    .then((text) => {
      console.log(text); // see what PHP actually returns
    })
    .catch((error) => console.error(error));
});
