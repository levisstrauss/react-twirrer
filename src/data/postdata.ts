// postsData.ts
export interface Post {
    id: number;
    userAvatar: string;
    userName: string;
    userHandle: string;
    postTime: string;
    postText: string;
    postImg: string;
}

const postsData: Post[] = [
    {
        id: 1,
        userAvatar: "assets/images/user2.jpg",
        userName: "Helen Brown",
        userHandle: "helenbrown",
        postTime: "15m",
        postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et voluptatibus vel tenetur quos, id omnis sed error fuga necessitatibus.",
        postImg: "assets/images/post-img-1.jpg"
    },
    {
        id: 2,
        userAvatar: "assets/images/user3.jpg",
        userName: "Helen Brown",
        userHandle: "helenbrown",
        postTime: "15m",
        postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et voluptatibus vel tenetur quos, id omnis sed error fuga necessitatibus.",
        postImg: "assets/images/post-img-2.jpg"
    },
    {
        id: 3,
        userAvatar: "assets/images/user4.jpg",
        userName: "Helen Brown",
        userHandle: "helenbrown",
        postTime: "15m",
        postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et voluptatibus vel tenetur quos, id omnis sed error fuga necessitatibus.",
        postImg: "assets/images/post-img-3.jpg"
    },
    {
        id: 4,
        userAvatar: "assets/images/user5.jpg",
        userName: "Helen Brown",
        userHandle: "helenbrown",
        postTime: "15m",
        postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et voluptatibus vel tenetur quos, id omnis sed error fuga necessitatibus.",
        postImg: "assets/images/post-img-4.jpg"
    },
    {
        id: 5,
        userAvatar: "assets/images/user6.jpg",
        userName: "Helen Brown",
        userHandle: "helenbrown",
        postTime: "15m",
        postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et voluptatibus vel tenetur quos, id omnis sed error fuga necessitatibus.",
        postImg: "assets/images/post-img-5.jpg"
    }
];

export default postsData;
