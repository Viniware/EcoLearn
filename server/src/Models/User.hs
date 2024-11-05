module User (
    User(..),
    Role(..)
) where

data Role = Client | Admin deriving (Show, Eq)

data User = User
    { name      :: String
    , email     :: String
    , password  :: String
    , level     :: Int
    , Role      :: Role
    } deriving (Show, Eq)
    