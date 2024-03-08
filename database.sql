-- Creating the User table
CREATE TABLE [User]
(
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [username] NVARCHAR(50) NOT NULL,
    [password] NVARCHAR(100) NOT NULL,
    [administrator] BIT NOT NULL DEFAULT 0,
    [profilePicture] VARBINARY(MAX), -- Storing the image as binary data
    [description] NVARCHAR(MAX) -- Using MAX for potentially long descriptions
);

-- Creating the Order table
CREATE TABLE [Order]
(
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [id_user] INT NOT NULL,
    [creationTime] DATETIME NOT NULL,
    [message] NVARCHAR(1000),
    CONSTRAINT [FK_Order_User] FOREIGN KEY ([id_user]) REFERENCES [User]([id])
);
