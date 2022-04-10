---
layout: default
title: Filmové API
permalink: /filmove-api
---

# Filmové API

Obsahuje informace o několika filmech z filmové databáze ČSFD.

## Seznam filmů [GET]

`{{ site.apibase }}/movies`

| Parametr | Typ | Příklad |
|----------|-----|---------|
| genre | string | /movies?genre=komedie |
| year  | number | /movies?year=1994     |

## Detail filmu [GET]

`{{ site.apibase }}/movies/{id}`