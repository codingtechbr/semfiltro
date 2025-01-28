document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const moreText = this.previousElementSibling;
            if (moreText.style.display === 'none' || !moreText.style.display) {
                moreText.style.display = 'block';
                this.textContent = 'Leia menos...';
            } else {
                moreText.style.display = 'none';
                this.textContent = 'Leia mais...';
            }
        });
    });
});
document.getElementById('container-politica').innerHTML = '';