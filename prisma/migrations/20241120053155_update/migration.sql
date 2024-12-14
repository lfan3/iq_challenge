-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "questions" TEXT NOT NULL
);
