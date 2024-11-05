module Services.Database (
    openConnection,
    closeConnection,
    createUserTable,
    insertUser,
    fetchUser,
    fetchAllUsers
) where

import Database.SQLite.Simple
import Database.SQLite.Simple.FromRow
import Models.User

openConnection :: IO Connection
openConnection = open "eco_learn.db"

closeConnection :: Connection -> IO ()
closeConnection = close

