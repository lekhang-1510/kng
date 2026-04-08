/**
 * -------------------------------------------------
 * JAVASCRIPT LOGIC: KNG MODERN DIGITAL LIBRARY
 * -------------------------------------------------
 * Tính năng: Search Real-time, Lọc thể loại, Modal Popup, Font-size Control
 * Author: Antigravity (Senior Frontend Developer)
 */

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop";

// 1. DỮ LIỆU CÂU TRUYỆN (16 Stories)
const stories = [
    {
        id: 1,
        title: "Cậu bé và cuốn sách",
        category: "Thiếu nhi",
        author: "Minh Quân",
        image: "images/boy_reading.png",
        desc: "Hành trình kỳ diệu của một cậu bé khi tìm thấy cuốn sách cũ biết nói trong gác mái.",
        content: "<p>Trong căn gác mái đầy bụi bặm, Tùng tìm thấy một cuốn sách bìa da cũ kỹ. Khi em chạm tay vào, cuốn sách khẽ rung động và cất tiếng chào...</p><p>Cuốn sách dẫn em đến những vùng đất chưa từng có trên bản đồ, nơi em học được lòng dũng cảm và sự tử tế. Em nhận ra rằng mỗi cuốn sách là một thế giới đang chờ được khám phá.</p>"
    },
    {
        id: 2,
        title: "Chú mèo thư viện",
        category: "Thiếu nhi",
        author: "Hà Phương",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2543&auto=format&fit=crop",
        desc: "Câu chuyện về chú mèo Mun thông thái luôn biết cách chọn sách phù hợp cho mỗi người.",
        content: "<p>Tại thư viện KNG, có một 'thủ thư' đặc biệt tên là Mun. Chú là một chú mèo đen với đôi mắt vàng thông thái...</p><p>Mun không biết nói, nhưng chỉ cần chú dụi đầu vào chân bạn và dẫn bạn đến một kệ sách nào đó, bạn sẽ tìm thấy câu trả lời cho mọi nỗi buồn của mình. Mun dạy chúng ta rằng sự im lặng và lắng nghe đôi khi quan trọng hơn ngàn lời nói.</p>"
    },
    {
        id: 3,
        title: "Cánh cửa bí mật",
        category: "Thiếu nhi",
        author: "Thanh Hằng",
        image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2670&auto=format&fit=crop",
        desc: "Phía sau cánh cửa nhỏ dưới chân cầu thang là một thế giới đầy màu sắc mà chỉ trẻ em mới thấy.",
        content: "<p>Cánh cửa nhỏ xíu chỉ cao bằng nửa thước nằm khuất sau những thùng các-tông cũ. Một ngày nọ, nó khẽ mở ra...</p><p>Đó là lối vào của Vương quốc Sắc màu, nơi những giấc mơ được dệt nên từ những sợi chỉ cầu vồng lung linh nhất. Ở đó, trí tưởng tưởng của bạn là giới hạn duy nhất.</p>"
    },
    {
        id: 4,
        title: "Khu rừng ánh sáng",
        category: "Thiếu nhi",
        author: "Bảo Lâm",
        image: "https://images.unsplash.com/photo-1440613905118-99b921706b5c?q=80&w=2670&auto=format&fit=crop",
        desc: "Nơi những cái cây phát sáng theo nhịp đập trái tim của những người thiện lương.",
        content: "<p>Sâu trong rừng già, có một thung lũng bí ẩn hiện ra vào mỗi đêm trăng tròn. Những tán lá tỏa ra ánh sáng xanh dịu nhẹ...</p><p>Ánh sáng ấy không chỉ dùng để soi đường, mà nó còn chữa lành những tổn thương trong tâm hồn của bất kỳ ai lạc bước vào đây. Khu rừng dạy chúng ta trân trọng thiên nhiên và giữ vững sự lương thiện trong tim.</p>"
    },
    {
        id: 5,
        title: "Cuốn sách phát sáng",
        category: "Bí ẩn",
        author: "Trần Thế",
        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2670&auto=format&fit=crop",
        desc: "Cuốn sách chỉ hiển thị chữ viết khi có ánh trăng chiếu rọi trực tiếp vào những trang giấy.",
        content: "<p>Giáo sư khảo cổ Jones tìm thấy nó trong một ngôi mộ cổ ở Ai Cập. Những trang giấy trắng tinh không một dấu vết...</p><p>Trong một đêm rằm, ánh trăng bạc rọi xuống, những ký tự cổ đại bắt đầu hiện lên như những đốm lửa nhỏ, hé lộ mật mã của một kho báu bị lãng quên. Nhưng kho báu thực sự không phải là vàng, mà là trí tuệ của người xưa.</p>"
    },
    {
        id: 6,
        title: "Bóng đen cuối hành lang",
        category: "Bí ẩn",
        author: "Arthur L.",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2574&auto=format&fit=crop",
        desc: "Những tiếng bước chân lạ kỳ và bóng đen bí ẩn xuất hiện mỗi khi đồng hồ điểm 12 giờ đêm.",
        content: "<p>Hành lang của biệt thự cổ luôn vắng lặng, trừ lúc nửa đêm. Những tiếng 'cộp... cộp...' vang lên đều đặn...</p><p>Không ai từng thấy mặt bóng đen đó, nhưng người ta nói rằng đó là người bảo vệ cuối cùng của dòng họ đang tìm kiếm một lá thư bị thất lạc. Câu chuyện nhắc nhở chúng ta về những lời hứa chưa thực hiện.</p>"
    },
    {
        id: 7,
        title: "Người gác thư viện",
        category: "Bí ẩn",
        author: "Vũ Phong",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2670&auto=format&fit=crop",
        desc: "Ông già mù gác thư viện có thể lấy đúng cuốn sách bất kỳ chỉ dựa vào mùi hương của nó.",
        content: "<p>Ông lão không bao giờ nói, đôi mắt ông phủ một lớp màng trắng mờ. Nhưng khi bạn nói về nỗi lòng mình, ông sẽ mang đến cho bạn một cuốn sách...</p><p>Sách của ông không có tiêu đề, chỉ có những câu chuyện dường như được viết riêng cho cuộc đời bạn. Ông là người giữ gìn những linh hồn của tri thức xưa.</p>"
    },
    {
        id: 8,
        title: "Đồng hồ không kim",
        category: "Bí ẩn",
        author: "Kim Anh",
        image: "https://images.unsplash.com/photo-1508108712903-49bc336fb190?q=80&w=2626&auto=format&fit=crop",
        desc: "Chiếc đồng hồ bỏ túi lạ lùng không có kim, nhưng nó luôn báo đúng lúc nguy hiểm sắp xảy ra.",
        content: "<p>Nó không chạy theo giây hay phút, nó chạy theo nhịp đập của định mệnh. Khi mặt đồng hồ rung lên dữ dội, một sự kiện lớn sắp đến...</p><p>Sở hữu nó là một món quà, nhưng cũng là một lời nguyền đối với người biết trước quá nhiều về tương lai. Thời gian là một dòng chảy không thể ngăn cản.</p>"
    },
    {
        id: 9,
        title: "Chiếc vé đọc sách",
        category: "Cảm hứng",
        author: "Lê Minh",
        image: "https://images.unsplash.com/photo-1474487056289-622ad5096179?q=80&w=2500&auto=format&fit=crop",
        desc: "Tấm vé vàng may mắn đưa một cô bé nghèo đến với thư viện vĩ đại nhất nhân loại.",
        content: "<p>Mai chỉ có một ước mơ: được đọc tất cả những cuốn sách trên đời. Tấm vé may mắn trong ổ bánh mì đã thực hiện điều đó...</p><p>Tại đây, cô nhận ra rằng tri thức chính là chiếc chìa khóa duy nhất giúp cô thoát khỏi cái nghèo và xây dựng ước mơ của chính mình cho thế hệ mai sau.</p>"
    },
    {
        id: 10,
        title: "Ước mơ từ trang giấy",
        category: "Cảm hứng",
        author: "Hoàng Lan",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2670&auto=format&fit=crop",
        desc: "Từ những nét vẽ và câu chuyện vụng về, một cậu bé đã trở thành nhà văn lừng danh thế giới.",
        content: "<p>Cậu bé ấy từng bị nói rằng chẳng bao giờ có thể viết lách. Nhưng trong tay cậu là những trang giấy trắng đầy đam mê...</p><p>Qua mỗi trang viết, cậu dệt nên những thế giới nơi những điều không thể trở thành có thể, truyền lửa cho hàng triệu bạn đọc trẻ tuổi khắp năm châu.</p>"
    },
    {
        id: 11,
        title: "Hành trình tri thức",
        category: "Cảm hứng",
        author: "Phan Hải",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2574&auto=format&fit=crop",
        desc: "Chuyến đi bộ xuyên qua 5 châu lục của một thanh niên chỉ với một chiếc balo đầy sách.",
        content: "<p>Không điện thoại, không tiền bạc, Hải lên đường chỉ với tri thức làm hành trang. Anh đi để học, đi để cảm nhận cuộc sống thực sự...</p><p>Mỗi trạm dừng chân, anh tặng lại một cuốn sách và nhận về một câu chuyện đời. Đó là hành trình tìm lại bản ngã giữa thế giới ồn ào và vội vã này.</p>"
    },
    {
        id: 12,
        title: "Ngày đầu đến thư viện",
        category: "Cảm hứng",
        author: "Thu Trang",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2694&auto=format&fit=crop",
        desc: "Kỷ niệm khó quên về lần đầu tiên chạm tay vào gáy sách thơm mùi giấy mới.",
        content: "<p>Ánh nắng vàng xuyên qua cửa kính, soi rọi những hạt bụi liti nhảy múa. Đó là ngày tôi bước vào thế giới sách...</p><p>Hương thơm của giấy, sự tĩnh lặng của không gian đã thay đổi hoàn toàn cách tôi nhìn nhận thế giới. Một tình yêu vĩnh cửu bắt đầu từ khoảnh khắc thiêng liêng đó.</p>"
    },
    {
        id: 13,
        title: "Một buổi chiều mưa",
        category: "Nổi bật",
        author: "Tô Hoài",
        image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2672&auto=format&fit=crop",
        desc: "Cuộc gặp gỡ tình cờ giữa hai người lạ dưới mái hiên của một hiệu sách cũ.",
        content: "<p>Tiếng mưa rơi đều trên mái tôn, anh và cô đứng lặng lẽ nhìn dòng người vội vã. Họ đã cùng nhau đọc chung một trang sách...</p><p>Đôi khi, những điều tuyệt vời nhất lại xảy ra vào những thời điểm chúng ta không mong đợi nhất, dưới một cơn mưa bất chợt của định mệnh.</p>"
    },
    {
        id: 14,
        title: "Ánh sáng cuối kệ sách",
        category: "Nổi bật",
        author: "Nam Cao",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2556&auto=format&fit=crop",
        desc: "Bí mật về một cuốn nhật ký được giấu kín sau lớp bụi của thời gian nghìn năm.",
        content: "<p>Sau kệ sách số 12, nằm sâu trong góc tối là một cuốn sổ bìa xanh. Nó mang thông điệp của một thiên tài bị lãng quên...</p><p>Thông điệp đó nhắc nhở chúng ta rằng: Ánh sáng thực sự nằm ở sự hiểu biết, chứ không phải ở những vầng hào quang hào nhoáng bên ngoài. Hãy đi sâu vào tri thức.</p>"
    },
    {
        id: 15,
        title: "Lời nhắn trong sách cũ",
        category: "Nổi bật",
        author: "Nguyễn Nhật Ánh",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop",
        desc: "Những dòng thư tay nồng nàn được tìm thấy sau hàng chục năm xa cách.",
        content: "<p>Gửi người em yêu dấu... Dòng chữ nghiêng nghiêng đã nhạt màu mực nhưng tình cảm vẫn vẹn nguyên như ngày đầu...</p><p>Đó là lời hứa về một mùa hè rực rỡ, một kỷ niệm đẹp về tuổi thanh xuân không bao giờ phai nhạt, dù thời gian có phủ bụi lên những trang giấy.</p>"
    },
    {
        id: 16,
        title: "Điều kỳ diệu của việc đọc",
        category: "Nổi bật",
        author: "Thạch Lam",
        image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2670&auto=format&fit=crop",
        desc: "Đọc một cuốn sách hay cũng giống như được sống thêm một cuộc sống rực rỡ khác.",
        content: "<p>Sách không chỉ là những dòng chữ trên giấy, nó là cửa sổ dẫn đến tâm hồn. Mỗi trang sách mở ra là một chân trời mới...</p><p>Hãy đọc để hiểu, đọc để yêu, và đọc để thấy rằng thế giới này đẹp đẽ và bao la hơn những gì chúng ta tưởng thấy qua đôi mắt thường.</p>"
    }
];

