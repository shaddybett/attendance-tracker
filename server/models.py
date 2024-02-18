from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Admin(db.Model):
    __tablename__='admins'
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nullable=False)

class Teacher(db.Model):
    __tablename__='teachers'
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nullable=False)

class Student(db.Model):
    __tablename__='students'
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nullable=False)
