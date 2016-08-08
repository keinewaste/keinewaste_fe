module.exports = {
    "version": "3.0",
    "metadata": {
        "endpointPrefix": "market",
        "serviceFullName": "Keine Waste Service"
    },
    "operations": {
        "GetAll": {
            "name": "Autocomplete",
            "http": {
                "method": "GET",
                "requestUri": ""
            },
            "parameters": [],
            "map": "Autocomplete",
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
        "GetById": {
            "name": "Autocomplete",
            "http": {
                "method": "GET",
                "requestUri": "/{id}"
            },
            "parameters": [],
            "map": "Autocomplete",
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
        "GetByUser": {
            "name": "Autocomplete",
            "http": {
                "method": "GET",
                "requestUri": "/user/{id}"
            },
            "parameters": [],
            "map": "Autocomplete",
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
        "CreateOffer": {
            "name": "CreateOffer",
            "http": {
                "method": "POST",
                "requestUri": "/offer"
            },
            "parameters": [
                {
                    "name": "deliveryType",
                    "location": "body"
                },
                {
                    "name": "description",
                    "location": "body"
                },
                {
                    "name": "distance",
                    "location": "body"
                },
                {
                    "name": "products",
                    "location": "body"
                },
                {
                    "name": "meetingTime",
                    "location": "body"
                },
                {
                    "name": "categories",
                    "location": "body"
                }
            ],
            "map": "Autocomplete",
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
        "Match": {
            "name": "Match",
            "http": {
                "method": "GET",
                "requestUri": "/{id}/match"
            },
            "parameters": [

            ],
            "map": "Autocomplete",
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
        }
    }
};