/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {

    const submitBtn = document.querySelector('button');
    const messageDiv = document.getElementsByClassName('message')[0];

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('input[name="email"]');
        const emailAddress = emailInput.value;
        messageDiv.classList.remove('error', 'success');
        messageDiv.innerHTML = '';
        if(emailAddress === '') {
            messageDiv.innerHTML = 'Please enter a valid email address.';
            messageDiv.classList.add('error');
            return;
        }
        else
        {
            messageDiv.innerHTML = 'Thank you! Your email address ' + emailAddress + ' has been added to our mailing list.';
            messageDiv.classList.add('success');
            emailInput.value = '';
            return
        }
    });

});