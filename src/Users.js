export const USERS = [
    {
        id: 1,
        name: "Mila",
        color: "blue",
        rentedMovies: [],
    },
    {
        id: 2,
        name: "Vadim",
        color: "red",
        rentedMovies: [],
    },
    {
        id: 3,
        name: "Ameer",
        color: "green",
        rentedMovies: [],
    },
    {
        id: 4,
        name: "Katya",
        color: "orange",
        rentedMovies: [],
    },
];
    
// Function to add a rented movie to a user's rentedMovies array
export function addRentedMovie(userId, movieId) {
    const user = USERS.find(user => user.id === userId);
    if (user) {
        user.rentedMovies.push(movieId);
    }
}

// Function to remove a rented movie from a user's rentedMovies array
export function removeRentedMovie(userId, movieId) {
    const user = USERS.find(user => user.id === userId);
    if (user) {
        user.rentedMovies = user.rentedMovies.filter(id => id !== movieId);
    }
}