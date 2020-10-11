const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
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
            return next();
        }
    );
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    // 'this' is the user doc
    bcrypt.compare(tryPassword, this.password, cb);
};

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});

module.exports = mongoose.model('User', userSchema);