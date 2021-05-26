import * as mongoose from "mongoose";

const fireBaseDeviceKeySchema = new mongoose.Schema({
  deviceKey: {
    type: String,
    required: true,
  },
});

const fireBaseDeviceKey = mongoose.model(
  "fireBaseDeviceKey",
  fireBaseDeviceKeySchema
);
export { fireBaseDeviceKey };
