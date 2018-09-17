import { people, getById } from './db';

const nicolas = {
    name: "Nicolas",
    age: 18,
    gender: "female"
};

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
        // person: () => nicolas
        // when query is name ..
        // name: () => 'nicolas'
    }
};

export default resolvers;