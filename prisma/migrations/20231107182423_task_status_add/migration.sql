-- CreateEnum
CREATE TYPE "Status" AS ENUM ('redo', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "status" "Status";
