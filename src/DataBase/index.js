import mongoose from "mongoose";
import ConfigDataBase from "../config/DataBase.js";

class DataBase {
    
    constructor() {
        this.connection = mongoose.connect(ConfigDataBase.url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
    };

};

export default new DataBase();
