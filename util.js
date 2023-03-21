function sanitizeInput(input) {
    if (typeof input === 'string') {
        return input.replace(/[\r\n\t]/g, '-');
    } else if (typeof input === 'object') {
        let sanitized = {};
        for (let key in input) {
            sanitized[key] = sanitizeInput(input[key]);
        }
        return sanitized;
    } else {
        return input;
    }
}

function logInfo(message, data = {}) {
    const sanitizedData = sanitizeInput(data);
    console.log(`[${new Date().toISOString()}] INFO: ${message}`, sanitizedData);
}

module.exports = {
    logInfo
};