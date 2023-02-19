const api = "https://api.github.com/users/";

export default async function fetchAPI (username) {
  return await fetch(`${api}${username}`)
    .then(d => d.json())
};
