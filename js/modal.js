// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // Đảm bảo modal được hiển thị
        modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Add fade-in animation
        setTimeout(() => {
            modal.classList.add('fade-in');
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');

        // Remove modal after animation
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('show', 'fade-out');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 300);
    }
}

// Đảm bảo tất cả modal được ẩn khi trang load
document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
        modal.classList.remove('show', 'fade-in', 'fade-out');
    });
});

// Close modal when clicking outside of modal content
let isDragging = false;

var swiper = new Swiper(".mySwiper", {
    on: {
        touchMove: () => { isDragging = true; },
        touchEnd: () => { setTimeout(() => isDragging = false, 50); }
    }
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal') && !isDragging) {
            closeModal(this.id);
        }
    });
});



// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.classList.contains('show')) {
                const modalId = modal.id;
                closeModal(modalId);
            }
        });
    }
});