import supabese from "../config/supabase";
import bcrypt from "bcrypt";
import { response } from "express";
import { request } from "http";
import jwt from "jsonwebtoken";
import supabase from "../config/supabase";
import { error } from "console";

//Cadastro de Usuário
// async function registerUser (request, response,){
const registerUser = async (request, response) => {

//Desestruturação do Objeto
const {nome, email, senhainformada} = request.boby;

//cria um hash para senha informada
const passwordHashed = await bcrypt.hast(senhainformada, 10);

//Abre a conexão com o supabase (tabela Users)
const {data, error} = await supabase.from('users').insert([

{
    nome,
    email,
    senhainformada: passwordHashed

}

]);

if (error){
    return response.status(500).json({
    
        erro: "Erro:", error

    });

}

response.status(201).json({
        mensagem: "Usuario cadastrado com sucesso!"

    });

};

//login 
const authentication = async (request.response) => {
//Desestruturação do objeto

const {email, senhainformada } = request.boby;

//Abre a conexão com o supabase (tabela Users)
const {data: user, error} = await supabase.from('users')

.select("*")
.eq("email", email)
.single();

if (error || !users) {

    return response.status(401).json({
        mensagem: "Credencias inválidas"
    });
}
//Criptografa a senha e compara a senha que está no BD.
const senhaEnviada = await bcrypt.compare(senhainformada, user.senha);

if (!senhaEnviada){

    return response.status(401).json({

        mensagem: "Credencias inválidas"

    });
}

//Gerar token
const token = jwt.sign(
    {id:user.id},
    process.env.jwt.JWT_SECRET,
    {expiresIn: "4h"}

);

response.json({token});

};

//Listar todos os Usuários
     const listUsres = (request , response) => {
        const{data, error} = await supabase.from("users")
        .select("id", nome, email);

        if (error){
            return response. status(500).json({
                erro: "Erro:", error
            });

        };
    response.json(data);
 };

 //Atualizar dados de um registro (usuário)

 const updateUser = async (request , response) => {
    const {id} = request.params;
    const {nome, email, senha} = request.boby;

//cria um hash para senha informada
const passwordHashed = await bcrypt.hast(senhainformada, 10);

    const dataUpdated = {

        ...(nome && {nome}),
        ...(email && {email}),
        ...(senha && {senha: senhainformada})
    }

    const {error} = await supabase.from("users")
    .update(dataUpdated)
    .eq("id", id);

    if (error){
        return response.status(500).json({
             error: "Erro:", error

        })

        response.json({
            mensagem: "Usuário atualizado com sucesso"
        })
   }

 //Exclir registro (Usuário)
 };


