
document.addEventListener('DOMContentLoaded', () => {
  const advanceSlide = () => {
      const current = document.querySelector('input[name="slide"]:checked');
      const slides = document.querySelectorAll('input[name="slide"]');
      const currentIndex = Array.from(slides).indexOf(current);
      const nextIndex = (currentIndex + 1) % slides.length; 
      slides[nextIndex].checked = true;
  };

  setInterval(advanceSlide, 2500); 
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('aside form');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); 
      alert('Formulário enviado com sucesso!');
     
      form.reset(); 
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault(); 

          const targetId = this.getAttribute('href').substring(1); 
          const targetElement = document.getElementById(targetId); 

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth', 
                  block: 'start' 
              });
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"], a[href="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault(); 

          if (this.getAttribute('href') === "#") {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth' 
              });
          } else {
              const targetId = this.getAttribute('href').substring(1); 
              const targetElement = document.getElementById(targetId); 

              if (targetElement) {
                  targetElement.scrollIntoView({
                      behavior: 'smooth', 
                      block: 'start' 
                  });
              }
          }
      });
  });

const scrollUpButton = document.querySelector('.scrollup');
    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }
});




