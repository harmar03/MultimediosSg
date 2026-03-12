document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mensajeBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('¡Hola! Este es un mensaje básico.');
        });
    }

    const btn2 = document.getElementById('mensaje2Btn');
    if (btn2) {
        btn2.addEventListener('click', () => {
            alert('¡Este es otro mensaje con diferente contenido!');
        });
    }

    const confirmBtn = document.getElementById('confirmBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            const ok = confirm('¿Te gusta esta animación?');
            if (ok) {
                alert('¡Me alegra que te guste!');
            } else {
                alert('¡Oh, qué pena!');
            }
        });
    }
});