---
title: Evolution
layout: post
exclude: true
---

<p align="center"><strong>Admin Portal</strong></p>
Evolution Travel Agent is a rails application that allows travel agents to create, customize and edit their own personal website. Each agent can customize each module to their own liking, and even have clients book and schedule trips with built-in air/cruise/and hotel APIs.

***

<p align="center"><img src="{{ '/assets/images/evo-login.gif' | relative_url }}" alt="Evolution Travel Agent"></p>

<p align="center"><img src="{{ '/assets/images/evo-header.png' | relative_url }}" alt="Evolution Travel Agent"></p>

We are also currently developing a brand new Australian site for our AUS user base. Our App is built with an EC2 instance (t2.large) and private S3 buckets. We are planning for a 2020 launch and expected to gain over 8,000 unique agents across AU and NZ. We plan to expand over to EUR and possibly PR in the near future. 
<p align="center"><img src="{{ '/assets/images/evo-aus-ban.png' | relative_url }}" alt="Evolution Travel Agent"></p>
<p align="center"><img src="{{ '/assets/images/evo-content1.png' | relative_url }}" alt="Evolution Travel Agent"></p>
<p align="center"><img src="{{ '/assets/images/evo-content2.png' | relative_url }}" alt="Evolution Travel Agent"></p>


## Software Features

<ol>
  <li>User Guide</li>
  <li>FareGrabbr</li>
  <li>Commissions</li>
  <li>Credit Card Forms</li>
  <li>Booking Portal</li>
</ol>

***

## Core Gems

{% highlight ruby %}
gem 'bcrypt', '~> 3.1.7'
gem 'paperclip', '~> 5.2.0'
gem 'aws-sdk', '~> 2'
gem 'to_xls-rails'
gem 'will_paginate', '~> 3.1.0'
gem 'typhoeus'
gem 'chartkick'
gem "attr_encrypted", "~> 3.1.0"
gem 'pg', '~> 0
{% endhighlight %}