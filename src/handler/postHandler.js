const { getAllPostApi, getAllCommentApi } = require('../resources/post');

const postHandler = {};

postHandler.getAllPost = (req, res) => {
    getAllPostApi()
        .then((data) => {
            res.writeHead(200, 'OK');
            res.end(JSON.stringify(data));
        })
        .catch((err) => {
            res.writeHead(500, 'Internal Server Error');
            res.end(JSON.stringify(err));
        });
};

postHandler.getAllComment = (req, res) => {
    getAllCommentApi()
        .then((data) => {
            res.writeHead(200, 'OK');
            res.end(JSON.stringify(data));
        })
        .catch((err) => {
            res.writeHead(500, 'Internal Server Error');
            res.end(JSON.stringify(err));
        });
};

postHandler.getPostComment = async (req, res) => {
    const post = await getAllPostApi();
    const comment = await getAllCommentApi();

    const postComment = post.map((item) => {
        const commentPost = comment.filter((comment) => {
            return comment.postId === item.id;
        });
        return {
            ...item,
            comments: commentPost,
        };
    });

    res.writeHead(200, 'OK');
    res.end(JSON.stringify(postComment));
};

module.exports = postHandler;
