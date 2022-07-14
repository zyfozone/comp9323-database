from distutils.log import ERROR
import json
from flask import request
from flask_restx import Resource
from flask_restx import reqparse
from requests import delete
from models.request_model import *
from tool import *


followed = reqparse.RequestParser()
# followed.add_argument('contID',type = int,help = 'cont name',required = True,location='form')
followed.add_argument('contID',type = int,help = 'cont name',required = False,location='form')


# define namespace
cont = api.namespace('cont', description='Content Service')

<<<<<<< HEAD
# # cont api is for content event
=======
# cont api is for content event
>>>>>>> 4a4eaf8fe88720f12bd3a66eb5917c58b8ff982f
#########
@cont.route('/test', doc={'description': 'test'})
@cont.response(400, 'Bad Request')
@cont.response(200, 'Ok')
class test(Resource):
    def post(self):

        print(request.values.to_dict())
        output = {
                'message': f'{request.values.to_dict()}'
            }
        return output, 200
<<<<<<< HEAD

=======
>>>>>>> 4a4eaf8fe88720f12bd3a66eb5917c58b8ff982f
###############


@cont.route('/<int:individualID>/recommandationList', doc={'description': 'get recommanded content list'})
@cont.response(400, 'Bad Request')

@cont.response(200, 'Ok')
class RecommandationList(Resource):
    def get(self, individualID):
        return 200

     
@cont.route('/<int:individualID>/preferList', doc={'description': 'get preference list'})
@cont.response(400, 'Bad Request')

@cont.response(200, 'Ok')
class PreferList(Resource):
    def get(self, individualID):
        return 200

 
@cont.route('/<int:individualID>/followList', doc={'description': 'follow list operation'})
@cont.response(400, 'Bad Request')
@cont.response(404, 'Not Found')
@cont.response(200, 'Ok')
class FollowList(Resource):
    @cont.doc(description = 'get follow list')
    def get(self, individualID):
        user_sql = f"SELECT individualName FROM individual WHERE IndividualID={individualID};"
        if sql_command(user_sql):
            follow_sql = f"SELECT FollowedID FROM FollowList WHERE IndividualID={individualID};"
            result_from_db = sql_command(follow_sql)
            if result_from_db:
                result = []
                link_dict = {}
                for e in result_from_db:
                    org_sql = f"SELECT OrganizationId,OrganizationName,Description,Icon FROM Organization WHERE OrganizationId='{e[0]}';"
                    result_from_db = sql_result_with_decription(org_sql)
                    result_from_db['follow'] = 'follow'
                    result.append(result_from_db)
                link_dict['previous'] = ''
                link_dict['next'] = ''
                output = {
                    #'page':0,
                    'message': result,
                    #'_link': link_dict
                }
                return output, 200
            else:
                output = {
                    'message': 'This account does not follow anyone'
                }
                return output, 200
        else:
            output = {
                'message': 'Please input user vaild ID'
            }
            return output, 404
    
    @cont.doc(description = 'add new article follow')
    @cont.expect(followed,validate=True)
    def post(self,individualID):
        user_sql = f"SELECT individualName FROM individual WHERE IndividualID={individualID};"
        if sql_command(user_sql):
            contID = followed.parse_args()['contID']
            art_sql = f"SELECT * FROM Article WHERE ArticleID={contID};"
            if sql_command(art_sql):
                follow_sql = f"INSERT IGNORE INTO FollowList VALUES ({individualID},{contID},'article');"
                try:
                    sql_command(follow_sql)
                except:
                    pass
                output = {
                    'message': 'well done'
                }
                return output,200
            else:
                output = {
                    'message': 'Please input vaild article ID'
                }
        else:
            output = {
                'message': 'Please input vaild user ID'
            }
            return output, 404

    @cont.doc(description = 'delete new follow')
    @cont.expect(followed,validate=True)
    def delete(self,individualID):


        user_sql = f"SELECT individualName FROM individual WHERE IndividualID={individualID};"
        if sql_command(user_sql):
            contID = followed.parse_args()['contID']

            print(contID)
            print(request.json)


            art_sql = f"SELECT * FROM Article WHERE ArticleID = {contID};"
            if sql_command(art_sql):
                follow_sql = f"DELETE from FollowList WHERE individualID = {individualID} AND ArticleID = {contID};"
                try:
                    sql_command(follow_sql)
                except:
                    pass
                output = {
                    'message': 'well done'
                }
                return output,200
            else:
                output = {
                    'message': 'Please input vaild article ID'
                }
        else:
            output = {
                'message': 'Please input vaild user ID'
            }
            return output, 404
        
        
        
        
