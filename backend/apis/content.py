import json
from flask import request
from flask_restx import Resource
from models.request_model import *
from tool import *

# define namespace
cont = api.namespace('cont', description='Content Service')

# cont api is for content recommandation
@cont.route('/<int:individualID>/recommandationList', doc={'description': 'get recommanded content list'})
@cont.response(400, 'Bad Request')
@cont.response(403, 'Forbiddent')
@cont.response(200, 'Ok')
class RecommandationList(Resource):
    def get(self, individualID):
        return 200

# cont api is for preference list       
@cont.route('/<int:individualID>/preferList', doc={'description': 'get preference list'})
@cont.response(400, 'Bad Request')
@cont.response(403, 'Forbiddent')
@cont.response(200, 'Ok')
class PreferList(Resource):
    def get(self, individualID):
        return 200

# cont api is for follow list     
@cont.route('/<int:individualID>/followList', doc={'description': 'get follow list'})
@cont.response(400, 'Bad Request')
@cont.response(403, 'Forbiddent')
@cont.response(200, 'Ok')
class FollowList(Resource):
    def get(self, individualID):
        get_sql = f"SELECT FollowedID FROM FollowList WHERE individualID='{individualID}';"
        result_from_db = sql_command(get_sql)
        if result_from_db:
            result = []
            link_dict = {}
            for e in result_from_db:
                get_sql = f"SELECT OrganizationId,OrganizationName,Description,Icon FROM Organization WHERE OrganizationId='{e[0]}';"
                result_from_db = sql_result_with_decription(get_sql)
                result_from_db['follow'] = 'follow'
                result.append(result_from_db)
            link_dict['previous'] = ''
            link_dict['next'] = ''
            output = {
                'page':0,
                'message': result,
                '_link': link_dict
            }
            return output, 200
        