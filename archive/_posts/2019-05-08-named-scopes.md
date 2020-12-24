---
title: Named Scopes
layout: post
description: Optimize your search results
---

## Named Scopes
What are they? Simply put, Named scopes are class methods inside your model that always returns an active record association.

Let's see a classic class method definition first:

```
#app/models/user.rb

def self.paid
  where{where("paid LIKE ?", paid)
end
```

so lets see how we can use this in a named scope:

```
#app/models/user.rb

scope :paid, ->{where("paid LIKE ?", paid)
end
```

so calling the scope is as simple as 

```
#app/controllers/shirts_controller.rb
@q = User.paid
```


So what is the beauty of this idea? Well, just think of the fact that they will always return an active record association. Never ```nil```.  You can safely string and chain as many scopes as you like without worrying about the query failing. The end case of ```nil``` is always taken care of.
