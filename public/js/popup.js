'use strict'

let firstTime = true

function subscribePopup() {
    if ( document.getElementById('Popup') && firstTime){
        const popupBox = `
            <button id="pop-exit">x</button>
            <h2>Sign up to receive content on product and growth!</h2>
            <input id="pop-email" type="email" placeholder="email" />
            <input id="pop-cherry" type="submit" value="Subscribe" />
        `;

        setTimeout(() => {
            const popup = document.getElementById('Popup');
            popup.innerHTML = popupBox;
            popup.style.display = 'block';
            popup.style.opacity = 0;

            document.getElementById('pop-exit').addEventListener('click', () => {
                firstTime = false;
                popup.style.display = 'none';
            });

            const fader = setInterval(() => {
                if (popup.style.opacity >= 0.9){
                    popup.style.opacity = 0.95;
                    clearInterval(fader);
                } else {
                    popup.style.opacity = parseFloat(popup.style.opacity) + 0.1;
                }
            }, 25);

            document.getElementById('pop-cherry')
            .addEventListener('click', () => {
                document.getElementById('mce-EMAIL').value = document.getElementById('pop-email').value;
                document.getElementById('mc-embedded-subscribe').click();
                document.getElementById('send-success').removeAttribute('class','hide');
                document.getElementById('mce-EMAIL').setAttribute('disabled', true);

                popup.innerHTML = '<h2>Thank You</h2>';
                setTimeout(() => {
                    const dimmer = setInterval(() => {
                        if (popup.style.opacity <= 0.1){
                            firstTime = false;
                            popup.style.display = 'none';
                            clearInterval(dimmer);
                        } else {
                            popup.style.opacity = parseFloat(popup.style.opacity) - 0.1;
                        }
                    }, 25);
                }, 1500);
            });
        }, 10000);
    }
}

// Make sure the code loads on the right pages
function hashHandler(){
    this.oldHash = window.location.href;
    this.check;

    var that = this;
    var detect = function(){
        if (that.oldHash!=window.location.href) {
            subscribePopup()
            that.oldHash = window.location.href;
        }
    };
    this.check = setInterval(function(){ detect() }, 100);
}
var hashDetection = new hashHandler();
