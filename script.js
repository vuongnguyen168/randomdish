const apiKey = '8300b2d3c6f14f92bdf2ca403f3b75b0'; // Thay thế YOUR_API_KEY bằng API Key của bạn

async function fetchDish() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
    const data = await response.json();
    return data.recipes[0]; // Lấy món ăn đầu tiên từ kết quả
}

async function displayDish() {
    const dish = await fetchDish();
    document.getElementById('dish-name').textContent = dish.title;
    document.getElementById('image').src=dish.image
    document.getElementById('dish-description').innerHTML = dish.summary; // Sử dụng innerHTML để xử lý HTML
}

window.onload = displayDish;
