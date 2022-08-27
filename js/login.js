console.log('conected')
document.getElementById('btn-login').addEventListener('click', function () {
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href='bank.html';
    }
    else {
        alert('your password in incorrect');
    }
})