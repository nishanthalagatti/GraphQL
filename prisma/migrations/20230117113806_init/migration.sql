-- CreateTable
CREATE TABLE `Matches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `team1` VARCHAR(191) NOT NULL,
    `team2` VARCHAR(191) NOT NULL,
    `winner` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Balls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bowler` VARCHAR(191) NOT NULL,
    `extraRuns` INTEGER NOT NULL DEFAULT 0,
    `totalRuns` INTEGER NOT NULL DEFAULT 0,
    `bowlingTeam` VARCHAR(191) NOT NULL,
    `matchId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Balls` ADD CONSTRAINT `Balls_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Matches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
