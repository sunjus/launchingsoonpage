const form=document.querySelector('.form');

form.addEventListener('submit', event=>{
    event.preventDefault();
    const email=form['email'];
    const emailValue=email.value;
    const small=form.querySelector('small');

    if(!emailValue){
email.classList.add('error');
small.innerText='Email field cannot be blank!';
small.style.display='inline-block';
    }else if (!validateEmail(emailValue)){
email.classList.add('error');
small.innerText='Email is invalid';
small.style.display='inline-block';
    } else{
email.classList.remove('error');
small.innerText='';
small.style.display='none'
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}