const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu =  document.querySelector('#menu-icon');
let navlist =  document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

//*=================emailJS===================*//

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) =>{
e.preventDefault()

// serviceID - templateID - #form - publicKey
emailjs.sendForm('service_8efx4mh', 'template_z2mkyd6','#contact-form','glypgWfORzHLj6lrJ')
.then(() =>{

//show sent message
    contactMessage.textContent = ' Great! Message sent successfully ✅'

//remove message after 5 secs
    setTimeout(() => {
        contactMessage.textContent = ''
        
    }, 5000);

    // clear input fields
    contactForm.reset()

}, () =>{

    //show error message
    contactMessage.textContent = ' Sorry, Message not sent (service error) ❌'
} )
	}
	contactForm.addEventListener('submit', sendEmail)
