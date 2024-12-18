async function fetchAndDisplayAlbumsIds() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const albums = await response.json(); 

      console.log("Albums ids:");
      albums.forEach((album) => {
        console.log(`- ${album.id}`);
      });
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  }
  
fetchAndDisplayAlbumsIds();
