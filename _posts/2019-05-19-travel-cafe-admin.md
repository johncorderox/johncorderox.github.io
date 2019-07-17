---
title: Travel Cafe - Admin
layout: post
exclude: true
---

<p align="center"><strong>Admin Portal</strong></p>
The Travel Cafe is an admin interface to control all 3 Ruby on Rails applications that involve all user data, credit card forms, commission forms and Accounting payments distrubted across 19,000 unique users. The Accounting and Customer Service team utilize this app daily for processes like account information and commission tracking for companies like Carnival Cruise and Enterprise.

***

<p align="center"><img src="{{ '/assets/images/travel-header.png' | relative_url }}" alt="Evolution Travel Agent"></p>
<p align="center"><img src="{{ '/assets/images/travel1.png' | relative_url }}" alt="Evolution Travel Agent"></p>



## Software Features

<ol>
  <li>Commissions Portal</li>
  <li>User Data/Statistics</li>
  <li>Commissions</li>
  <li>Globalware Accounting Integration</li>
  <li>Akimbo Payment Gateway</li>
	<li>Email Reminders + Excel CSV </li>
</ol>

***

## Core Gems

{% highlight ruby %}
gem 'bcrypt', '~> 3.1.7'
gem 'figaro'
gem 'to_xls-rails'
gem 'roo'
gem 'groupdate'
gem 'will_paginate', '~> 3.1.0'
gem 'rack-throttle'
{% endhighlight %}