const form = document.getElementById("enquiryForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];

    // Upload to Cloudinary FIRST
    if (file) {
        const imageUrl = await uploadToCloudinary(file);
        document.getElementById("imageUrlInput").value = imageUrl;
    }

    // Netlify ke form ko normally submit kar do
    form.submit();
});
