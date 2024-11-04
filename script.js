// Lista de temas com o nome do personagem correspondente
const themes = [
    { class: 'scarlet-witch-theme', name: 'Feiticeira Escarlate', image: 'images/scarlet-witch.jpg' },
    { class: 'wiccan-theme', name: 'Wiccano', image: 'images/wiccan.jpg' },
    { class: 'agatha-harkness-theme', name: 'Agatha Harkness', image: 'images/agatha-harkness.jpg' }
];

let currentThemeIndex = 0;

document.getElementById('theme-toggle').addEventListener('click', function() {
    // Remove o tema atual
    document.body.classList.remove(themes[currentThemeIndex].class);
    
    // Alterna para o próximo tema
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    
    // Adiciona o novo tema
    document.body.classList.add(themes[currentThemeIndex].class);
    
    // Atualiza o nome do personagem no título e no <h1>
    const characterName = themes[currentThemeIndex].name;
    document.getElementById('character-name').textContent = characterName;
    document.title = characterName; // Atualiza o título da página
    
    // Atualiza a imagem do personagem
    document.getElementById('character-image').src = themes[currentThemeIndex].image;
    document.getElementById('character-image').alt = characterName;
});
