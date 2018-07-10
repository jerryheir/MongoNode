import mongoose from 'mongoose';

export default () => {
    // mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://JeremiahHeir:jerry4mlab@ds119150.mlab.com:19150/chimobi?keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000', function(err) {
        if (err) {
            logger.error('MongoDB connection error: ' + err);
            process.exit(1);
        }
    });
    mongoose.connection
    .once('open', () => console.log('Mongodb running') )
    .on('error', err => console.error(err))
}