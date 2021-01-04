/**
 * @swagger
 *  components:
 *    schemas:
 *      UserSchema:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 *           password: 1234
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
  },
  password:{
      type: String,
      required:true,
      select: false
  }
});

module.exports = mongoose.model('Users', UserSchema);