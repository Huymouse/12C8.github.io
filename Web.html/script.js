const btn = document.getElementById('colorBtn');
const greeting = document.getElementById('greeting');

// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    greeting.innerText = "Màu hiện tại: " + newColor;
});