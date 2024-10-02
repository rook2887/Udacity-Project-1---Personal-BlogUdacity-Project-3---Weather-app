/* Global Variables */
// Baseurl + My API Key
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = ;

// Async function to fetch weather data based on zip code.
// I first defined that the function is asynchronous with async.
// I told the program to wait for the fetch result but also add await to tells the code to wait for the response from the API before moving on to the next line since it can take a awhile.
async function getWeatherData(zip) {
  const response = await fetch(
    `${baseURL}?zip=${zip}&appid=${apiKey}&units=metric`
  );

  // simple conditional msg in case response didn't happen for any reason.
  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }

  // convert the response body into JSON format and also await so the program wait until the conversion happens before moving on.
  const data = await response.json();
  return data; // Return the fetched data
}

// Event listener for the generate button
document.getElementById("generate").addEventListener("click", async () => {
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  // try and catch for catching errors while fetching weather data
  try {
    const weatherData = await getWeatherData(zipCode);
    const temperature = weatherData.main.temp;
    const date = new Date().toLocaleDateString();

    //   updating the DOM

    document.getElementById("date").innerText = `Date: ${date}`;
    // prettier-ignore
    document.getElementById("temp").innerText = `Temperature: ${temperature} °C`;
    document.getElementById("content").innerText = `Feelings: ${feelings}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});
