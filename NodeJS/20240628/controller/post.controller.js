const { Posts } = require("../models");

const post = {
    async create(content, user_name) {
        try {
            await Posts.create({
                content, user_name
            })
        } catch (error) {
            return error;
        }
    },

    async postSelectIndex(id) {
        try {
            return await Posts.findOne({ where: { id } });
        } catch (error) {
            return error;
        }
    }, 
    
    async postSelectAll() {
        try {
            return await Posts.findAll();
        } catch (error) {
            return error;
        }
    }
}

module.exports = post;