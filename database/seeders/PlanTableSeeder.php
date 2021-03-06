<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('plans')->insert([
            "type" => 'RECURRING',
            "name" => 'App Charge',
            "price" => 1.00,
            "interval" => 'EVERY_30_DAYS', //for Annual change it to => ANNUAL
            "capped_amount" => 1.00,
            "terms" => null,
            "trial_days" => 90,
            "test" => 0,
            "on_install" => 1,
            "created_at" => date('Y-m-d H:i:s'),
            "updated_at" => date('Y-m-d H:i:s')
        ]);
    }
}
