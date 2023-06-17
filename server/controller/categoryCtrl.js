import { sequelize } from "../models/init-models";

const create = async (req, res) => {
  try {
    const category = await req.context.models.product_category.create({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description
    });
    return res.send(category);
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async(req,res) => {
  try {
      await sequelize.query('select * from customers where id = :id',
      {replacements : {id : req.params.id},type : sequelize.QueryTypes.SELECT}
      ).then(result => {
          return res.send(result)
      })
  } catch (error) {
      return res.send(error)
  }
}

export default {
  create,
  querySQL,
};