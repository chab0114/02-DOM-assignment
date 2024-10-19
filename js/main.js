import { rickAndMortyCharacters } from './data.js';


function createContentWithTemplate() {
  const main = document.querySelector('main');
  const fragment = document.createDocumentFragment();
  const section = document.createElement('section');

  rickAndMortyCharacters.forEach(character => {
    const clone = document.createElement('div');
    clone.classList.add('character');

    const nameElement = document.createElement('h2');
    nameElement.textContent = character.name;

    const speciesElement = document.createElement('p');
    speciesElement.textContent = `Species: ${character.species}`;
    speciesElement.style.display = 'none';

    const occupationElement = document.createElement('p');
    occupationElement.textContent = `Occupation: ${character.occupation}`;
    occupationElement.style.display = 'none';

    const appearanceElement = document.createElement('p');
    appearanceElement.textContent = `First Appearance: ${character.firstAppearance}`;
    appearanceElement.style.display = 'none';

    clone.append(nameElement, speciesElement, occupationElement, appearanceElement);

    clone.addEventListener('click', () => {
      const isVisible = speciesElement.style.display === 'block';
      speciesElement.style.display = isVisible ? 'none' : 'block';
      occupationElement.style.display = isVisible ? 'none' : 'block';
      appearanceElement.style.display = isVisible ? 'none' : 'block';
      clone.classList.toggle('active');
    });

    fragment.appendChild(clone);
  });

  section.appendChild(fragment);
  main.appendChild(section);
}


function createContentWithCreateElement() {
  const main = document.querySelector('main');
  const fragment = document.createDocumentFragment();
  const section = document.createElement('section');

  rickAndMortyCharacters.forEach(character => {
    const div = document.createElement('div');
    div.classList.add('character');

    const name = document.createElement('h2');
    name.textContent = character.name;

    const species = document.createElement('p');
    species.textContent = `Species: ${character.species}`;
    species.style.display = 'none';

    const occupation = document.createElement('p');
    occupation.textContent = `Occupation: ${character.occupation}`;
    occupation.style.display = 'none';

    const appearance = document.createElement('p');
    appearance.textContent = `First Appearance: ${character.firstAppearance}`;
    appearance.style.display = 'none';

    div.append(name, species, occupation, appearance);

    div.addEventListener('click', () => {
      const isVisible = species.style.display === 'block';
      species.style.display = isVisible ? 'none' : 'block';
      occupation.style.display = isVisible ? 'none' : 'block';
      appearance.style.display = isVisible ? 'none' : 'block';
      div.classList.toggle('active');
    });

    fragment.appendChild(div);
  });

  section.appendChild(fragment);
  main.appendChild(section);
}


function createContentWithInnerHTML() {
  const main = document.querySelector('main');
  const section = document.createElement('section');

  const content = rickAndMortyCharacters.map(character => `
    <div class="character">
      <h2 class="name">${character.name}</h2>
      <p class="species" style="display: none;">Species: ${character.species}</p>
      <p class="occupation" style="display: none;">Occupation: ${character.occupation}</p>
      <p class="appearance" style="display: none;">First Appearance: ${character.firstAppearance}</p>
    </div>
  `).join('');

  section.innerHTML += content;
  main.appendChild(section);

  const characterElements = section.querySelectorAll('.character h2');
  characterElements.forEach((nameElement) => {
    const speciesElement = nameElement.nextElementSibling;
    const occupationElement = speciesElement.nextElementSibling;
    const appearanceElement = occupationElement.nextElementSibling;

    nameElement.addEventListener('click', () => {
      const isVisible = speciesElement.style.display === 'block';
      speciesElement.style.display = isVisible ? 'none' : 'block';
      occupationElement.style.display = isVisible ? 'none' : 'block';
      appearanceElement.style.display = isVisible ? 'none' : 'block';
      nameElement.classList.toggle('active');
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  function init() {
    createContentWithTemplate();
    createContentWithCreateElement();
    createContentWithInnerHTML();
  }
  init();
});
