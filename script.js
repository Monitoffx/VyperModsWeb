// Configuración mejorada para Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": { 
            "value": 80, 
            "density": { 
                "enable": true, 
                "value_area": 1000 
            } 
        },
        "color": { 
            "value": "#5e72e4" 
        },
        "shape": { 
            "type": "circle" 
        },
        "opacity": { 
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2, // Tamaño de las partículas
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150, // Distancia para que se unan con líneas
            "color": "#5e72e4", // Color de las líneas
            "opacity": 0.15, // Opacidad de las líneas
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5, // Velocidad de movimiento (más lento para que no distraiga)
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // Las partículas reaccionan al pasar el mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Crea nuevas partículas al hacer clic
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Loader para Products
    function verProductos(event) {
        // 1. Evitamos que cambie de página de inmediato
        event.preventDefault();
        const destino = event.currentTarget.href;

        // 2. Mostramos el Loader
        const loader = document.getElementById('loader-container');
        loader.classList.remove('loader-hidden');

        // 3. Esperamos 2 segundos
        setTimeout(() => {
            window.location.href = destino;
        }, 2000); // 2000 milisegundos = 2 segundos
    }

// Efecto de escritura real para "Vyper Mods!"
    function typeWriter() {
        const text = "Vyper Mods!";
        const element = document.querySelector('.typewriter');
        if (!element) return;
        
        element.textContent = ''; // Limpiar texto inicial
        let index = 0;
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 150); // Velocidad de escritura: 150ms por letra
            } else {
                // Cuando termina de escribir, quitar el cursor
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }
        
        // Iniciar después de la animación de entrada
        setTimeout(type, 700); // 0.5s (fade in) + 0.2s extra
    }

    // Llamar a la función cuando cargue la página
    typeWriter();

// Función para inicializar efectos adicionales
document.addEventListener('DOMContentLoaded', function() {
    console.log('Partículas Vyper Mods inicializadas');
    
    // Efecto de brillo en el logo al cargar la página
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.style.animation = 'pulse 2s infinite';
    }
    
    // Contador de carrito interactivo
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        let count = 0;
        
        // Simular adición de productos (para demostración)
        document.addEventListener('keydown', function(e) {
            if (e.key === '+' || e.key === '=') {
                count++;
                cartCount.textContent = count;
                cartCount.style.animation = 'bounce 0.3s';
                setTimeout(() => {
                    cartCount.style.animation = '';
                }, 300);
            }
        });
    }
    
    // Menú desplegable funcional
    const userDropdown = document.querySelector('.user-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const userBtn = document.querySelector('.user-btn');
    
    if (userDropdown && dropdownMenu && userBtn) {
        // Toggle del menú al hacer clic en el botón
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isVisible = dropdownMenu.style.visibility === 'visible';
            if (isVisible) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            } else {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
            }
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!userDropdown.contains(e.target)) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }
        });
        
        // Evitar que se cierre al hacer clic dentro del menú
        if (dropdownMenu) {
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }

    // FUNCIONALIDADES DEL MENÚ USUARIO
    let favorites = [];
    let orders = [];
    
    // Función para mostrar notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Colores según tipo
        const colors = {
            info: 'linear-gradient(135deg, #2d3748, #4a5568)',
            success: 'linear-gradient(135deg, #38a169, #48bb78)',
            warning: 'linear-gradient(135deg, #d69e2e, #ecc94b)',
            error: 'linear-gradient(135deg, #e53e3e, #fc8181)'
        };
        
        notification.style.background = colors[type] || colors.info;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Funciones del menú
    function showProfile() {
        showNotification('👤 Perfil de Usuario: Modo Invitado', 'info');
        console.log('Mostrando perfil de usuario...');
    }
    
    function showOrders() {
        if (orders.length === 0) {
            showNotification('📦 No tienes pedidos realizados', 'warning');
        } else {
            showNotification(`📦 Tienes ${orders.length} pedido(s)`, 'success');
        }
        console.log('Mostrando pedidos...', orders);
    }
    
    function showFavorites() {
        const currentProduct = document.querySelector('.product-card h3');
        if (currentProduct) {
            const productName = currentProduct.textContent;
            if (!favorites.includes(productName)) {
                favorites.push(productName);
                showNotification(`❤️ ${productName} agregado a favoritos`, 'success');
            } else {
                favorites = favorites.filter(f => f !== productName);
                showNotification(`💔 ${productName} eliminado de favoritos`, 'warning');
            }
        } else {
            showNotification(`❤️ Tienes ${favorites.length} favorito(s)`, 'info');
        }
        console.log('Favoritos:', favorites);
    }
    
    function toggleTheme(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        
        console.log('toggleTheme llamado'); // Debug
        console.log('body antes:', body.className); // Debug
        
        // Cambia la clase en el body
        body.classList.toggle('light-mode');
        
        console.log('body después:', body.className); // Debug
        
        // Cambia el icono y el texto dentro del menú
        if (body.classList.contains('light-mode')) {
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i> Modo Oscuro';
            console.log('Cambiando a modo claro'); // Debug
        } else {
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> Modo Claro';
            console.log('Cambiando a modo oscuro'); // Debug
        }
    }
    
    function showSettings() {
        showNotification('⚙️ Configuración: En desarrollo', 'info');
        console.log('Abriendo configuración...');
    }
    
    // Hacer funciones globales
    window.showProfile = showProfile;
    window.showOrders = showOrders;
    window.showFavorites = showFavorites;
    window.toggleTheme = toggleTheme;
    window.showSettings = showSettings;

    // Event listener para el toggle de tema
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleTheme();
        });
    }
    
    // Función toggleTheme
    function toggleTheme() {
        const body = document.body;
        const themeBtn = document.getElementById('themeToggle');
        
        console.log('toggleTheme llamado'); // Debug
        console.log('body antes:', body.className); // Debug
        
        // El truco está aquí: añadimos o quitamos la clase
        body.classList.toggle('light-mode');
        
        console.log('body después:', body.className); // Debug
        
        // Cambiamos el texto e icono del menú para que el usuario sepa qué sigue
        if (body.classList.contains('light-mode')) {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Modo Oscuro';
            localStorage.setItem('theme', 'light'); // Guarda la elección
            console.log('Cambiando a modo claro'); // Debug
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Modo Claro';
            localStorage.setItem('theme', 'dark');
            console.log('Cambiando a modo oscuro'); // Debug
        }
    }

    // Esto es para que si refrescan la página, se quede como la dejaron
    window.onload = () => {
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
            document.getElementById('themeToggle').innerHTML = '<i class="fa-solid fa-moon"></i> Modo Oscuro';
            console.log('Restaurando modo claro desde localStorage'); // Debug
        }
    }

});

// Animación CSS para efectos adicionales
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { filter: drop-shadow(0 0 8px #5e72e4); }
        50% { filter: drop-shadow(0 0 15px #5e72e4) brightness(1.2); }
        100% { filter: drop-shadow(0 0 8px #5e72e4); }
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
    
    @keyframes cartBounce {
        0%, 100% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(-5deg) scale(1.1); }
        75% { transform: rotate(5deg) scale(1.1); }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
