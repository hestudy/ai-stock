/// <reference path="../pb_data/types.d.ts" />

cronAdd("hello", "0 0 * * *", (e) => {
  console.log("Cron job executed!");
});
