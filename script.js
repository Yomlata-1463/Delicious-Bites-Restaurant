document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('formResponse');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            fetch('contact.php', {
                method: 'POST',
                body: formData
            })
            .then(res => res.text())
            .then(data => {
                responseDiv.textContent = data;
                form.reset();
            })
            .catch(() => {
                responseDiv.textContent = 'There was an error sending your message.';
            });
        });
    }
}); 