export default {
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
}