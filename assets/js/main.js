document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/danielvor/repos')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar repositórios');
            return response.json();
        })
        .then(repos => {
            const container = document.getElementById('github-repos');
            if (container) {
                const repoCards = repos.map(repo => `
                    <li>
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'Sem descrição'}</p>
                        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                    </li>
                `).join('');
                container.innerHTML = repoCards;
            } else {
                console.error('Elemento github-repos não encontrado.');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar repositórios:', error);
            const container = document.getElementById('github-repos');
            if (container) {
                container.innerHTML = `<p>Erro ao carregar repositórios. Tente novamente mais tarde.</p>`;
            }
        });
});