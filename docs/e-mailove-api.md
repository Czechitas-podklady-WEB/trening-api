---
layout: default
title: E-mailové API
permalink: /e-mailove-api
---

# E-mailové API

Obsahuje data e-maillů z vymyšlené e-mailové schránky.

## Seznam e-mailů [GET]

`{{ site.apibase }}/emails`

| Parametr | Typ | Příklad |
|----------|-----|---------|
| folder | string | /emails?folder=unread |


Nepovinný parametr `folder` může mít tyto hodnoty:
  - `all`: všechny e-maily ze schránky, výchozí hodnota
  - `unread`: pouze nepřečtené e-maily,
  - `read`: pouze přečtené e-maily.

## Detail e-mailu [GET]

`{{ site.apibase }}/emails/{id}`