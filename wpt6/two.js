const im1 = document.images[0];	
const im2 = document.images[1];
const im3 = document.images[2];

// Function to change the source of an image on mouse over
const handleMouseOver = (image, newSrc) => {
    image.src = newSrc;
};

// Function to revert the source of an image on mouse out
const handleMouseOut = (image, originalSrc) => {
    image.src = originalSrc;
};

// Adding event listeners to the first image
im1.addEventListener('mouseover', () => handleMouseOver(im1, "./images/download (3).jfif"));
im1.addEventListener('mouseout', () => handleMouseOut(im1, "./images/download (2).jfif"));

// Repeat for the other images if necessary
// Example for im2 and im3 (modify the paths as needed)
im2.addEventListener('mouseover', () => handleMouseOver(im2, "./images/download (2).jfif"));
im2.addEventListener('mouseout', () => handleMouseOut(im2, "/images/download (4).jfif"));

im3.addEventListener('mouseover', () => handleMouseOver(im3, "/images/download (4).jfif"));
im3.addEventListener('mouseout', () => handleMouseOut(im3, "./images/download (3).jfif"));
