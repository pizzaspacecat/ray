function stampshuffle() {
      const marquee = document.querySelector('#stamps');
      const stamps = Array.from(marquee.querySelectorAll('img'));
  
      for (let i = stamps.length - 1; i > 0; i--) {
          const randomized = Math.floor(Math.random() * (i + 1));
          [stamps[i], stamps[randomized]] = [stamps[randomized], stamps[i]];
      }
  
      stamps.forEach(img => marquee.appendChild(img));
  }
  
  stampshuffle();       
