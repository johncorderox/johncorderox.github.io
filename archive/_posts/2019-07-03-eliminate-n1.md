---
title: How to Eliminate N+1 Queries
layout: post
description: Learn how about includes and eager loading
---

# Eliminate N+1

One thing you want to avoid as a Ruby on Rails developer is the N+1 problem. To give an example, let's say we have 2 tables in our database.

```

#Users model
class User < ActiveRecord::Base
	has_many :gifs
end


#Gifs model

class Gif < ActiveRecord::Base
	belongs_to :user
end

```

What we want to do is list 10 gifs we have created with the users name and which gif they made.

We could do this by adding a query to our controller

```
@gifs = Gif.limit(10)

```
and loop the following into our view

```
<% @gifs.each do |gif| %>
	<p> gif <%= gif.url %> </p>
	<p> made by - <%= gif.user.name %></p>
<% end %>

```

But what does this do?  The code in our view will ask rails to send 10 (9+1) queries: 1 query would be used to get 10 gifs and 9 of them to get the associated users.

Seeing how this isn't too much of a problem since this is a toy application, what would happen if we were on production and we wanted let's say.... 10,000 gifs? Think of the load the rails application would have to take with that kind of request being used by hundreds of users.

So what should we do to ease work on the database? Let's try a method called <a href="https://guides.rubyonrails.org/active_record_querying.html#eager-loading-associations"> Eager Loading</a>.


Eager Loading is a practice used to grab and load the associated records returned to use fewer queries as possible.

Rails has a method called ```includes``` which will make sure the associated data (users to gifs) are loaded once the query runs. After refactoring our controller, this should be the final result:

```
#Without Eager Loading
@gifs = Gif.limit(10)

#With Eager Loading
@gifs = Gif.includes(:users).limit(10)
```


# Console Output

Here are 2 console outputs on the final results of a view loaded  without eager queries and with:

```
# Bad

Gif Load (0.9ms) SELECT 'gifs'.* FROM 'gifs'
Gif Load (0.4ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 1]]
Gif Load (0.3ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 2]]
Gif Load (0.4ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ? ASC LIMIT 1 [["id", 3]]
Gif Load (0.3ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 4]]    
Gif Load (0.4ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 5]]
Gif Load (0.4ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 6]]
Gif Load (0.3ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 7]]
Gif Load (0.4ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ? ASC LIMIT 1 [["id", 8]
Gif Load (0.3ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 9]]    
Gif Load (0.4ms) SELECT 'gifs'.* FROM 'gifs' WHERE 'users'.'id' = ?  ASC LIMIT 1 [["id", 10]]
```


```
#Good

Gif Load (0.4ms) SELECT 'gifs'.* FROM 'gifs'
Gif Load (0.4ms) SELECT 'users'.* FROM 'users' WHERE 'users'.'id' IN (1,2,3,4,5,6,7,8,9,10)

```


Just check out that eager loading!!!!!! Such a breath of relief. <br>
<img src="https://media.giphy.com/media/1ofR3QioNy264/giphy.gif" alt="gif">