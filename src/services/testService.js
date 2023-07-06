const { CustomError } = require('../helpers');
const { UserModel } = require('../models');

class TrackService {
  getAll = async () => {
    console.log(UserModel);
    const users = await UserModel.find({});
    console.log('users-log', users);
    if (!users) throw new CustomError('Unable to get users.', 500);

    return users;
  };

}

module.exports = new TrackService();
