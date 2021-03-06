import Sequelize, { Model } from "sequelize";
import sequelizePaginate from "sequelize-paginate";

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    sequelizePaginate.paginate(Order);
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: "recipient_id",
      as: "recipient",
    });
    this.belongsTo(models.Deliveryman, {
      foreignKey: "deliveryman_id",
      as: "deliveryman",
    });
    this.belongsTo(models.File, {
      foreignKey: "signature_id",
      as: "signature",
    });
  }
}

export default Order;
