const categoryList = document.querySelector('#categories');
const itemsCategories = categoryList.querySelectorAll('.item');
const numberOfCategories = itemsCategories.length;

console.log(`Number of categories: ${numberOfCategories}`);

itemsCategories.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elements}`);
})