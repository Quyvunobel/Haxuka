const tips = [
    {
        text: "Sử dụng lửa nhỏ: Để tránh đồ ăn bị cháy, hãy nấu ở lửa nhỏ và kiểm soát nhiệt độ.",
        img: "vnq.jpg"
    },
    {
        text: "Đảo đều: Thường xuyên đảo đều thực phẩm để nhiệt độ phân bố đều.",
        img: "vnq.jpg"
    },
    {
        text: "Sử dụng nồi, chảo chất lượng: Chọn nồi và chảo có chất lượng tốt để nhiệt độ được truyền tải đều.",
        img: "vnq.jpg"
    },
    {
        text: "Thêm nước hoặc dầu: Đảm bảo thực phẩm không bị khô bằng cách thêm một chút nước hoặc dầu.",
        img: "vnq.jpg"
    },
    {
        text: "Giám sát kỹ: Luôn kiểm tra thực phẩm thường xuyên để tránh bị cháy.",
        img: "vnq.jpg"
    },
    {
        text: "Sử dụng đồng hồ hẹn giờ: Đặt hẹn giờ để nhắc nhở kiểm tra thực phẩm đúng lúc.",
        img: "vnq.jpg"
    }
];

const tipsList = document.getElementById('tips-list');

tips.forEach(tip => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    const text = document.createElement('div');

    img.src = tip.img;
    img.alt = "Hình minh họa";

    text.textContent = tip.text;
    text.classList.add('tip-text');

    listItem.appendChild(img);
    listItem.appendChild(text);
    tipsList.appendChild(listItem);
});
