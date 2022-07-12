
import apis.auth
import apis.content
# start run the flask server
try:
    from flask_app import app
    import apis.auth
    app.run(debug=True)
except ImportError as e:
    print(e)