document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Base de Datos Simulada (JSON Frontend)
    const propiedades = [
        {
            id: 1,
            operacion: 'venta',
            titulo: 'Casa Céntrica Moderna',
            ubicacion: '📍 Centro, Laguna Paiva',
            precio: 'USD 85,000',
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caracteristicas: ['🛏️ 3 Hab', '🛁 2 Baños', '🚗 Cochera']
        },
        {
            id: 2,
            operacion: 'alquiler',
            titulo: 'Dúplex Estilo Industrial',
            ubicacion: '📍 Barrio Sur, Laguna Paiva',
            precio: '$150,000 / mes',
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caracteristicas: ['🛏️ 2 Hab', '🛁 1 Baño', '🌱 Patio']
        },
        {
            id: 3,
            operacion: 'venta',
            titulo: 'Lote Amplio para Inversión',
            ubicacion: '📍 Villa Talleres, Laguna Paiva',
            precio: 'USD 20,000',
            img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caracteristicas: ['📏 300 m²', '⚡ Servicios inc.']
        },
        {
            id: 4,
            operacion: 'alquiler',
            titulo: 'Local Comercial en Avenida',
            ubicacion: '📍 Av. Principal, Laguna Paiva',
            precio: '$250,000 / mes',
            img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

            caracteristicas: ['📏 80 m²', '🚻 1 Baño', '🚪 Vidriera']
        }
    ];

    const gridContainer = document.getElementById('propiedades-grid');

    // 3. Función para renderizar las tarjetas
    function renderizarPropiedades(filtro = 'todas') {
        gridContainer.innerHTML = ''; // Limpiar el contenedor

        const propiedadesFiltradas = propiedades.filter(prop => 
            filtro === 'todas' || prop.operacion === filtro
        );

        propiedadesFiltradas.forEach(prop => {
            const isAlquiler = prop.operacion === 'alquiler';
            const badgeClass = isAlquiler ? 'badge rent' : 'badge';
            const badgeText = isAlquiler ? 'Alquiler' : 'En Venta';

            // Generar HTML de las características dinámicamente
            const featuresHtml = prop.caracteristicas.map(feat => `<span>${feat}</span>`).join('');

            const cardHtml = `
                <div class="card">
                    <div class="card-img" style="background-image: url('${prop.img}');"></div>
                    <div class="card-content">
                        <span class="${badgeClass}">${badgeText}</span>
                        <h3>${prop.titulo}</h3>
                        <p class="location">${prop.ubicacion}</p>
                        <p class="price">${prop.precio}</p>
                        <div class="features">
                            ${featuresHtml}
                        </div>
                    </div>
                </div>
            `;
            gridContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }

    // Carga inicial
    renderizarPropiedades();

    // 4. Lógica de los botones de filtro
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Quitar clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            e.target.classList.add('active');

            // Obtener el tipo de filtro y re-renderizar
            const tipoFiltro = e.target.getAttribute('data-filter');
            renderizarPropiedades(tipoFiltro);
        });
    });
});
