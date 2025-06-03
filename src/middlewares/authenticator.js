import jwt from "jsonwebtoken";
import supabase from "../config/supabase";
import bcrypt from "bcrypt";
import { response } from "express";

export default (request , response, next) => {
    const token = request.headers.authorization;

    if (!token) {

        return response.status(401).json({
        mensagem: "Token não forncecido"

        
    });


    }
try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);


} catch (erro) {
      response.status(401).json({
        mensagem: "Token não forncecido"
      });
}

};