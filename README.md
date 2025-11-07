# 🧠 API de Gerenciamento de Tarefas — Node.js + PostgreSQL

Este projeto foi desenvolvido como parte da disciplina de **Modelos e Linguagens de Programação III**, com o objetivo de demonstrar a criação de uma **API RESTful** utilizando **Node.js**, **Express** e **PostgreSQL**.

A aplicação permite realizar operações completas (CRUD) em uma tabela de tarefas — como criar, listar, atualizar e excluir registros — utilizando o banco de dados hospedado na plataforma **Render**.

---

## 👨‍🏫 Desenvolvido por

- **Felipe Sabino**  
- **Enock Júnior**
- **Samuel Mota**
- **Pedro José**
- **Felipe Oliveira**
- **André Muruci**
- **Fabio Buecker**

---

## ⚙️ Tecnologias Utilizadas

- **Node.js** — ambiente de execução JavaScript no servidor  
- **Express.js** — framework para criação de rotas e controle de requisições  
- **PostgreSQL** — banco de dados relacional  
- **pg (node-postgres)** — biblioteca para conexão e execução de queries SQL  

---

## 🌐 Acesso à API

A API está hospedada na plataforma Render e pode ser acessada diretamente através do link:

🔗 **[https://api-trabalho-izo.onrender.com/tasks](https://api-trabalho-izo.onrender.com/tasks)**

---

## 🗄️ Estrutura da Tabela no Banco de Dados

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false
);
```

---

## 🔄 Endpoints da API

### ➤ **GET /**  
**Descrição:** Retorna todas as tarefas cadastradas.  

**Exemplo:**
```bash
GET https://api-trabalho-izo.onrender.com/tasks
```

**Resposta:**
```json
[
  { "id": 1, "title": "Estudar Node.js", "completed": false },
  { "id": 2, "title": "Fazer o trabalho da faculdade", "completed": true }
]
```

---

### ➤ **GET /:id**  
**Descrição:** Retorna uma tarefa específica pelo ID.  

**Exemplo:**
```bash
GET https://api-trabalho-izo.onrender.com/tasks/1
```

**Resposta:**
```json
{ "id": 1, "title": "Estudar Node.js", "completed": false }
```

---

### ➤ **POST /**  
**Descrição:** Cria uma nova tarefa no banco.  

**Exemplo:**
```bash
POST https://api-trabalho-izo.onrender.com/tasks
```

**Corpo da requisição:**
```json
{
  "title": "Nova tarefa",
  "completed": false
}
```

**Resposta:**
```json
{
  "success": "Tarefa criada com sucesso"
}
```

---

### ➤ **PUT /:id**  
**Descrição:** Atualiza o título ou o status de uma tarefa existente.  

**Exemplo:**
```bash
PUT https://api-trabalho-izo.onrender.com/tasks/1
```

**Corpo da requisição:**
```json
{
  "title": "Tarefa atualizada",
  "completed": true
}
```

**Resposta:**
```json
{
  "id": 1,
  "title": "Tarefa atualizada",
  "completed": true
}
```

---

### ➤ **DELETE /:id**  
**Descrição:** Exclui uma tarefa do banco de dados.  

**Exemplo:**
```bash
DELETE https://api-trabalho-izo.onrender.com/tasks/1
```

**Resposta:**
```json
{
  "message": "Tarefa 1 deletada com sucesso!"
}
```

---

## 🧠 Objetivo Acadêmico

Este projeto tem como finalidade:

- Compreender o funcionamento de uma API RESTful  
- Aplicar na prática os conceitos de rotas HTTP e operações CRUD  
- Demonstrar a integração entre Node.js e PostgreSQL  
- Entender o fluxo completo de comunicação entre cliente, servidor e banco de dados  

---

## 📚 Observações

- A API está **totalmente funcional e pública**, podendo ser testada via **Postman**, **Hoppscotch**, **Insomnia** ou diretamente com **cURL**.  
- Nenhuma configuração local é necessária.  
- Caso o serviço Render demore para responder, **aguarde alguns segundos** — a instância pode estar “hibernada” por inatividade.  

---

## 🎓 Informações Acadêmicas

- **Disciplina:** Modelos e Linguagens de Programação III
- **Semestre:** 6º
- **Ano:** 2025  
- **Instituição:** Multivix – Cachoeiro de Itapemirim  
- **Professor:** Antonio Izo
