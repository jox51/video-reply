<?php

namespace App\Services;

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class PythonService {
  public function runPythonScript($arguments = []) {



    $scriptPath = base_path('/python/main.py');
    $process = new Process(["python3", $scriptPath]);
    $process->setWorkingDirectory(base_path());
    $process->setTimeout(2600);

    try {
      $process->start();

      // The process is started in the background, wait until it's finished
      $process->wait(function ($type, $buffer) {
        if (Process::ERR === $type) {
          echo 'ERR > ' . $buffer;
        } else {
          echo 'OUT > ' . $buffer;
        }
      });

      if (!$process->isSuccessful()) {
        throw new ProcessFailedException($process);
      }

      echo 'Output: ' . $process->getOutput();
    } catch (ProcessFailedException $exception) {
      echo 'Error executing process: ', $exception->getMessage();
    }
  }
}
