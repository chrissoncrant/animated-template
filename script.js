const h1 = document.querySelector('h1');
console.log(h1);

h1.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });