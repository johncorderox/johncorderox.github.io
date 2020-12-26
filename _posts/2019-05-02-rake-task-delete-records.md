---
title: Rake Task - Delete Records
layout: post
description: automate sql deletion with rake builds
---

Have sensitive data? Need to purge or remove some tables from all sensitive data? Try a custom rake task! 

If you don't know much about rake you can read a nice basic guide [here](http://www.virtuouscode.com/2014/04/21/rake-part-1-basics/)


We at [@Evolution ](http://www.myevolutiontravel.com/) utitlize a lot of different forms that save information like personal data, money, credit card forms, client information, etc. So instead of manuall writing queries to production or hacking the postgres db, try removing them safely like we do. 

```ruby
#/lib/delete_records.rb

namespace :cc
desc "Delete creditcardforms after 6 months"
	task :remove_old => enviorment do
	Model.delete_all ["created_at < ?", 6.months.ago]
	 puts " ...done"
  end
end
```
