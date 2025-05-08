ALTER TABLE `initDataRecord` ADD `create_user` text NOT NULL REFERENCES user(id);--> statement-breakpoint
ALTER TABLE `stocks` ADD `create_user` text NOT NULL REFERENCES user(id);