const mongoose = require('mongoose');
const UsersModel = mongoose.model('Users');

exports.createUser = async (req, res) => {
   try{
    const user = new UsersModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
    
      await user.save();

      res.status(201).send({message: 'Usuário cadastrado com sucesso!'});

   }catch(err){
      res.status(500).send({message:'Ocorreu um erro ao cadastrar o usuário.'});
   }
};

exports.loginUser = async (req,res)=>{
  try{
    const {email,password} = req.body;
    const usuarioBD = await UsersModel.findOne({email,password});

    if(usuarioBD == null){
      res.status(403).send({message:'Email ou senha  incorreto.'});
    }
    res.status(200).send(usuarioBD);
  }catch(error){
    res.status(500).send({message: 'Erro ao realizar login.'});
  }
};

  exports.allUsers = async (req, res) => {
    try {
      const data = await UsersModel.find({});

      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar usuários.'});
    }
  };

