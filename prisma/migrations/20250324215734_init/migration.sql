-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);