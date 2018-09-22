import { getMovies, getById, addMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score)
    }
};

// import { people, getById } from './db';

// const nicolas = {
//     name: "Nicolas",
//     age: 18,
//     gender: "female"
// };

// const resolvers = {
//     Query: {
//         people: () => people,
//         person: (_, { id }) => getById(id),
//         // person: (_, args) => {
//         //     console.log(args);
//         // }
//         // person: () => nicolas
//         // when query is name ..
//         // name: () => 'nicolas'
//     }
// };

export default resolvers;