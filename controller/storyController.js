const prisma = require("../lib/prisma");

const getAllStory = async () => {
    return await prisma.story.findMany();
};

const getStoryById = async (storyId) => {
    return await prisma.story.findUnique({
        where: {
            id: parseInt(storyId),
        },
    });
};

module.exports = { getAllStory, getStoryById };
