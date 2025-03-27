javascript
console.log('Webpack is working!');

if (module.hot) {
    module.hot.accept(); 
  }

  fetch('/api/posts')               
  .then(response => response.json())
  .then(data => {
    console.log('Posts from API:', data);

    data.forEach(post => console.log(post.title));
  })
  .catch(error => console.error('Error fetching posts:', error));
