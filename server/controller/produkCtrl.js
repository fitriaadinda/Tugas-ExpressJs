import { sequelize } from "../models/init-models";

const findOne = async (req, res) => {
    try {
      const product = await req.context.models.product.findOne({
        include : [{
            model: req.context.models.product_category,
            as: "category",
            attributes: ['name', 'description'],
            where: { id: req.params.id },
          }]
      });
      return res.send(product);
    } catch (error) {
      return res.send(error);
    }
  };

  const create = async (req, res) => {
    try {
      const product = await req.context.models.product.create({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        category_id: req.body.category_id,
        price: req.body.price,
        quantity: req.body.quantity
      });
      return res.send(customer);
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
  findOne,
  querySQL,
  create
};