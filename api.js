const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://987ff9a4-78ea-4f74-9e9d-c2ad86fbe9c8-00-wajfvnw72zdl.sisko.replit.dev/terabox?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
