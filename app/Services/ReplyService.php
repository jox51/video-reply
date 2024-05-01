<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ReplyService {
  public function callCrew($websiteUrl, $keywords, $description) {

    set_time_limit(300);

    $pythonService = new PythonService();
    $pythonService->runPythonScript();

    // $url = 'http://127.0.0.1:8000/run-newsletter';

    // $response = Http::get($url);


    // if ($response->successful()) {

    //   $responseNewsletter = $response->json();
    //   dd($responseNewsletter);


    //   return $responseNewsletter;
    // } else {
    //   // Handle error or return an empty array/error message
    //   return ['error' => 'Failed to fetch horoscope. Please try again later.'];
    // }
  }
}
