from flask import Flask, request

import json
app = Flask(__name__)
@app.route('/Cadastro/Aluno', methods = ['POST'])
def cadastrar_aluno()
tasks = [
    {
        "ra": 2432535,
        "name": "Pedro",
        "curso": "Ciencia da computação"

    },
    {
        "ra": 2145435,
        "name": "Gabriel",
        "curso": "Engenharia civil"
    },
    {
        "ra": 23453468,
        "name": "Rebeca",
        "curso": "Enfermagem"
    }
]
tasksJSON = json.dumps(tasks)
return tasksJSON