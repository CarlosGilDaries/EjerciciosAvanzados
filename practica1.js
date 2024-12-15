function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

const cookieName = "contador";

let contador = parseInt(getCookie(cookieName)) || 0;

contador++;

if (contador > 10) {
    contador = 0;
    deleteCookie(cookieName);
    document.getElementById("mensaje").innerHTML = "Has visitado la página más de 10 veces. El contador se ha reiniciado.";
} else {
    setCookie(cookieName, contador, 30);
    document.getElementById("mensaje").innerHTML = `Esta es tu visita número ${contador}.`;
}