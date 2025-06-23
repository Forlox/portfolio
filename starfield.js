document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'star-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Определяем мобильное устройство
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Настройки в зависимости от устройства
    const config = {
        starCount: isMobile ? 150 : 300,
        maxDist: isMobile ? 100 : 150,
        starSize: isMobile ? 1.5 : 2,
        mouseRadius: isMobile ? 80 : 120
    };

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Параметры звезд
    const stars = [];
    const colors = ['#ffffff', '#4d8eff', '#6a93ff', '#8daaff'];

    // Позиция мыши
    const mouse = {
        x: null,
        y: null,
        radius: config.mouseRadius
    };

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * config.starSize + 0.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.7 + 0.3;
            this.twinkleSpeed = Math.random() * 0.03 + 0.01;
            this.twinkleDirection = 1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = `rgba(${this.hexToRgb(this.color)}, ${this.opacity})`;
            ctx.fill();
        }

        update() {
            // Движение
            this.x += this.vx;
            this.y += this.vy;

            // Отскок от границ
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            // Мерцание
            this.opacity += this.twinkleSpeed * this.twinkleDirection;
            if (this.opacity >= 0.8 || this.opacity <= 0.3) {
                this.twinkleDirection *= -1;
            }

            // Реакция на мышь
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * (isMobile ? 2 : 3);
                    this.y -= Math.sin(angle) * force * (isMobile ? 2 : 3);
                }
            }
        }

        hexToRgb(hex) {
            const r = parseInt(hex.substring(1, 3), 16);
            const g = parseInt(hex.substring(3, 5), 16);
            const b = parseInt(hex.substring(5, 7), 16);
            return `${r}, ${g}, ${b}`;
        }
    }

    // Соединение звезд
    function connectStars() {
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const dx = stars[i].x - stars[j].x;
                const dy = stars[i].y - stars[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.maxDist) {
                    const opacity = 1 - distance / config.maxDist;
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
                    ctx.lineWidth = opacity * (isMobile ? 0.3 : 0.4); // Тоньше линии
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = '#0a0a14';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        connectStars();
    }

    function init() {
        for (let i = 0; i < config.starCount; i++) {
            stars.push(new Star());
        }
        animate();
    }

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    init();
});