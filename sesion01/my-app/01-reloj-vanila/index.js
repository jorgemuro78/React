const root = document.getElementById('root');

setInterval(function () {
    const horaActual = new Date().toLocaleTimeString();
    root.innerHTML = `
    <h1>Hora Actual</h1>
    <h2>${horaActual}</h2>
    <h3>By Jorge Hernández</h3>
    `;
}, 1000);