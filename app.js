// Modal functionality
const openModal = (title, text) => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    modalTitle.textContent = title;
    modalText.textContent = text;
    modal.style.display = 'flex';
};

const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

document.querySelector('.close-btn').addEventListener('click', closeModal);

// Agregar los controladores de eventos para los botones "Ver más"
document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const text = button.getAttribute('data-text');
        openModal(title, text);
    });
});

// Charts Setup with Chart.js
const carbonChart = new Chart(document.getElementById('carbonChart'), {
    type: 'bar',
    data: {
        labels: ['2021', '2022', '2023'],
        datasets: [{
            label: 'Emisiones de Carbono (en toneladas)',
            data: [150, 120, 90],
            backgroundColor: '#00bcd4',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

const trainingChart = new Chart(document.getElementById('trainingChart'), {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [{
            label: 'Entrenamientos en Derechos Humanos',
            data: [50, 75, 100],
            borderColor: '#0097a7',
            fill: false,
        }]
    },
    options: {
        responsive: true
    }
});
