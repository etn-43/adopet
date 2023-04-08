const database = require('../models');

class AdocoesController{
    static async PegaTodasAdocoes (req,res){
        try {
            const todasAdocoes = await database.Adocoes.findAll();
            return res.status(200).json(todasAdocoes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async PegaUmaAdocao(req, res){
        try {
            const { id } = req.params;
            const umaAdocao = await database.Adocoes.findOne({where: {id:Number(id)} });
            return res.status(200).json(umaAdocao);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async CriaUmaAdocao (req, res){
        try {
            const pet = req.body;
            const adocaoCriada = await database.Adocoes.create(pet);
            return res.status(200).json(adocaoCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async AtualizaUmaAdocao (req, res){
        try {
            const { id } = req.params;
            const adocao = req.body;
            await database.Adocoes.update(adocao,{ where: {id:Number(id)} });
            const umaAdocao = await database.Adocoes.findOne({where: {id:Number(id)} });
            return res.status(200).json(umaAdocao);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async DeletaUmaAdocao(req, res){
        try {
            const { id } = req.params;
            await database.Adocoes.destroy({where: {id:Number(id)} });
            return res.status(200).json({message:`A adocao com o id ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AdocoesController;