
const categoriesEl = document.querySelector(`#categories`);
const itemsEl = document.querySelectorAll(`.item`);


const categoriesLiLengthEl = categoriesEl.children.length;
console.log(` Number of categories: ${categoriesLiLengthEl}`);
  

itemsEl.forEach(element => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} /  Elements: ${itemsLength}`);
  
});

// itemsEl.forEach(element => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} /  Elements: ${itemsLength}`);
  
// });

