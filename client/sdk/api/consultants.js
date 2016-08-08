module.exports = {
    "version": "3.0",
    "metadata": {
        "endpointPrefix": "consultants",
        "serviceFullName": "Sapi Consultants Service"
    },
    "operations": {
        "GetAll": {
            "name": "Consultants",
            "http": {
                "method": "GET",
                "requestUri": "/timetable/{date}"
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
        "CreateConsultant": {
            "name": "CreateConsultant",
            "http": {
                "method": "POST",
                "requestUri": ""
            },
            "parameters": [
                {
                    "name": "firstName",
                    "location": "body"
                },
                {
                    "name": "lastName",
                    "location": "body"
                },
                {
                    "name": "skype",
                    "location": "body"
                },
                {
                    "name": "hangouts",
                    "location": "body"
                },
                {
                    "name": "workPhone",
                    "location": "body"
                },
                {
                    "name": "privatePhone",
                    "location": "body"
                },
                {
                    "name": "email",
                    "location": "body"
                },
                {
                    "name": "slotSelection",
                    "location": "body"
                }
            ],
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