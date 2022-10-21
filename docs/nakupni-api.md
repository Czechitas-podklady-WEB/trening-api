---
layout: default
title: Nákupní API
permalink: /nakupni-api
---

# Nákupní API

Vrací položky nákupních seznamů pro jednotlivé dny v týdnu,

## Seznam položek pro pondělí [GET]

`{{ site.apibase }}/shopping`

nebo také

`{{ site.apibase }}/shopping/mon`

## Seznam položek pro den v týdnu [GET]

`{{ site.apibase }}/shopping/:day`

Parametr `day` může nabývat hodnot 

- `mon` - pondělí
- `tue` - úterý
