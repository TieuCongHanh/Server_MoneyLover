const mongoose = require('mongoose');

const schema = mongoose.Schema;

const transactionSchema = new schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        require: true
    },
    type: {
        type: String,
        require: true
    },
    day: {
        type: String,
        require: true
    },
    note: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },

});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;