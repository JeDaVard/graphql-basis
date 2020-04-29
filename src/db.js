const users = [
    {
        id: '1',
        name: 'Davit',
        email: 'jedavard@gmail.com',
        age: 25,
        posts: ['1', '2', '3'],
        comments: ['1', '2', '3'],
    },
    {
        id: '2',
        name: 'Sarah',
        email: 'sara@gmail.com',
        age: 14,
        posts: [],
    },
    {
        id: '3',
        name: 'Hannah',
        email: 'hannah@gmail.com',
        age: 18,
        posts: [],
    },
];
const posts = [
    {
        id: '1',
        title: 'Title 1',
        body: 'Ipsum dolor sik',
        published: true,
        author: '1',
    },
    {
        id: '2',
        title: 'Title fucker',
        body: 'Dolor sit amet',
        published: false,
        author: '1',
    },
    {
        id: '3',
        title: 'Good pussy',
        body: 'Lorem ipsum',
        published: false,
        author: '1',
    },
];
const comments = [
    {
        id: '1',
        text: 'fuuckk!!111',
        author: '1',
        post: '2',
    },
    {
        id: '2',
        text: 'very nice post',
        author: '1',
        post: '2',
    },
    {
        id: '3',
        text: 'the last comment',
        author: '1',
        post: '2',
    },
    {
        id: '286bb0f9-dbb1-40c1-a872-ebb2dee85509',
        text: 'wow, this is awesome!',
        author: '1',
        post: '1'
    }

];
const db = { users, posts, comments }
export { db as default }