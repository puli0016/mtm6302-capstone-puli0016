async function fetchData() {
    try {
      // Fetch data from the NASA API using a demo API key
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=BDZjDGpr1SVgzsvTYHWvezu98BeQyO7GYN6H4iAY&date=2021-01-01')
      
      // Parse the JSON response
      const data = await response.json()
      
      // Log the data to the console
      console.log(data)
      
      // Display the APOD data
      displayApod(data)
    } catch (error) {
      // Handle any errors that occur
      console.error('An unexpected error occurred:', error)
    }
}
  
// Function to display the Astronomy Picture of the Day (APOD) data
function displayApod(data) {
    // Set the image source to the APOD URL
    document.getElementById('picture').src = data.url
    
    // Set the text content for the title, date, and explanation
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = new Date(data.date).toLocaleDateString()
    document.querySelector('.description').innerHTML = data.explanation
}
  
// Call the fetchData function to initiate the process
window.onload = function() {
    fetchData()
}