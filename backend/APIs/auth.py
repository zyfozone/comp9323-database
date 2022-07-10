import json
from flask import request
from flask_restx import Resource
from models.request_model import *
from tool import *

# define namespace
auth = api.namespace('auth', description='Authentication Service')

# auth api is for user registration and login

# route function
# individual user's sign up
@auth.route('/signup/individual', doc={"description": "new individual user registration"})
@auth.response(400, 'Bad Request')
@auth.response(403, 'Forbiddent')
@auth.response(201, 'Created')
class IndividualRegister(Resource):
    @auth.expect(individual_model)
    @auth.doc(description='Registration a new individual to database')
    def post(self):
        data = json.loads(request.get_data())
        IndividualName = data['IndividualName']
        Password = data['Password']
        Occupation = data['Occupation']
        if IndividualName == "" or Password == "" or Occupation == "":
            output = {
                "message": "You need to fill in the complete information"
            }
            return output, 400
        else:
            sql = f"SELECT * FROM Individual WHERE IndividualName='{IndividualName}';"
            if sql_command(sql):
                output = {
                    "message": "Name already used"
                }
                return output, 403
            else:
                IndividualID = 0
                sql = "INSERT INTO individual VALUES ({},'{}', '{}', NULL, '{}');".format(IndividualID, IndividualName, Password, Occupation)
                sql_command(sql)
                select_sql = f"SELECT IndividualID FROM Individual WHERE IndividualName='{IndividualName}';"
                IndividualID = sql_command(select_sql)[0][0]
                output = {
                    "message": "Success register",
                    "individualID": IndividualID,
                    "individualName": IndividualName
                }
                return output, 201

#organization user's sign up
@auth.route('/signup/organization', doc={"description": "new organization user registration"})
@auth.response(400, 'Bad Request')
@auth.response(403, 'Forbiddent')
@auth.response(201, 'Created')
class OrganizationRegister(Resource):
    @auth.expect(organization_model)
    def post(self):
        data = json.loads(request.get_data())
        OrganizationName = data['OrganizationName']
        Password = data['Password']
        if OrganizationName == "" or Password == "":
            output = {
                "Message": "You need to fill in the complete information"
            }
            return output, 400
        else:
            sql = f"SELECT * FROM Organization WHERE OrganizationName='{OrganizationName}';"
            if sql_command(sql):
                output = {
                    "Message": "Name already used"
                }
                return output, 403
            else:
                OrganizationID = 0
                sql = "INSERT INTO Organization VALUES ({},'{}', '{}', NULL, '{}');".format(OrganizationID, OrganizationName, Password)
                sql_command(sql)
                select_sql = f"SELECT OrganizationID FROM Organization WHERE OrganizationName='{OrganizationName}';"
                OrganizationID = sql_command(select_sql)[0][0]
                output = {
                    "Message": "Success register",
                    "OrganizationID": OrganizationID,
                    "OrganizationName": OrganizationName
                }
                return output, 201

@auth.route('/login')
class Login(Resource):
    @auth.response(200, 'OK')
    @auth.response(400, 'Bad Request')
    @auth.response(403, 'Forbiddent')
    @auth.response(404, 'Not Found')
    @auth.expect(login_model)
    def post(self):
        data = json.loads(request.get_data())
        Name = data['Name']
        Password = data['Password']
        if Name == "" or Password == "":
            output = {
                "message": "Missing name or password"
            }
            return output, 400
        
        user_sql = f"SELECT IndividualID,IndividualName,Password FROM Individual WHERE IndividualName='{Name}';"
        org_sql = f"SELECT OrganizationID,OrganizationName,Password FROM Organization WHERE OrganizationName='{Name}';"
        result_from_user = sql_command(user_sql)
        result_from_org = sql_command(org_sql)
        if not result_from_user and not result_from_org:
            output = {
                    "Message": "Name not signup as individual or organization"
            }
            return output, 404
        else:
            if Password == result_from_user[0][0] or Password == result_from_org[0][0]:
                output = {
                    "message": "success",
                    "name": result_from_user[0][1],
                    "id": result_from_user[0][2]
                }
                return output, 200
            else:
                output = {
                    "message": "Wrong password"
                }
                return output, 403
