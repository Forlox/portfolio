document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let stars = [];
  const maxStars = 150;
  
  // Настройки
  const config = {
    speed: 0.05,
    lineDistance: 150,
    lineWidth: 0.5,
   // bgColor: '#0a0518'
  };

  // Инициализация canvas
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Создание звезд
    stars = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 1.5 + 0.5
      });
    }
  }

  // Анимация
  function animate() {
    // Затемнение фона
    ctx.fillStyle = config.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Обновление позиций
    stars.forEach(star => {
      star.x += star.vx * config.speed;
      star.y += star.vy * config.speed;
      
      // Переход через границы
      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;
    });
    
    // Отрисовка соединений
    ctx.strokeStyle = 'rgba(100, 150, 255, 0.3)';
    ctx.lineWidth = config.lineWidth;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < config.lineDistance) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }
    
    // Отрисовка звезд
    ctx.fillStyle = '#ffffff';
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }

  // Запуск
  window.addEventListener('resize', resize);
  resize();
  animate();
});