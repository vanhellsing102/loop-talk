const Conversation = require("../models/conversation.model.js");
const Message = require("../models/message.model.js");

const sendMessage = async(req, res, next) =>{
    try {
        const {message} = req.body;
        const receiverId = req.params.id;
        const senderId = req.user.id;
        const conversations = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        }) 
        if(!conversations){
            conversations = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            conversations.messages.push(newMessage._id);
        }
        await Promise.all([conversations.save(), newMessage.save()]);
        res.status(201).send(newMessage);
        // socket io functionality-------------------
    } catch (error) {
        next(error);
    }
}

const getMessage = async(req, res, next) =>{
    try {
        const receiverId = req.params.id;
        const senderId = req.user.id;
        const conversations = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        }).populate("messages");
        if(!conversations){
            return res.status(200).send([]);
        }
        const messages = conversations.messages;
        res.status(200).send(messages);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    sendMessage,
    getMessage
}