const content = document.getElementById("content");

    const pages = {
      home: "<h1>Home Page</h1><p>This is the home content.</p>",
      about: "<h1>About Us</h1><p>We are building a cute SPA with EJS.</p>",
      contact: "<h1>Contact</h1><p>Get in touch with us here.</p>",
    };

    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");


        content.classList.remove("fade"); 
        void content.offsetWidth; 
        content.innerHTML = pages[page];
        content.classList.add("fade");
      });
    });