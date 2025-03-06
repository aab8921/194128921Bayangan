<?php
$number = -1;

if ($number % 2 == 0) {
    echo 'even'."\n";
} else {
    echo 'odd'."\n";
}

if ($number > 0) {
    echo 'positive';
} else if ($number < 0) {
    echo 'negative';
} else {
    echo 'zero';
}
?>
