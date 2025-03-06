<?php
$n = 1;
while ($n != 101) {
        echo $n;
        if ($n % 3 == 0) {
            echo ' Fizz';
        }
        if ($n % 5 == 0) {
            echo ' Buzz';
        }
        if ($n % 3 == 0 && $n % 5 == 0) {
            echo ' FizzBuzz';
        }
        echo "\n";
        $n++;
}

function fibonacci($n,$first = 0,$second = 1)
{
    $fib = [$first,$second];
    for($i=1;$i<$n;$i++)
    {
        $fib[] = $fib[$i]+$fib[$i-1];
    }
    return $fib;
}
echo "<pre>";
print_r(fibonacci(10));
?>
