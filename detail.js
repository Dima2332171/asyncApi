async function detailRepos(){
  const response = await fetch('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars');
  const data = await response.json();
  return data;
}

async function repositorElem(){
  const repositor = await detailRepos();
  const repositorElement = repositor.items[0];
  const nameElement = document.querySelector('.name');
  nameElement.textContent = `Имя репозитория: ${repositorElement.name}`;
  const idElement = document.querySelector('.id');
  idElement.textContent = `id: ${repositorElement.id}`;
  const homePage = document.querySelector('.home_page');
  homePage.href = repositorElement.homepage;
  homePage.textContent = repositorElement.homepage;
  const languageElement = document.querySelector('.language');
  languageElement.textContent = `Язык: ${repositorElement.language}`;
}

repositorElem();