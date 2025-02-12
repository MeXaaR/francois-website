const BASE_URL = process.env.MEXAR_URL;

if (!BASE_URL) {
    console.log(process.env.MEXAR_URL)
    console.warn('MEXAR_URL is not defined in environment variables');
}

const apiClient = {
    /**
     * Generic GET request
     * @param {string} endpoint - The API endpoint to fetch from
     * @returns {Promise} - Response data
     */
    async get(endpoint) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "x-api-key": process.env.API_KEY,
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
                cache: 'no-store',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    },

    /**
     * Generic POST request
     * @param {string} endpoint - The API endpoint to send data to
     * @param {Object} data - The data to send
     * @returns {Promise} - Response data
     */
    async post(endpoint, data) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-api-key": process.env.API_KEY,
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
                cache: 'no-store',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    },
};

export default apiClient;
