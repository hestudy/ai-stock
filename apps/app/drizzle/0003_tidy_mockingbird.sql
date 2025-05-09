PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_initDataRecord` (
	`id` text,
	`name` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
INSERT INTO `__new_initDataRecord`("id", "name", "created_at") SELECT "id", "name", "created_at" FROM `initDataRecord`;--> statement-breakpoint
DROP TABLE `initDataRecord`;--> statement-breakpoint
ALTER TABLE `__new_initDataRecord` RENAME TO `initDataRecord`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_stocks` (
	`id` text,
	`ts_code` text NOT NULL,
	`symbol` text NOT NULL,
	`name` text NOT NULL,
	`area` text,
	`industry` text,
	`fullname` text,
	`enname` text,
	`cnspell` text,
	`market` text,
	`exchange` text,
	`curr_type` text,
	`list_status` text,
	`list_date` text,
	`delist_date` text,
	`is_hs` text,
	`act_name` text,
	`act_ent_type` text,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
INSERT INTO `__new_stocks`("id", "ts_code", "symbol", "name", "area", "industry", "fullname", "enname", "cnspell", "market", "exchange", "curr_type", "list_status", "list_date", "delist_date", "is_hs", "act_name", "act_ent_type", "created_at", "updated_at") SELECT "id", "ts_code", "symbol", "name", "area", "industry", "fullname", "enname", "cnspell", "market", "exchange", "curr_type", "list_status", "list_date", "delist_date", "is_hs", "act_name", "act_ent_type", "created_at", "updated_at" FROM `stocks`;--> statement-breakpoint
DROP TABLE `stocks`;--> statement-breakpoint
ALTER TABLE `__new_stocks` RENAME TO `stocks`;