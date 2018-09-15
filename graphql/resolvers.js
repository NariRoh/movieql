const nicolas = {
    name: "Nicolas",
    age: 18,
    gender: "female"
};

const resolvers = {
    Query: {
        person: () => nicolas
        // when query is name ..
        // name: () => 'nicolas'
    }
};

export default resolvers;