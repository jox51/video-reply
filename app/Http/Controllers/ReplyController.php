<?php

namespace App\Http\Controllers;

use App\Services\ReplyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReplyController extends Controller {
    public function create(Request $request) {

        $websiteUrl = $request->input('websiteUrl');
        $keywords = $request->input('keywords');
        $description = $request->input('description');




        $replyService = new ReplyService();
        $replyService->callCrew($websiteUrl, $keywords, $description);

        return Inertia::render('Reply');
    }

    public function edit() {
        return Inertia::render('Reply');
    }
}
