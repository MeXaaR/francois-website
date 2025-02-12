const BASE_URL = process.env.MEXAR_URL;

if (!BASE_URL) {
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
                },
                // Remove no-cache headers and use next.js cache configuration
                next: {
                    revalidate: 3600 // Revalidate every hour
                }
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
                },
                // Remove no-cache headers since POST requests shouldn't be cached
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
