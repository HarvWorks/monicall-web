function roninDevMainJs() {
    if (document.getElementById('complete-contactform')) {
        document.getElementById('complete-contactform')
        .addEventListener('submit',() => {
            var inquirer = {
                name: document.getElementById('inputName').value,
                email: document.getElementById('inputEmail').value,
                message: document.getElementById('inputMessage').value
            };

           var email = {
                to: 'hello@ronindevsquad.com',
                subject: `From ronin site: ${inquirer.name}`,
                body: `Greetings Ronin Dev,

                ${inquirer.message}

                Contact me at ${inquirer.email}

                Thank you,
                ${inquirer.name}`
           };

           document.location = `mailto:${email.to}?subject=${email.subject}&body=` + encodeURIComponent(email.body);

            return false;
        });

        // Mailchimp confirmation
        document.getElementById('mc-embedded-subscribe-form')
        .addEventListener('submit', function(){
            document.getElementById('send-success').removeAttribute('class','hide');
            document.getElementById('mce-EMAIL').setAttribute('disabled', true);
        });
    }
}

roninDevMainJs()

// Make sure the code loads on the right pages
function hashHandler(){
    this.oldHash = window.location.href;
    this.check;

    var that = this;
    var detect = function(){
        if (that.oldHash!=window.location.href) {
            roninDevMainJs()
            that.oldHash = window.location.href;
        }
    };
    this.check = setInterval(function(){ detect() }, 100);
}
var hashDetection = new hashHandler();
