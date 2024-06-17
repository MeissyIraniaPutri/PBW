<?php

$angka = 900000;

if ($angka > 1500000) {
    echo "Mahal";
} else if ($angka >= 1000000 && $angka <= 1500000) {
    echo "Sedang";
} else {
    echo "Murah";
}



