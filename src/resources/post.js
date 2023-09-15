const getAllCommentApi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    return data;
};

const getAllPostApi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
};

module.exports = {
    getAllCommentApi,
    getAllPostApi,
};
