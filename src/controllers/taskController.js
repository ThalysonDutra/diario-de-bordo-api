const mongoose = require('mongoose');
const TaskModel = mongoose.model('Tasks');
var ObjectId = require('mongodb').ObjectID;

exports.createTask = async (req, res) => {
    try{
        const newTask = new TaskModel({
            title: req.body.title,
            data: req.body.data,
            frequency:req.body.frequency,
            duration:req.body.duration,
            description:req.body.description,
            deadline:req.body.deadline,
            idUser:req.body.idUser
        }); 

        console.log(newTask)

        await newTask.save();      
        
        res.status(201).send({message: 'Atividade cadastrada com sucesso!'});

    }catch(error){
        res.status(500).send({message:'Ocorreu um erro ao cadastrar atividade.'});
    }
};

exports.findTasks = async (req, res)=>{
    try {
        const data = await TaskModel.find({idUser: req.params.idUser});
  
        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar atividades.'});
      }
};

exports.findTaskbyId = async(req,res)=>{
    try{
        const parametro = new ObjectId(req.params.idTask);
        const data = await TaskModel.findById(parametro);
        res.json(data); 
    }catch(e){
        res.status(500).send({message: 'Falha ao carregar atividade.'});
    }

};

exports.listTaskByStatus = async (req, res)=>{
    try{
        const data = await TaskModel.find({idUser: req.params.idUser, status: req.params.status});
        res.json(data);
    }catch(error){
        res.status(500).send({message: 'Falha ao carregar atividades.'});

    }
};

exports.deleteTask = async (req, res)=>{
    try{
        const parametro = new ObjectId(req.params.idTask);
        const data = await TaskModel.findByIdAndDelete(parametro);
        res.status(204).send({message: "Atividade removida."}); 
    }catch(error){
        res.status(500).send({message: "Erro ao remover atividade."});
    }
};

exports.updateTaskstatus = async (req,res)=>{
    const parametro = new ObjectId(req.params.idTask)

    const data = await TaskModel.findOneAndUpdate({_id: parametro},  { $set: { status: req.params.status }},{useFindAndModify: false},(error,model)=>{
        if(error){
            res.status(500).send({message: "Erro ao atualizar atividade."});

        }else{
            res.status(200).send({message: "Atividade atualizada com sucesso."});

        }
    })
        
};

exports.updateTask= async (req,res)=>{
    const parametro = new ObjectId(req.params.idTask)
    const {title,data,duration,frequency,description,deadline} = req.body;
    const task = await TaskModel.findOneAndUpdate({_id: parametro},  { $set: { 
        title: title,
        data: data,
        frequency: frequency,
        duration: duration,
        description: description,
        deadline: deadline
     }},{useFindAndModify: false},(error,model)=>{
        if(error){
            res.status(500).send({message: "Erro ao atualizar atividade."});

        }else{
            res.status(200).send({message: "Atividade atualizada com sucesso."});

        }
    })
};