from flask_restx import fields
from flask_app import api


# predefine model
individual_model = api.model("individual", {
    "IndividualName": fields.String,
    "Password": fields.String,
    "Occupation": fields.String
})

organization_model = api.model("organization", {
    "OrganizationName": fields.String,
    "Password": fields.String
})

login_model = api.model("login", {
    "Name": fields.String,
    "Password": fields.String
})