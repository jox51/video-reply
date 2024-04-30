<?php

namespace App\Services;

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class PythonService {
  public function runPythonScript($arguments = []) {



    $scriptPath = base_path('/python/main.py');
    $process = new Process(["python3", $scriptPath]);
    $process->setWorkingDirectory(base_path());
    $process->setTimeout(0);

    try {
      $process->mustRun(); // Executes the process and throws an exception if it fails
      dd($process->getOutput()); // Outputs the response from the script
    } catch (ProcessFailedException $exception) {
      echo 'Error executing process: ', $exception->getMessage();
    }
  }
}
