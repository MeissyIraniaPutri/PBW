<?php

    //membuat variabel
    $nama = "Meissy Irania Putri";
    $nama_tamu = "Juliyanti";

    if ($nama_tamu == "Juliyanti") {
        $kelas = "7A";
    } else if ($nama_tamu != "Juliyanti") {
        $kelas = "7B";
    } else {
        $kelas = "7C";
    }

    echo "Hai ".$nama_tamu." selamat datang, saya ".$nama." mari belajar bersama saya dikelas ".$kelas;

