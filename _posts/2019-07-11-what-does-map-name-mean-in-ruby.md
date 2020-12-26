---
title: What does map(&:name) mean in Ruby?
layout: post
description: Mapping 101 and useful methods
---

# map(&:name) 

What does it mean?

This is a short hand notation for the regular map function. What map initially does is to **transform** Arrays and Hashes into new values.

Here is a basic implementation of Map:

```ruby
['a' , 'b', 'c'].map { |x| x.upcase }

=>
['A', 'B', 'C']
```

Now let's see an implementation with shorthand:

```ruby
[1,2,3].map(&:upcase)

```

This returns the same result as before, but it for more experienced programmers with knowdlege of PROC and how it works. 

The beginning of & calls ```to_proc``` and passes in the block to be evaluated.
