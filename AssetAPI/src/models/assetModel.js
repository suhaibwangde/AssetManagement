const fileOrder = require('./fileOrder');

const Create = (data) => {
    if (typeof (data) === 'string') {
        let asset = {};
        let order = [];
        let values = [];
        if (data.includes(',')) {
            values = data.split(',');
            order = fileOrder.COMMA_DELIMITED_FILE_ORDER.split(',');
        } else if (data.includes(' ')) {
            values = data.split(' ');
            order = fileOrder.SPACE_DELIMITED_FILE_ORDER.split(' ');
        } else if (data.includes('|')) {
            values = data.split('|');
            order = fileOrder.PIPE_DELIMITED_FILE_ORDER.split('|');
        }
        order.forEach(function (property, index) {
            asset[property] = values[index] ? values[index] : '';
        });
        return asset;
    }
    return null;
}

const Compare = (one, two) => {
    return one['LastName'] === two['LastName'] &&
        one['MiddleInitial'] === two['MiddleInitial'] &&
        one['FirstName'] === two['FirstName'] &&
        one['Pet'] === two['Pet'] &&
        one['DateOfBirth'] === two['DateOfBirth'] &&
        one['FavoriteColor'] === two['FavoriteColor']
};

module.exports = { Create, Compare };