import mongoose from 'mongoose'
import colors from 'colors'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { } from 'dotenv/config.js'

const connectDB = async () => {
    try {

        if (process.env.NODE_ENV === 'test') {
            console.log('Connecting to a mock db for testing purposes')
            const mongoServer = new MongoMemoryServer()

            mongoose.Promise = Promise;
            mongoServer.getUri()
                .then((mongoUri) => {
                    const mongooseOpts = {
                        useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true
                    };

                    mongoose.connect(mongoUri, mongooseOpts);

                    mongoose.connection.on('error', (e) => {
                        if (e.message.code === 'ETIMEDOUT') {
                            console.log(e);
                            mongoose.connect(mongoUri, mongooseOpts);
                        }
                        console.log(e);
                    });

                    mongoose.connection.once('open', () => {
                        console.log(`MongoDB successfully connected to ${mongoUri}`);
                    });
                });

        } else {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            })

            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
        }

    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }


}

const close = () => {
    mongoose.disconnect()
}

export { connectDB, close }

