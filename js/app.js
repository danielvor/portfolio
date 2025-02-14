particlesJS('particles-js', {
  particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 6, direction: "none", out_mode: "out" }
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: { enable: true },
          onclick: { enable: false },
          resize: true
      }
  },
  retina_detect: true
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.github.com/users/danielvor/repos')
      .then(response => {
          if (!response.ok) throw new Error('Erro ao carregar repositórios');
          return response.json();
      })
      .then(repos => {
          const container = document.getElementById('github-repos');
          repos.forEach(repo => {
              const repoCard = `
                  <div class="repo-card">
                      <h3>${repo.name}</h3>
                      <p>${repo.description || 'Sem descrição'}</p>
                      <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                  </div>
              `;
              container.innerHTML += repoCard;
          });
      })
      .catch(error => {
          console.error('Erro ao carregar repositórios:', error);
          const container = document.getElementById('github-repos');
          container.innerHTML = `<p>Erro ao carregar repositórios. Tente novamente mais tarde.</p>`;
      });
});