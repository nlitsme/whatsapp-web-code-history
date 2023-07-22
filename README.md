whatsapp code archive
=====================

This repository contains a copy of all javascript code from web.whatsapp.com.

There are three folders:
  * web.whatsapp.com  - the data as it can be found on the whatsapp site.
  * shortnames/A.B.C  - the code for version A.B.C, with the filename hashes removed from the names.
  * fullnames/A.B.C  - the code for version A.B.C, with the filenames as found in web.whatsapp.com

See [this repo](https://github.com/nlitsme/whatsapptools) for the tools used to collect the data.


Why?
====

I started collecting these scripts because I thought: maybe I can infer something interesting about
the way the whatsapp protocol changes over time. I am not sure if I did, but I will put this on
github anyway, maybe someone will find something interesing here.

Things to note
==============

 * version 2.2203.3 has different hashes for `bootstrap_qr` and `runtime` in the assets and binary-transparency manifest file.
 * for a while `app` was called `bootstrap_qr`
 * versions tend to the pattern:  2.a.b
    - where a > 2000
    - a moduluo 100 < 50
    - b < 25
 * index.html and serviceworker.js are not versioned.
 * assets-manifest.json and binary-transparency-manifest.json without the version in their name are for version 2.2202.10
 * with version 2.2245.8,  `bootstrap_qr` was renamed to `app`, and `bootstrap_main` was renamed to `main`

 * I only partitioned the files since v2.2202.10 in the short/full names directories.
 * I did scrape several older `app.js` files from archive.org, starting with v0.2.9008.

Author
======

Willem Hengeveld <itsme@xs4all.nl>

