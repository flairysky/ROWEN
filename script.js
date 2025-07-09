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