// 2. PHẦN TỬ DOM CẦN DÙNG
const featuredGrid = document.getElementById('featured-grid');
const storiesGrid = document.getElementById('stories-grid');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('reading-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const fontIncrease = document.getElementById('font-increase');
const fontDecrease = document.getElementById('font-decrease');
const filterTabs = document.querySelectorAll('.tab');
const navbar = document.getElementById('navbar');
const searchResults = document.getElementById('search-results');

// 3. LOGIC HIỂN THỊ (RENDERING)
let currentFontSize = 18; // Mặc định 1.1rem ~ 18px

function createCard(story) {
    const imageUrl = story.image || DEFAULT_IMAGE;
    return `
        <div class="story-card animate-up">
            <div class="card-img">
                <img src="${imageUrl}" alt="${story.title}" loading="lazy" onerror="this.src='${DEFAULT_IMAGE}'; this.onerror=null;">
                <span class="card-cat">${story.category}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${story.title}</h3>
                <p class="card-desc">${story.desc}</p>
                <button class="btn btn-primary" onclick="openStory(${story.id})">Đọc ngay</button>
            </div>
        </div>
    `;
}

function renderAll(data) {
    if (featuredGrid) {
        const featured = data.slice(0, 3);
        featuredGrid.innerHTML = featured.map(createCard).join('');
    }
    if (storiesGrid) {
        storiesGrid.innerHTML = data.map(createCard).join('');
    }
}

// 4. LOGIC TÌM KIẾM & LỌC (SEARCH & FILTER)
function handleSearch(e) {
    const term = e.target.value.toLowerCase().trim();
    const filtered = stories.filter(s =>
        s.title.toLowerCase().includes(term) ||
        s.author.toLowerCase().includes(term) ||
        s.desc.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term)
    );

    if (storiesGrid) {
        storiesGrid.innerHTML = filtered.map(createCard).join('');
    }

    if (!term) {
        searchResults.classList.add('hidden');
        return;
    }

    if (filtered.length > 0) {
        searchResults.innerHTML = filtered.map(s => {
            const imageUrl = s.image || DEFAULT_IMAGE;
            return `
                <div class="search-item" onclick="selectSearchResult(${s.id})">
                    <img src="${imageUrl}" alt="${s.title}" onerror="this.src='${DEFAULT_IMAGE}'; this.onerror=null;">
                    <div class="search-info">
                        <div class="search-meta">${s.category}</div>
                        <h4>${s.title}</h4>
                        <p class="search-desc">${s.desc}</p>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        searchResults.innerHTML = `<div class="no-results">Không tìm thấy truyện phù hợp cho "${term}"</div>`;
    }
    searchResults.classList.remove('hidden');
}

function selectSearchResult(id) {
    openStory(id);
    searchResults.classList.add('hidden');
    if (searchInput) searchInput.value = '';
}

function handleFilter(e) {
    const cat = e.target.getAttribute('data-cat');
    filterTabs.forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');

    const filtered = cat === 'all' ? stories : stories.filter(s => s.category === cat);
    if (storiesGrid) {
        storiesGrid.innerHTML = filtered.map(createCard).join('');
    }
}

// 5. LOGIC MODAL & FONT SIZE
function openStory(id) {
    const story = stories.find(s => s.id === id);
    if (!story) return;

    const imageUrl = story.image || DEFAULT_IMAGE;
    modalBody.innerHTML = `
        <div class="modal-info-grid">
            <img src="${imageUrl}" alt="${story.title}" class="modal-cover" onerror="this.src='${DEFAULT_IMAGE}'; this.onerror=null;">
            <div class="modal-text-wrap">
                <h1 class="modal-story-title">${story.title}</h1>
                <p style="color: var(--primary); font-weight: 600; margin-bottom: 20px;">Tác giả: ${story.author}</p>
                <div class="modal-story-content" id="story-content-text" style="font-size: ${currentFontSize}px">
                    ${story.content}
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeStory() {
    modal.classList.remove('active');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function updateFontSize(delta) {
    currentFontSize += delta;
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 32) currentFontSize = 32;

    const content = document.getElementById('story-content-text');
    if (content) {
        content.style.fontSize = `${currentFontSize}px`;
    }
}

// 8. HÀM MỞ TRUYỆN THEO TIÊU ĐỀ (DÙNG CHO MEGA MENU)
function openByTitle(title) {
    const story = stories.find(s => s.title === title);
    if (story) {
        openStory(story.id);
    }
}

// 9. HÀM LỌC TRUYỆN THEO THỂ LOẠI (DÙNG CHO NAVBAR)
function filterByCategory(catName) {
    const storiesSection = document.getElementById('all-stories');
    if (storiesSection) {
        storiesSection.scrollIntoView({ behavior: 'smooth' });
    }

    const targetTab = Array.from(filterTabs).find(t =>
        t.textContent.trim() === catName || t.getAttribute('data-cat') === catName
    );

    if (targetTab) {
        targetTab.click();
    } else {
        const filtered = (catName === 'all') ? stories : stories.filter(s => s.category === catName);
        if (storiesGrid) {
            storiesGrid.innerHTML = filtered.map(createCard).join('');
        }
        filterTabs.forEach(t => t.classList.remove('active'));
    }
}

// 6. HIỆU ỨNG NAVBAR & SCROLL TRACKING
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const sections = ['home', 'new-releases', 'all-stories', 'footer'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
});

// 7. KHỞI TẠO (INITIALIZATION)
document.addEventListener('DOMContentLoaded', () => {
    renderAll(stories);

    if (searchInput) searchInput.addEventListener('input', handleSearch);

    if (filterTabs) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', handleFilter);
        });
    }

    if (closeModal) closeModal.addEventListener('click', closeStory);

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const body = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        moonIcon?.classList.add('hidden');
        sunIcon?.classList.remove('hidden');
    }

    themeToggle?.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        moonIcon?.classList.toggle('hidden');
        sunIcon?.classList.toggle('hidden');
    });

    // Search Toggle in Navbar
    const searchToggle = document.getElementById('search-toggle');
    searchToggle?.addEventListener('click', () => {
        const searchSection = document.getElementById('search-section');
        searchSection?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            const searchInputBox = document.getElementById('search-input');
            searchInputBox?.focus();
        }, 600);
    });

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeStory();
        });
    }

    if (fontIncrease) fontIncrease.addEventListener('click', () => updateFontSize(2));
    if (fontDecrease) fontDecrease.addEventListener('click', () => updateFontSize(-2));

    document.addEventListener('click', (e) => {
        if (searchInput && searchResults && !searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
