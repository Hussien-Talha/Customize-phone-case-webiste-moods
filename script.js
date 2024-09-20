// /static/js/script.js
document.getElementById('image-upload').addEventListener('change', function(event) {
    const phoneCaseImage = document.getElementById('phone-case-image');
    const reader = new FileReader();
    
    reader.onload = function(e) {
        phoneCaseImage.src = e.target.result;
        // Additional logic for positioning and resizing images
    };
    
    reader.readAsDataURL(event.target.files[0]);
});

// Add event listeners for other customization options...