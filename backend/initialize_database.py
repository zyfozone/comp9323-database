# create tables in database and add some data
import pymysql
from config import *


def create_database():
    conn = pymysql.connect(host=DB_URL,
                           user=DB_ACCOUNT,
                           password=DB_PASSWORD)
    conn.cursor().execute('''create database if not exists wellbeing''')
    conn.close()
    db = pymysql.connect(
        host=DB_URL,
        port=DB_PORT,
        user=DB_ACCOUNT,
        password=DB_PASSWORD,
        database=DB_NAME,·
        charset='utf8'
    )
    c = db.cursor()


    Organization_table = '''
    CREATE TABLE IF NOT EXISTS `Organization` (
    `OrganizationId` int NOT NULL AUTO_INCREMENT,
    `OrganizationNmae` varchar(255) DEFAULT NULL,
    `Password` varchar(255) NOT NULL,
    PRIMARY KEY (`OrganizationId`)
    );
    '''
    
    insert_organization = '''
    INSERT INTO `Organization` VALUES 
    (1, "Anonymous", "123456"),
    (2, "Enterprise", "qwerty"),
    (3, "Company", "zxcvbn");
    '''

    Individual_table = '''
    CREATE TABLE IF NOT EXISTS `Individual` (
    `IndividualId` int NOT NULL AUTO_INCREMENT,
    `IndividualName` varchar(255) DEFAULT NULL, 
    `Password` varchar(255) NOT NULL,
    `Preference` varchar(255) DEFAULT NULL,
    `Occupation` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`IndividualId`)
    );
    '''

    insert_individual = '''
    INSERT INTO `Individual` VALUES 
    (4, "Anonymous", "123456", "computer", "IT"),
    (5, "John", "qwerty", "economy", "Financial Analyst"),
    (6, "Elen", "zxcvbn", "mechanical", "Mechanical Engineers");
    '''

    Organization_offer = '''
    CREATE TABLE IF NOT EXISTS `Offer` (
    `OfferId` int NOT NULL AUTO_INCREMENT,
    `OrganizationId` int NOT NULL,
    `Salary` varchar(255) NOT NULL,
    `Working hours` varchar(255) NOT NULL,
    `Tag` varchar(255) NOT NULL,
    PRIMARY KEY (`OfferId`)
    );
    '''
    
    insert_offer = '''
    INSERT INTO `Offer` VALUES 
    (1, 1, "100,000 per year", "7h per day", "computer"),
    (2, 2, "80,000 per year", "7h per day", "economy"),
    (3, 3, "90,000 per year", "7h per day", "mechanical");
    '''

 
    Individual_prefer = '''
    CREATE TABLE IF NOT EXISTS `IndividualPrefer` (
    `PreferID` int NOT NULL AUTO_INCREMENT,
    `IndividualId` int NOT NULL,
    `ContentID` int NOT NULL,
    PRIMARY KEY (`PreferID`)
    );
    ''' 
    
    insert_individualPrefer = '''
    INSERT INTO `IndividualPrefer` VALUES 
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3);
    '''
    content_table = '''
    CREATE TABLE IF NOT EXISTS `Content` (
    `ContentID` int NOT NULL AUTO_INCREMENT,
    `ContentLink` varchar(255) NOT NULL,
    `ContentLikeNum` int NOT NULL,
    `ContentTag` varchar(255) NOT NULL,
    PRIMARY KEY (`ContentID`));'''
    
    insert_content = '''
    INSERT INTO `Content` VALUES 
    (1, "1", 0, "1"),
    (2, "2", 0, "2"),
    (3, "3", 0, "3");
    '''

    Individual_mood = '''
    CREATE TABLE IF NOT EXISTS `Mood` (
    `MoodID` int NOT NULL AUTO_INCREMENT,
    `IndividualId` int NOT NULL,
    `RecordTime` varchar(255) DEFAULT NULL,
    `Mood` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`MoodID`)
    );
    ''' 

    insert_mood = '''
    INSERT INTO `Mood` VALUES 
    (1, 1, "01/01/2022", "Well"),
    (2, 2, "01/02/2022", "Bad"),
    (3, 3, "01/03/2022", "Average");
    '''

#create table
    c.execute(Organization_table)
    c.execute(Individual_table)
    c.execute(Organization_offer)
    c.execute(content_table)
    c.execute(Individual_prefer)
    c.execute(Individual_mood)

#insert data
    c.execute(insert_organization)
    db.commit()
    c.execute(insert_individual)
    db.commit()
    c.execute(insert_offer)
    db.commit()
    c.execute(insert_individualPrefer)
    db.commit()
    c.execute(insert_mood)
    db.commit()
    c.execute(insert_content)
    db.commit()
    
    c.close()

    return True


if __name__ == "__main__":
    create_database()
