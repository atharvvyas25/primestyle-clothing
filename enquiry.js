
document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const fileInput = document.getElementById("imageUpload");
    let imageURL = "No image uploaded";

    if (fileInput.files.length > 0) {
        imageURL = await uploadToCloudinary(fileInput.files[0]);
    }

    // Put image link in hidden input
    document.getElementById("imageUrlInput").value = imageURL;

    // Now submit the form
    e.target.submit();
});

