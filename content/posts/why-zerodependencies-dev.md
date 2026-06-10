+++
title = "Why zero dependencies?"
date = 2026-06-10T00:00:00+06:00
description = "fr why zerodependencies.dev?"
draft = false
slug = "why-zerodependencies-dev"
tags = ["meta"]
+++

I chose `zerodependencies.dev` because it sounded like a good name for a personal dev site, a bit stupid, a bit accurate, and too good not to use.

In reality almost no software is actually "zero dependencies".

You start with yet another future billion-dollar SaaS, add one package, then another one, and somewhere past the point of no return your project has pulled in a bunch of code written by people you will never meet.

Usually that is just how software works.

![A visual explanation of why "just one dependency" is never just one dependency.](/images/dependency.png)

Sometimes (and pretty often nowadays) the boring dependency stuff turns into security stuff.

The problem might not even be in your code. It could be a package update, an install script or even an agent skill you installed because it looked useful.

That is the annoying part of supply-chain stuff: one tiny trusted thing can run code, steal tokens, leak keys, etc.

Pretty bad ending for something that started with `npm install random-auth-package`.

So the name became a joke with a bit of truth in it.

I am not saying that everyone should stop using packages. I am also not writing this as a security expert. I am a software engineering student, and this is just my personal site.

For me, `zerodependencies.dev` means:

- choose tools because they fit, not because they are are hyped
- keep things smaller when I can
- avoid installing things just because it is easy

Use dependencies and know what they bring in.
