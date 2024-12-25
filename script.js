function loadContent(department) {
    const mainContent = document.getElementById("mainContent");
    const departments = {
        CSE: {
            title: "Computer Science Engineering",
            description:
                "Delve into the world of algorithms, programming languages, and software development. Our Computer Science department offers a wide range of resources to help you excel in your studies. You will learn about data structures, software engineering principles, artificial intelligence, and machine learning. Graduates can pursue careers in software development, data analysis, cybersecurity, and more, making it a versatile and in-demand field.",
            books: [
                {
                    title: "Data Structures and Algorithms",
                    author: "Armstrong Subero",
                    price: "1899/-",
                    image: "images/dsa.webp",
                },
                {
                    title: "Introduction to the Theory of Computation",
                    author: "Michael Sipser",
                    price: "1599/-",
                    image: "images/cs2.jpeg",
                },
                {
                    title: "Clean Code",
                    author: "Robert C. Martin",
                    price: "2999/-",
                    image: "images/cs3.jpg",
                },
                {
                    title: "Design Patterns",
                    author: "Graddy Booch",
                    price: "2899/-",
                    image: "images/ds4.jpg",
                },
                {
                    title: "Artificial Intelligence: A Modern Approach",
                    author: "Stuart Russell",
                    price: "19999/-",
                    image: "images/cs5.jpeg",
                },
            ],
        },
        ECE: {
            title: "Electronics Engineering",
            description:
                "Explore the fundamentals of electronics, circuit design, and signal processing. Our Electronics department provides essential materials for aspiring engineers. You will study topics such as digital circuits, microcontrollers, and communication systems. This field opens doors to careers in telecommunications, embedded systems, and consumer electronics, where you can innovate and create the technology of tomorrow.",
            books: [
                {
                    title: "Digital Design",
                    author: "M. Morris Mano",
                    price: "1699/-",
                    image: "images/ee1.webp",
                },
                {
                    title: "Microelectronic Circuits",
                    author: "Adel S. Sedra",
                    price: "2299/-",
                    image: "images/ee2.webp",
                },
                {
                    title: "Signals and Systems",
                    author: "Alan V. Oppenheim",
                    price: "15999/-",
                    image: "images/ee3.webp",
                },
                {
                    title: "Fundamentals of Electric Circuits",
                    author: "Charles K. Alexander",
                    price: "3499/-",
                    image: "images/ee4.webp",
                },
                {
                    title: "Communication Systems",
                    author: "BP Lathi",
                    price: "4699/-",
                    image: "images/ee5.webp",
                },
            ],
        },
        EEE: {
            title: "Electrical Engineering",
            description:
                "Understand the principles of electrical systems, power generation, and control systems. Our Electrical Engineering department is equipped with the latest resources for your academic journey. You will learn about power electronics, renewable energy systems, and electrical machines. Graduates can work in various sectors, including energy, automation, and transportation, contributing to sustainable and efficient solutions for the future.",
            books: [
                {
                    title: "Electric Machinery",
                    author: "Stephen Chapman",
                    price: "9599/-",
                    image: "images/ece11.jpg",
                },
                {
                    title: "Power Systems Analysis",
                    author: "John J. Grainger",
                    price: "3499/-",
                    image: "images/ece2.jpg",
                },
                {
                    title: "Control Systems Engineering",
                    author: "Norman S. Nise",
                    price: "1799/-",
                    image: "images/ece3.jpg",
                },
                {
                    title: "Electrical Engineering: Principles and Applications",
                    author: "Allan R. Hambley",
                    price: "5100/-",
                    image: "images/ece44.avif",
                },
                {
                    title: "Renewable Energy",
                    author: "John Twidell",
                    price: "$39.99",
                    image: "images/ece5.webp",
                },
            ],
        },
        CIVIL: {
            title: "Civil Engineering",
            description:
                "Learn about structural design, materials science, and environmental engineering. Our Civil Engineering department offers comprehensive resources for future builders and planners. You will study topics such as fluid mechanics, geotechnical engineering, and transportation systems. This field prepares you for a career in infrastructure development, urban planning, and environmental sustainability, where you can make a significant impact on society.",
            books: [
                {
                    title: "Structural Analysis",
                    author: "R.C. Hibbeler",
                    price: "16699/-",
                    image: "images/c1.jpg",
                },
                {
                    title: "Soil Mechanics",
                    author: "T. William Lambe",
                    price: "11499/-",
                    image: "images/c2.jpg",
                },
                {
                    title: "Fundamentals of Structural Analysis",
                    author: "Kenneth M. Leet",
                    price: "6699/-",
                    image: "images/c3.jpg",
                },
                {
                    title: "Construction Management: Principles and Practice",
                    author: "Alan Griffith",
                    price: "7999/-",
                    image: "images/c4.jpg",
                },
                {
                    title: "Transportation Engineering",
                    author: "C. S. Papacostas",
                    price: "1599/-",
                    image: "images/c5.webp",
                },
            ],
        },
    };

    const deptInfo = departments[department];

    const booksHTML = deptInfo.books
        .map(
            (book) => `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
            <button onclick="alert('Added to cart!');"
                    style="background: var(--secondary-color); 
                           color: white; 
                           border: none; 
                           padding: 8px 16px; 
                           border-radius: var(--border-radius); 
                           cursor: pointer; 
                           margin-top: 10px;">
                Add to Cart
            </button>
        </div>
    `
        )
        .join("");

    mainContent.innerHTML = `
        <div class="welcome-section">
            <h1>${deptInfo.title} Books</h1>
            <p class="welcome-text">${deptInfo.description}</p>
           
        </div>
        <div class="features-grid">
            <div class="books-grid">
                ${booksHTML}
            </div>
        </div>
    `;
}

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const nameRegex = /^[A-Za-z\s]+$/;
    if (fullName.length < 6 || !nameRegex.test(fullName)) {
        alert(
            "Name must be at least 6 characters long and contain only alphabets."
        );
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Updated email pattern
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (e.g., name@domain.com).");
        return;
    }

     const phoneRegex = /^\d{10}$/;
     if (!phoneRegex.test(phone)) {
         alert("Phone number must contain exactly 10 digits.");
         return; 
     }

    alert("Registration successful!");
    this.submit();
});
