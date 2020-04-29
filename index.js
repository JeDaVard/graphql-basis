import { GraphQLServer } from 'graphql-yoga';
import { v4 as uuidv4 } from 'uuid';
import db from './src/db';


const resolvers = {
    Query: {
        users(parent, args, { db }, info) {
            if (!args.query) return db.users;
            return db.users.filter((user) =>
                user.name.toLowerCase().includes(args.query.toLowerCase())
            );
        },
        posts(parent, args, { db }, info) {
            if (!args.query) return db.posts;
            return db.posts.filter((post) =>
                post.title.toLowerCase().includes(args.query.toLowerCase())
            );
        },
        comments(parent, args, { db }, info) {
            return db.comments;
        },
        me() {
            return {
                id: 12,
                name: 'Davit',
                email: 'jedavard@gmail.com',
                age: 25,
            };
        },
        post() {
            return {
                id: 1,
                title: 'Cool post title',
                body: 'Some post body with a good description',
                published: true,
            };
        },
    },
    Mutation: {
        createUser(parent, args, { db }, info) {
            const emailTaken = db.users.some((user) => user.email === args.data.email);

            if (emailTaken) throw new Error('Email taken');

            const user = {
                id: uuidv4(),
                ...args.data
            };
            db.users.push(user);

            return user;
        },
        createPost(parent, args, { db }, info) {
            const userExists = db.users.some((user) => user.id === args.data.author);
            if (!userExists) throw new Error('User not found');

            const post = {
                id: uuidv4(),
                ...args.data
            };

            db.posts.push(post);

            return post;
        },
        createComment(parent, args, { db }, info) {
            const userExists = db.users.some((user) => user.id === args.data.author);
            if (!userExists) throw new Error('User not found');

            const postExist = db.posts.some(post => post.id === args.data.post && post.published);
            if (!postExist) throw new Error('Post not found');

            const comment = {
                id: uuidv4(),
                ...args.data
            }

            db.comments.push(comment);

            return comment;
        }
    },
    Post: {
        author(parent, args, { db }, info) {
            return db.users.find((user) => user.id === parent.author);
        },
        comments(parent, args, { db }, info) {
            return db.comments.filter((comment) => comment.post === parent.id);
        },
    },
    User: {
        posts(parent, args, { db }, info) {
            return db.posts.filter((post) => post.author === parent.id);
        },
        comments(parent, args, { db }, info) {
            return db.comments.filter((comment) => comment.author === parent.id);
        },
    },
    Comment: {
        author(parent, args, { db }, info) {
            return db.users.find((user) => user.id === parent.author);
        },
        post(parent, args, { db }, info) {
            return db.posts.find(post => post.id === parent.post)
        }
    },
};


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db
    }
});

server
    .start(() => {
        console.log('Starting a server...');
    })
    .then(() => {
        console.log('Server is up! ..');
    });
