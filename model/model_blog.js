const blogs = [
    {
        id: '1',
        title: "Node JS",
        author: "John Doe",
        content: "Node.js is a JavaScript runtime environment used to build scalable server-side 'a'pplications."
    },
    {
        id: '2',
        title: "Angular",
        author: "Rohit Yewale",
        content: "Angular is a TypeScript-based front-end framework developed by Google for building single-page applications."
    },
    {
        id: '3',
        title: "Express JS",
        author: "Priya Sharma",
        content: "Express.js is a lightweight web framework for Node.js used to build REST APIs."
    },
    {
        id: '4',
        title: "MongoDB",
        author: "Amit Kumar",
        content: "MongoDB is a NoSQL database that stores data in flexible JSON-like documents."
    },
    {
        id: '5',
        title: "JavaScript ES6",
        author: "Sneha Patil",
        content: "ES6 introduced modern JavaScript features like let, const, arrow functions, classes, and promises."
    },
    {
        id: '6',
        title: "TypeScript",
        author: "Vikram Singh",
        content: "TypeScript is a superset of JavaScript that adds static typing and improves code maintainability."
    }
];

function getAllBlog(req, res) {
    try {
        res.status(200).json({
            success: true,
            data: blogs
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetch Blogs!!`,
            error: error.message
        })
    }
};

function getSingleBlog(req, res) {
    try {
        const BlogId = req.params.id;
        const Blog = blogs.find(ele => ele.id === BlogId);

        if (!Blog) {
            return res.status(404).json({
                success: false,
                message: `Blog With Id ${BlogId} is Not Found`
            });
        }
        res.status(200).json({
            success: true,
            data: Blog
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching blog",
            error: error.message
        });
    }
}

function PostBolg(req, res) {
    try {

        let { title, content, author } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and Content are required!"
            });
        }

        let newBlog = {
            id: Date.now().toString(),
            title,
            content,
            author: author || "anonymous"
        };

        blogs.unshift(newBlog);

        res.status(201).json({
            success: true,
            data: newBlog,
            message: `The blog with id ${newBlog.id} is added successfully!`
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating blog",
            error: error.message
        });
    }
}

function UpdateBlog(req, res) {
    try {
        let UpdateId = req.params.id;
        let getindex = blogs.findIndex(ele => ele.id === UpdateId)

        if (getindex === -1) {
            return res.status(404).json({
                success: false,
                message: `The Blog with id ${UpdateId} is Not found!!`
            })
        }

        let { title, content, author } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and Content are required!"
            });
        }

        let updated_obj = {
            ...blogs[getindex],
            ...req.body
        }

        blogs[getindex] = updated_obj

        res.status(200).json({
            success: true,
            message: `Blog with id ${UpdateId} is Updated Successfully!!`,
            data: updated_obj
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching blog",
            error: error.message
        });
    }
};

function DeleteBolg(req, res) {
    try {
        let BlogId = req.params.id;
        let getindex = blogs.findIndex(ele => ele.id === BlogId)

        if (getindex == -1) {
            return res.status(404).json({
                success: false,
                message: `The blog with id ${BlogId} is not found`
            })
        }

        let blog = blogs.splice(getindex, 1)

        res.status(200).json({
            success: true,
            data: blog,
            message: `The Blog with id ${BlogId} is removed Successfylly`
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching blog",
            error: error.message
        });
    }
};


module.exports = {
    getAllBlog,
    getSingleBlog,
    PostBolg,
    UpdateBlog,
    DeleteBolg
}