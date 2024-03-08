import pyodbc

connection_string = (
    r"Driver={SQL Server};"
    r"Server=DESKTOP-9KLLFSK\SQLEXPRESS;"
    r"Database=HackWeb;"
    r"Trusted_Connection=yes;"
)


def get_conn():
    try:
        conn = pyodbc.connect(connection_string)
        print("Connected to the database successfully")
    except Exception as e:
        print(f"Error connecting to database: {e}")
        exit()

    return conn

def execute_select(cursor, command):
    # command example: "SELECT * FROM [User]"
    try:
        select_query = command
        cursor.execute(select_query)
        return cursor
    except Exception as e:
        print(f"Error executing SELECT statement: {e}")

def execute_insert(conn, cursor, command, values):
    # command example: "INSERT INTO YourTableName (Column1, Column2) VALUES (?, ?)"
    # values example: ('Value1', 'Value2')
    try:
        insert_query = command
        cursor.execute(insert_query, values)
        conn.commit()  # Commit the transaction
        print("Data inserted successfully")
    except Exception as e:
        print(f"Error executing INSERT statement: {e}")

def close_conn(conn):
    # Close the connection
    conn.close()

if __name__ == "__main__":
    conn = get_conn()
    cursor = conn.cursor()
    cursor = execute_select(cursor, "SELECT * FROM [User]")
    for row in cursor.fetchall():
        print(row)