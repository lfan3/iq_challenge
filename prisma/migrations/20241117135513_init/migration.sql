/*
  Warnings:

  - Added the required column `key` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" INTEGER NOT NULL,
    "answer" TEXT NOT NULL
);
INSERT INTO "new_Question" ("answer", "id") SELECT "answer", "id" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE UNIQUE INDEX "Question_key_key" ON "Question"("key");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
