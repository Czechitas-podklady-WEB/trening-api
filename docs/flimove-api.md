---
layout: default
title: Filmové API
permalink: /filmove-api
---

# Filmové API

Obsahuje informace o několika filmech z filmové databáze ČSFD.

## Seznam filmů [GET]

`{{ site.apibase }}/movie-api/movies`

| Parametr | Typ | Příklad |
|----------|-----|---------|
| genre | string | /movies?genre=komedie |
| year  | number | /movies?year=1994     |

## Detail filmu [GET]

`{{ site.apibase }}/movie-api/movies/{id}`

## Seznam žánrů [GET]

`{{ site.apibase }}/movie-api/genres`
