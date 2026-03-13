//Use template below to get started

require('dotenv').config();

const apiFetch = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    const firstFive = data.slice(0, 5)

    console.log("First Five Titles:", firstFive.map(post => post.title));


  } catch (error) {
      console.log("Error Attempting To Fetch Post Titles", error.message)
    }
};

apiFetch();