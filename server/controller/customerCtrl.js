import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {      
  try {
    const customer = await req.context.models.customers.findAll({
      include : [{
        model: req.context.models.users,
        as: "user",
        attributes: ['username', 'password']
      }]
    })
    return res.send(customer);
  } catch (error) {
    return res.send(error);
  }
};

const findAllDetailOrder = async (req, res) => {      
  try {
    const customer = await req.context.models.customers.findAllDetailOrder({
      include : [{
        model: req.context.models.users,
        as: "user",
        include : [{
          model: req.context.models.orders,
          as: "orders",
          include : [{
            model: req.context.models.order_detail,
            as: "order_details"
          }]
        }]
      }]
    })
    return res.send(customer);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const customer = await req.context.models.customers.create({
      id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_id: req.body.user_id
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
  findAll,
  findAllDetailOrder,
  create,
  querySQL,
};