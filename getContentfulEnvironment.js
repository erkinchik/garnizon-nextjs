require('dotenv').config();
const contentfulManagement = require('contentful-management');
module.exports = function () {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: 'CFPAT-zFGBu45G8898Di-j0qJ6jbTKiWIRQhqapzX48FqL_1Q',
    });

    return contentfulClient
        .getSpace('mf43r7aon96w')
        .then((space) => space.getEnvironment('master'));
};