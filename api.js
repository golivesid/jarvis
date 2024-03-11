const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            'https://97230462-11c2-4345-861d-ad5a111cb134-00-3l5og8lb3sk19.sisko.replit.dev/terabox?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
