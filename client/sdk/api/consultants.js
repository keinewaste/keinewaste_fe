module.exports = {
    "version": "3.0",
    "metadata": {
        "endpointPrefix": "consultants",
        "serviceFullName": "Selfapi Consultants Service"
    },
    "operations": {
        "GetAll": {
            "name": "Consultants",
            "http": {
                "method": "GET",
                "requestUri": ""
            },
            "parameters": [],
            "map": "Consultants",
            "errors": {
                "400": {
                    "shape": "BadRequestException",
                    "exception": true
                },
                "401": {
                    "shape": "UnauthorizedException",
                    "exception": true
                },
                "403": {
                    "shape": "UnauthorizedException",
                    "exception": true
                },
                "404": {
                    "shape": "NotFoundException",
                    "exception": true
                },
                "429": {
                    "shape": "TooManyRequestsException",
                    "exception": true
                },
                "409": {
                    "shape": "ResourceConflictException",
                    "exception": true
                }
            }
        },
    }
};