const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const SALT_ROUNDS = 6;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    formation: {
        type: String,
        enum: ['Eagle Ford', 'Permian', 'Anadarko', 'Niobrara', 'Bakken', 'Appalachia'],
        required: true
    },
    technologiesUsed: { type: String, required: true },
    company: { type: String, required: false }
}, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next) {
    // Mongoose binds 'this' to be the doc
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(
        user.password,
        SALT_ROUNDS,
        function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        }
    );
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    //'this' represents the document that you called comparePassword on
    bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model('User', userSchema);