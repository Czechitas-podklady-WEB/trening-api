---
layout: default
title: Heslo API
permalink: /heslo
---

# Heslo API

Generuje bezpečené heslo zadané délky. Používá velká i malá písmena, číslice i všechny speciální znaky.

## Generovat heslo [GET]

`{{ site.apibase }}/passwords`

| Parametr | Typ | Příklad |
|----------|-----|---------|
| length | number | /passwords?length=16 |

Parametr `length` je nepovinný. Pokud není zadaný, výchozí hodnote je 12. Maximální hodnota je 32.
