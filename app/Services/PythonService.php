<?php

namespace App\Services;

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\ExecutableFinder;


class PythonService {
  public function runPythonScript($arguments = []) {



    // $scriptPath = base_path('/python/main.py');
    // $pythonPath = env('PYTHON_PATH');

    $command = [
      "/home/forge/.local/pipx/venvs/poetry/bin/poetry",
      "run",
      "python",
      "main.py"
    ];

    $process = new Process($command);
    $process->setWorkingDirectory(base_path('python'));
    $process->setTimeout(2600);


    try {
      $process->run();


      dd('Output: ' . $process->getOutput());
    } catch (ProcessFailedException $exception) {
      dd('Error executing process: ', $exception->getMessage());
    }
  }
}
