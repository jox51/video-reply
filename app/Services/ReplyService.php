<?php

namespace App\Services;


class ReplyService {
  public function callCrew($websiteUrl, $keywords, $description) {


    $pythonService = new PythonService();
    $pythonService->runPythonScript([$websiteUrl, $keywords, $description]);
  }
}
