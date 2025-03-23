# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
# import pymysql

# # Initialize app
# app = Flask(__name__)
# CORS(app)

# # Config
# app.config['JWT_SECRET_KEY'] = 'secret-key'  # Change to a more secure key
# jwt = JWTManager(app)

# # MySQL Connection
# db = pymysql.connect(
#     host='localhost',
#     user='root',
#     password='password',
#     database='itcash_bank',
#     cursorclass=pymysql.cursors.DictCursor
# )

# # Routes

# @app.route('/')
# def home():
#     return "ITCash Bank Backend is running!"

# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     with db.cursor() as cursor:
#         cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (email, password))
#         user = cursor.fetchone()

#     if user:
#         access_token = create_access_token(identity=user['id'])
#         return jsonify({"access_token": access_token, "username": user['username']})

#     return jsonify({"message": "Invalid credentials"}), 401

# @app.route('/user-info', methods=['GET'])
# @jwt_required()
# def user_info():
#     user_id = get_jwt_identity()
    
#     with db.cursor() as cursor:
#         cursor.execute("SELECT username, profile_pic FROM users WHERE id=%s", (user_id,))
#         user = cursor.fetchone()

#     if user:
#         return jsonify(user)
#     return jsonify({"message": "User not found"}), 404

# # Run app
# if __name__ == '__main__':
#     app.run(debug=True)
