 export const fetchBooksData = async (payload: Object): Promise<any> => {
    try {
        const response = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
            mode: 'cors', 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const jsonResponse = await response.json();
        
        return jsonResponse; 
    } catch (error) {
        return null;
    }
}