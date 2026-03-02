// Danh sách 12 phần thưởng (Tất cả đã được thay bằng Mạnh Tân)
const gifts = [
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" },
    { name: "Mạnh Tân", image: "manh-tan.png" }
];

// Danh sách 12 màu nền gradient tương ứng trong CSS
const colors = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12'];

// Hàm logic
gifts.sort(() => Math.random() - 0.5);

const container = document.getElementById('boxContainer');
const progressText = document.getElementById('progressText');
let openedCount = 0;

// Hàm lặp tái tạo
for (let i = 0; i < 12; i++) {
    const box = document.createElement('div');
    // class basic ở chỗ này này tml
    box.className = `box unopened ${colors[i]}`;
    
    // HTML của hộp
    box.innerHTML = `
        <p class="box-num">Hộp #${i + 1}</p>
        <div class="box-icon">🎁</div>
        <h3 class="box-name" style="display: none;"></h3>
        <p class="box-status">Nhấn để mở</p>
    `;

    //click
    box.addEventListener('click', function() {
        
        if (this.classList.contains('opened')) return;

        // 1. Graphic effect 1
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // 2. Transform
        this.classList.remove('unopened');
        this.classList.add('opened');

        // 3. Class gif
        const gift = gifts[i];
        this.querySelector('.box-icon').innerHTML = `<img src="${gift.image}" alt="${gift.name}" class="gift-img">`;
        
        const nameEl = this.querySelector('.box-name');
        nameEl.innerText = gift.name;
        nameEl.style.display = 'block';
        
        this.querySelector('.box-status').innerText = 'Chưa tày rồi!';

        // 4. Hàm progress
        openedCount++;
        progressText.innerText = `Tiến trình: ${openedCount} / 12 hộp đã mất trink`;
    });

  
    container.appendChild(box);
}
