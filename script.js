async function getRepositories() {
  const response = await fetch('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars');
  const data = await response.json();
  console.log(response);
  console.log(data);
  return data;
}


async function repositorCreat() {
  const repos = await getRepositories();
  const repositor = repos.items;
  for (let i = 0; i < 10; i++) {
    const liElement = document.querySelectorAll('li');
    let linkElement = document.querySelectorAll('a');
    liElement[i].textContent = `[Название репозитория: ${repositor[i].name}]  [кол-во звёзд на github: ${repositor[i].stargazers_count}]  [дата последнего коммита: ${repositor[i].updated_at}]`;
    linkElement[i].href = repositor[i].html_url;
    linkElement[i].textContent = repositor[i].html_url;
  }
}


repositorCreat();