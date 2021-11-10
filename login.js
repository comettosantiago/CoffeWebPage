//---------------------Cambiar secciones----------------------
function cambiarLogin() {

    var login = document.getElementById('loggin');
    var register = document.getElementById('reggister');
    var confirmedsection = document.getElementById('registerconfirmed');
    var regsection = document.getElementById('registersection');

    var visible = login.style.opacity;

    confirmedsection.setAttribute('style', 'visibility: hidden');

    if (visible === "1") {
        login.setAttribute('style', 'visibility: hidden; opacity:0');
        register.setAttribute('style', 'visibility: visible; opacity:1');
        regsection.setAttribute('style', 'visibility: visible; opacity:1');
        document.getElementById('changebutton').setAttribute('value', 'Iniciar Sesión');
    } else {
        register.setAttribute('style', 'visibility: hidden; opacity:0');
        regsection.setAttribute('style', 'visibility: hidden; opacity:0');
        login.setAttribute('style', 'visibility: visible; opacity:1');
        document.getElementById('changebutton').setAttribute('value', 'Registrarse')
    }
}


//--------------------Validar registro--------------------
function validar() {
    document.getElementById("reguser").classList.remove('error');
    document.getElementById("reguser2").classList.remove('error');
    document.getElementById("regpassword").classList.remove('error');
    document.getElementById("regpassword2").classList.remove('error');

    var email = document.getElementById("reguser").value;
    var email2 = document.getElementById("reguser2").value;
    var password = document.getElementById("regpassword").value;
    var password2 = document.getElementById("regpassword2").value;

    var expresionMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!expresionMail.test(email) || email != email2 || email.length === 0) {
        if (password != password2 || password.length < 6) {
            document.getElementById("regpassword").classList.add('error');
            document.getElementById("regpassword2").classList.add('error');
            document.getElementById("reguser").classList.add('error');
            document.getElementById("reguser2").classList.add('error');
            return false;
        } else {
            document.getElementById("reguser").classList.add('error');
            document.getElementById("reguser2").classList.add('error');
            return false;
        }
    }
    if (password != password2 || password.length < 6) {
        document.getElementById("regpassword").classList.add('error');
        document.getElementById("regpassword2").classList.add('error');
        return false;
    }

    //Si salio todo bien...

    var regsection = document.getElementById('registersection');
    var confirmedsection = document.getElementById('registerconfirmed');

    regsection.setAttribute('style', 'visibility: hidden');
    setTimeout(() => {
        confirmedsection.setAttribute('style', 'visibility: visible');
    }, 1000);


    return false;

    /* fin js */
}
