const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const uploadImage = document.getElementById('upload-image');
const downloadBtn = document.getElementById('download-btn');
const whatsappLink = document.getElementById('whatsapp-link');
const phoneCaseImage = new Image();

phoneCaseImage.src = 'phone-case-template.png';

uploadImage.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(phoneCaseImage, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'custom-phone-case.png';
    link.href = canvas.toDataURL();
    link.click();
});

whatsappLink.addEventListener('click', () => {
    const dataURL = canvas.toDataURL();
    const encodedImage = encodeURIComponent(dataURL);
    const whatsappNumber = "201501040296";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Check out my custom phone case!&image=${encodedImage}`;
    window.open(whatsappURL, '_blank');
});
