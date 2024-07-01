
type User = {
    id: number
    username: string,
    role: "Admin" | "Guest" | "Member",
}

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: Array<User> = [
    { id: nextUserId++, username: 'John', role: 'Admin' },
    { id: nextUserId++, username: 'Mike', role: 'Guest' },
    { id: nextUserId++,   username: 'Peter', role: 'Member' }
];

function getUserDetails(username: string): User {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error(`User $(username) not found.`);
    }
    return user;
}

function updateUser(id: number, updates: UpdatedUser){
    const foundUser = users.find(user => user.id === id);
    if(!foundUser){
        throw new Error(`User $(id) not found.`);
    }
    Object.assign(foundUser, updates);
}


function addNewUser(newUser: Omit<User, "id">): User{
    let user: User = { id: nextUserId++, ...newUser }
    users.push(user);
    return user;
}

addNewUser({username: 'Sarah', role: 'Guest' });

updateUser(1, { role: "Guest" });

console.log(getUserDetails("John"));