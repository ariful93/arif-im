document.addEventListener('DOMContentLoaded', () => {
    /*============================
    Type writer animation
    ============================*/
    const getWoredContainer = document.getElementById('word-animation');
    const words = ["HTML/CSS", "Tailwind CSS", "Sass/Less", "JavaScript", "React", "Vue", "WordPress", "PHP" ,"Gutenberg", "Github"];
    const typingSpeed = 150;
    const wordDelay = 1000;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function getTypeWords() {
      if (wordIndex === words.length) {
        wordIndex = 0;
        
      }

      const currentWord = words[wordIndex];

      if (!isDeleting) {
        charIndex++;
        getWoredContainer.textContent = currentWord.substring(0, charIndex);
        
      } else {
        charIndex--;
        getWoredContainer.textContent = currentWord.substring(0, charIndex);

      }

      if ( !isDeleting && charIndex === currentWord.length ) {
        isDeleting = true;
        setTimeout(getTypeWords, wordDelay);

      } else if ( isDeleting && charIndex === 0 ) {
        isDeleting = false;
        wordIndex++;
        setTimeout(getTypeWords, typingSpeed);

      } else {
        setTimeout(getTypeWords, typingSpeed);

      }
    }

    // Start the typing animation
    getTypeWords();


    /* ============================
    Cursor moving
    ============================ */
    const cursor = document.querySelector('.cursor');
    var timeout;
    document.addEventListener('mousemove', (e) => {
      
      let x = e.pageX;
      let y = e.pageY; 

      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';
      cursor.style.display = 'block';

      function mouseStoped () {
        cursor.style.display = 'none';
      }

      clearTimeout(timeout);
      timeout = setTimeout(mouseStoped, 1000);

      document.addEventListener('mouseout', () => {
        cursor.style.display = 'none';
      })

    })


});
