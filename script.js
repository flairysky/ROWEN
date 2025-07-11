/* Basic Reset */
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
}

nav ul li {
    position: relative;
}

nav ul li a {
    text-decoration: none;
    color: #003366;
    padding: 5px;
    display: block;
    font-family: 'Inter', sans-serif;
}

/* Dropdown styling */
.dropdown-content {
    display: none; /* Initially hidden */
    position: absolute;
    background-color: #003366;
    min-width: 200px;
    padding: 0;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 10;
}

.dropdown-content li {
    width: 100%;
}

.dropdown-content li a {
    color: white;
    padding: 10px;
    display: block;
}

.dropdown-content li a:hover {
    background-color: #005599;
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-content {
    display: block;
}


<script>
const testimonials = [
  {
    author: "Martin",
    text: `Podpora Success Education ve výběru vysoké školy a následně během přípravy mé přihlášky na studium drasticky zlepšila její celkovou kvalitu a pomohla mi dostat se na univerzitu mých snů.<br><br>
    Především podpora lidí, kteří byly v přihlašování na nejlepší vysoké školy úspěšní, mi dodala tížený klid v průběhu přihlašovacího procesu.`
  },
  {
    author: "Tereza",
    text: `Díky Success Education jsem získala jasnou představu o tom, jaké kroky musím udělat, abych byla úspěšná při přijímacím řízení. Oceňuji jejich osobní přístup a podporu během celého procesu.`
  },
  {
    author: "David",
    text: `Velice si vážím trpělivosti a profesionality týmu Success Education. Pomohli mi se vším od výběru školy až po psaní motivačního dopisu.`
  }
];

let current = 0;

function updateTestimonial(idx) {
  const testimonial = testimonials[idx];
  document.querySelector('.testimonial-author').textContent = testimonial.author;
  document.querySelector('.testimonial-text').innerHTML = testimonial.text;
}

document.querySelector('.left-arrow').onclick = function() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(current);
};

document.querySelector('.right-arrow').onclick = function() {
  current = (current + 1) % testimonials.length;
  updateTestimonial(current);
};

</script>
