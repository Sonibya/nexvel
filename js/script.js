const nav = document.querySelector("nav");
        const logo = document.querySelector('.logo');
        const button = document.querySelector('.menu-btn i');
        const navul = document.querySelector('nav ul');
        const navuli = document.querySelector('nav ul li a');
        window.onscroll = function() {myFunction()};
        

        function myFunction() {
            if (document.documentElement.scrollTop > 20) {
                document.querySelector("nav").className = "sticky";
                logo.innerHTML = '<img src="ikon/logo-white.svg">';
                button.style.color = 'white';


                document.querySelector("nav ul").className = "sticky";
                // navul.style.backgroundColor = 'black';

        
            } else if (document.documentElement.scrollTop < 20) {
                document.querySelector("nav").className = "stiki";
                logo.innerHTML = '<img src="ikon/logo-black.svg">';
                button.style.color = 'black';


                document.querySelector("nav ul").className = "sticki";
                // navul.style.backgroundColor = 'white';

                
            }
        }
       