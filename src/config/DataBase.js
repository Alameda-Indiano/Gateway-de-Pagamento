import "dotenv/config";

export default {
    url: `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_HOST}.${process.env.MONGO_DB_HASH}.mongodb.net/?retryWrites=true&w=majority`
};