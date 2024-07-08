-- CreateTable
CREATE TABLE "bookings_table" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "service" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "bookings_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookings_table" ADD CONSTRAINT "bookings_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
