# Diario de Bordo - API


<h4> 
	🚧 API para aplicativo diário de bordo  🚧
</h4>

<h6>
A API foi construída para aplicação de gerenciamento de rotinas, onde será possível criar usuarios e  adicionar atividades, tarefas e reuniões.
</h6>

<h4>
DETALHAMENTO API
</h4>


<h4>
Features
</h4>

- [x] Cadastro de usuário
- [x] Cadastro de tarefas
- [x] Login
- [x] Remoção de tarefas
- [x] Atualização de Status de tarefas
- [x] Edição de tarefas
- [x] Listagem de tarefas por status e usuário
- [x] Listagem de tarefas usuário
- [ ] Esqueceu senha

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/ThalysonDutra/diario-de-bordo-api

# Acesse a pasta do projeto no terminal/cmd
$ cd diario-de-bordo-api

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```


### DETALHAMENTO API

PÁGINA INICIAL

```bash
 
* GET https://api-diario-de-bordo.herokuapp.com/
 
* Response
 
    {
      "title": string,
      "version":string
    }
```

CRIAR USUÁRIO

```bash
 
* POST https://api-diario-de-bordo.herokuapp.com/users/
 
* Body
 
    {
      "name": string,
      "email":string,
      "password":string
    }
  
* Response
    {
        "message": string
    }
```


LOGIN

```bash
 
* POST https://api-diario-de-bordo.herokuapp.com/users/login
 
* Body
 
{
  "email":string,
  "password":string
}

  
* Response
{
    "_id": string,
    "name": string,
    "email": string,
    "__v": int
}
```

CADASTAR ATIVIDADE

```bash
 
* POST https://api-diario-de-bordo.herokuapp.com/users/tasks
 
* Body
 
{
  "idUser" : string,  
  "title": string,
  "data": date,
  "frequency": string,
  "duration": number,
  "deadline": date,
  "description": string
  }

  
* Response
{
    "message": string
}
```
LISTAR ATIVIDADES DO USUÁRIO

```bash
 
* GET https://api-diario-de-bordo.herokuapp.com/tasks/:idUser

| Parâmetro |   Tipo  |
|  idUser   |  string |
 
* Response
[
  {
      "status": number,
      "_id": string,
      "title": string,
      "data": date,
      "frequency": string,
      "duration": number,
      "deadline": date,      
      "idUser": string,
      "__v": int,
      "description": string,
  }
]
```
LISTAR ATIVIDADES DO USUÁRIO POR STATUS

```bash
 
* POST https://api-diario-de-bordo.herokuapp.com/tasks/user/:idUser/status/:status

| Parâmetro |   Tipo  |
|  idUser   |  string |
|  status   |  number |
 
* Response
[
  {
      "status": number,
      "_id": string,
      "title": string,
      "data": date,
      "frequency": string,
      "duration": number,
      "deadline": date,      
      "idUser": string,
      "__v": int,
      "description": string
  }
]
```

REMOVER TAREFAS

```bash
 
* DELETE https://api-diario-de-bordo.herokuapp.com/tasks/id/:idTask

| Parâmetro |   Tipo  |
|  idTask   |  string |
 
* Response
Code: 202
```

EDITAR TAREFAS

```bash
 
* PUT https://api-diario-de-bordo.herokuapp.com/tasks/id/:idTask/status/:status

| Parâmetro |   Tipo  |
|  idTask   |  string |
|  status   |  number |
 
* Response

    {
        "message": string
    }
```
