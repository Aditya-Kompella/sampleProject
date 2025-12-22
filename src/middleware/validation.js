// Check if request body exists and is not empty
export const validateRequestBody = (req, res, next) => {
    // Check Content-Type
    const contentType = req.headers['content-type'];
    if (!contentType || !contentType.includes('application/json')) {
        return res.status(400).json({
            success: false,
            message: "Content-Type must be application/json"
        });
    }
    
    // Check if body exists
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Request body is required"
        });
    }
    
    next(); // Continue to next middleware/route handler
};

// Validate specific required fields
export const validateFields = (requiredFields) => {
    return (req, res, next) => {
        const missingFields = [];
        
        requiredFields.forEach(field => {
            if (!req.body[field]) {
                missingFields.push(field);
            }
        });
        
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }
        
        next();
    };
};