export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.org/users');
    const users = response.json();
    return users;
}