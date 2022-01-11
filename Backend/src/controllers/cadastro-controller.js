const createUserModel = require('../models/cadastro-model');

exports.cadastrarUsuario = (req, res) => {

    createUserModel.find((error, cadastros) => {

        if(error){
            res.json({
                status: 'error',
                message: 'Não foi possível fazer o cadastro'
            });
        }

        for (let i = 0; i < cadastros.length; i++) {
            if(req.body.nome === cadastros[i].nome){
                res.json({
                    status: 'error',
                    message: 'Este usuário já está cadastrado'
                });
                return;
            }
        }

        let cadastro = new createUserModel();

        cadastro.nome = req.body.nome;

        cadastro.save((error) => {
            if(error){
                res.send({
                    status: 'error',
                    message: error
                });
            }else{
                res.send({
                    status: 'ok',
                    message: 'O cadastro foi realizado'
                });
            }
        });
    });
}

exports.listarCadastros = (req, res) => {

    createUserModel.find((error, cadastros) => {

        if(cadastros.length > 0){
            
            if(error){
                res.json({
                    status: 'error',
                    message: 'Não foi possível listar os cadastros'
                });
            }else{
                console.log('Cadastros encontrados')
                res.json({
                    status: 'ok',
                    message: cadastros
                });
            }
        }else{
            res.json({
                message: 'Você ainda não possui nenhum cadastro'
            });
        }
    });
}

exports.listarCadastrosPorID = (req, res) => {

    let id_cadastro = req.params.id;

    createUserModel.findById(id_cadastro, (error, cadastros) => {
        if(error || !cadastros){
            res.json({
                status: 'error',
                message: 'Não foi possível listar este cadastro'
            });
        }else{
            res.json({
                status: 'ok',
                message: cadastros
            });
        }
    });
}

exports.atualizarCadastro = (req, res) => {
    let id_cadastro = req.params.id;

    createUserModel.findById(id_cadastro, (error, cadastros) => {

        if (error || !cadastros){
            res.json({
                status: 'error',
                message: 'Não foi possível atualizar o cadastro'
            });
        }else{
            cadastros.nome = req.params.nome;

            cadastros.save((error) => {
                if(error){
                    res.json({
                        status: 'error',
                        message: 'Não foi possível atualizar o cadastro'
                    });
                }else{
                    res.json({
                        status: 'ok',
                        message: 'Cadastro atualizado',
                        novoCadastro: cadastros
                    });
                }
            });
        }
    });
}

exports.removerCadastro = (req, res) => {
    let id_cadastro = req.params.id;

    createUserModel.deleteOne({
        _id: id_cadastro
    }, (error, cadastros) => {
        if(error){
            res.json({
                status: 'erro',
                message: 'Não foi possível remover o cadastro'
            });
        }else{
            res.json({
                status: 'ok',
                message: 'Cadastro removido com sucesso'
            });
        }
    });
}