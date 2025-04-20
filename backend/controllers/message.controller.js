import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const sendMessage = async(req, res, next) =>{
    try {
        const {message} = req.body;
        const receiverId = req.params.id;
        const senderId = req.user.id;
        // console.log(senderId, receiverId, message);
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

        // socket io functionality-------------------
        const receiverSocketId = getReceiverSocketId(receiverId);
        // console.log(receiverSocketId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).send(newMessage);
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

        // socket io functionality----------------------
        

        res.status(200).send(messages);
    } catch (error) {
        next(error);
    }
}


export { sendMessage, getMessage}