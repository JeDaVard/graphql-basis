import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User';
import Comment from './resolvers/Comment';
import Post from './resolvers/Post';

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Subscription,
        User,
        Comment,
        Post
    },
    context: {
        db,
        pubsub
    }
});

server
    .start(() => {
        console.log('Starting a server...');
    })
    .then(() => {
        console.log('Server is up! ..');
    });
