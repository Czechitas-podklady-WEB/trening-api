---
layout: default
title: Úkoly API
permalink: /ukoly-api
---

# Úkoly API

Obsahuje seznam úkolů

## Seznam všech ukolů [GET]

`{{ site.apibase }}/tasks-api/tasks`

Pomocí parametru `done` lze získat pouze splnění nebo pouze nesplněné úkoly.

| Parametr | Typ     | Příklad |
|----------|---------|---------|
| done     | boolean | /tasks?done=true |
