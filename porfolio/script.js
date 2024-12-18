// navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');d

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// pop up image 

document.querySelectorAll('.btn.view-more-btn').forEach(btn => {
    btn.onclick = function(event) {
        event.preventDefault(); 
        const card = this.closest('.card'); 
        const image = card.querySelector('img'); 
        const imgSrc = image.getAttribute('src'); 
        
        // Tampilkan popup dengan gambar yang sesuai
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = imgSrc;
    };
});

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
};
