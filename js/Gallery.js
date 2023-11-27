// I have set it up this way, because we can't read file system due to browser limitations.
//In a server side implementation, I would return a list of all files in the gallery, and display them automatically.
// In this case, I know the number of files and naming structure, so a simple loop is used to illustrate the concept.


document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('imageGallery');

    const totalImages = 42;
    for (let i = 1; i <= totalImages; i++) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-md-6 col-lg-4';

        const img = document.createElement('img');
        img.src = `Media/ImageGallery/${i}.jpg`;
        img.className = 'img-fluid';
        img.alt = `Image ${i}`;

        colDiv.appendChild(img);
        gallery.appendChild(colDiv);
    }
});


