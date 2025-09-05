const form = document.getElementById("form_input");
const result_message = document.getElementById("response_message");

//for storing city  and result message
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
    .then((res) => res.json())
    .then((data) => {
      form.reset();
      if (data.success) {
        result_message.innerHTML = `<p>City "${city}" has been stored successfully!</p>`;
      } else {
        result_message.innerHTML = `<p>Error: ${data.message}</p>`;
      }
    })
    .catch(
      (error) => (result_message.innerHTML = `<p>Error: ${error.message}</p>`)
    );
});
