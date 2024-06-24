// Function to submit contact form
function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send form data to backend for processing
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        event.target.reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to add new project
function addNewProject() {
    // Code to add new project (to be implemented)
    alert('Thêm dự án mới');
}

// Function to show messages
function showMessages() {
    // Code to show messages (to be implemented)
    alert('Xem tin nhắn đã nhận');
}

// Function to show section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.parentElement.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.parentElement.style.display = 'block';
        sectionToShow.parentElement.style.opacity = '1';
        sectionToShow.style.display = 'block';
    }
}

// Function to show project details
function showProjectDetails(projectId) {
    const projectDetails = {
        project1: {
            title: "Gà kho gừng ProVip",
            image: "image4.png", 
            steps: [
                "Sơ chế thịt gà cho sạch và chặt thành từng cục vừa ăn. Gừng cạo sạch vỏ và thái sợi",
                "Ướp thịt gà trong một cái tô cùng với một ít bột ngọt, hạt nêm, muối, nước mắm, đường, tương ớt, nước màu trong 10 -15 phút.",
                "Bắt nồi lên bếp, phi vàng tỏi rồi cho thịt gà đã ướp vào nấu trong 2 phút cho thêm nước lọc vào vừa ngập thịt gà. ",
                "Tiếp tục nấu trong khoảng 20 phút ở lửa vừa, nêm nếm lại cho vừa ăn rồi cho gừng và tiêu vào hoàn thành món ăn."
            ],
        },
        project2: {
            title: "Cắm cơm VIP",
            steps: [
                "Bạn dùng cốc đi kèm nồi cơm điện đong gạo, đong 1 cốc gạo khoảng 160gr cho 2 chén cơm.",
                "Cho nước vào nồi cơm đã có gạo, dùng tay nhẹ nhàng vo gạo rồi khuấy đều để cát bụi, vỏ trấu, sạn còn bám trên hạt gạo, chắt nước ra rồi tiếp tục chế nước sạch vào.",
                "Tùy loại gạo bạn nấu, và tùy bạn muốn ăn cơm nhão, khô hay vừa mà thêm nước sao cho phù hợp",
                "Lau bên ngoài lòng nồi bằng khăn khô, đảm bảo bề mặt nồi khô ráo, đặt lòng nồi vào trong thân nồi, xoay nhẹ sao cho đáy nồi tiếp xúc trực tiếp với mâm nhiệt. Đóng nắp lại, cắm điện và bật công tắc."
            ],
            image: "image3.png"
        },
        project3: {
            title: "Rau luộc SVIP",
            steps: [
                "Chuẩn bị các nguyên liệu sẵn sàng",
                "Nấu sôi nước, cho vào nồi ít muối và chút nước cốt chanh (như vậy sẽ giữ được màu xanh của rau tươi ngon",
                "cho rau vào luộc chín, vớt ra rổ inox cho ráo rồi xếp lên đĩa",
                "Cho nước luộc rau vào tô, vắt thêm nước cốt chanh và nêm thêm xíu muối (có thể thêm ít bột ngọt tuỳ thích nhé) sao cho vừa khẩu vị."
            ],
            image: "image2.png"
        },
        project4: {
            title: "Trứng luộc 2 lòng đỏ <@@> ",
            steps: [
                "Lấy sẵn một nồi nước lạnh. Nhẹ nhàng thả trứng vào nồi",
                "Bật bếp với lửa vừa. Khi nước đạt đến mức sôi nhỏ lửa, hãy bắt đầu hẹn giờ để bạn có thể định giờ chính xác cho quá trình nấu. Nếu bạn nhẹ nhàng khuấy trứng theo chiều kim đồng hồ, chuyển động của nước sẽ giúp lòng đỏ trứng di chuyển về vị trí trung tâm của quả trứng.",
                "Đun nhỏ lửa trứng trong nồi trong khoảng thời gian phù hợp với mục đích sử dụng trứng của bạn",
                "Vớt trứng ra một bát nước lạnh ngâm từ 5 – 10 phút rồi bóc trứng là có thể dùng được."
            ],
            image: "image1.png" // Đường dẫn đến hình ảnh bánh bao nhân thịt
        }
    };

    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSteps = document.getElementById('modalSteps');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = projectDetails[projectId].title;

    // Xử lý các bước nấu ăn
    let stepsHtml = '';
    projectDetails[projectId].steps.forEach((step, index) => {
        stepsHtml += `<p><strong>Bước ${index + 1}:</strong> ${step}</p>`;
    });
    modalSteps.innerHTML = stepsHtml;

    // Đặt hình ảnh của món ăn
    modalImage.src = projectDetails[projectId].image;
    modalImage.alt = `Ảnh ${projectDetails[projectId].title}`;

    // Hiển thị modal
    modal.style.display = 'block';

    // Xử lý sự kiện đóng modal khi nhấn vào nút đóng
    function closeModal() {
        modal.style.display = 'none';
    }

    // Xử lý sự kiện đóng modal khi nhấn ra ngoài vùng modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
