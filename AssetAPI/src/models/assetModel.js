const fileOrder = require('./fileOrder')

// Create Asset Model
const Create = (data) => {
    // Check data provided was string
    if (typeof (data) === 'string') {
        // Create asset object
        let asset = {}
        // Create order array
        let order = []
        // Create values array
        let values = []
        // Check if array was comma delimited
        if (data.includes(',')) {
            // Get values of comma delimited
            values = data.split(',')
            // Get order of comma delimited
            order = fileOrder.COMMA_DELIMITED_FILE_ORDER.split(',')
        } else if (data.includes(' ')) {
            // Get values of space delimited
            values = data.split(' ')
            // Get order for space delimited
            order = fileOrder.SPACE_DELIMITED_FILE_ORDER.split(' ')
        } else if (data.includes('|')) {
            // Get values of pipe delimited
            values = data.split('|')
            // Get order of pipe delimited
            order = fileOrder.PIPE_DELIMITED_FILE_ORDER.split('|')
        }
        // Loop over order
        order.forEach((property, index) => {
            // fill property based on order and value at index
            asset[property] = values[index] ? values[index] : ''
        })
        return asset
    }
    return null
}

// Compare Asset base on property value
const Compare = (one, two) => {
    return one['LastName'] === two['LastName'] &&
        one['MiddleInitial'] === two['MiddleInitial'] &&
        one['FirstName'] === two['FirstName'] &&
        one['Pet'] === two['Pet'] &&
        one['DateOfBirth'] === two['DateOfBirth'] &&
        one['FavoriteColor'] === two['FavoriteColor']
}

module.exports = { Create, Compare }
