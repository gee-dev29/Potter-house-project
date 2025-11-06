import mongoose from "mongoose";
import consola from "consola";

const dbConnection = () => {
    return mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((result) => {
            consola.success({
                message: "Database conncetion successful",
                badge: true,
            });
        })
        .catch((error) => {
            consola.error({ message: "Unable to connect to DB" });
        });
};

export default dbConnection;
