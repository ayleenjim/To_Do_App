import mysql.connector 

# Create data base connection with Django
dataBase = mysql.connector.connect(
	host = 'localhost',
	user = 'root',
	passwd = 'rootpassword',
	)

# Middleware 
cursorObject = dataBase.cursor()

cursorObject.execute("CREATE DATABASE todoDatabase")
print("Hello, todoDatabase")