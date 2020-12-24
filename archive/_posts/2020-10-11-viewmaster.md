---
title: ViewMaster
layout: post
exclude: true
---

<p align="center"><strong>ViewMaster</strong></p>
ViewMaster is an archival data system built with Ruby on Rails 5 for pharmacists in the U.S. This record retention software meets HIPAA and HITRUST regulations with encrypted and secure data. With ViewMaster, you can satisfy all the requirements for record retention and reporting from entities such as the Board of Pharmacy, CMS, DEA, and more. It’s a true turnkey solution to the challenges of meeting requirements while also maintaining security and privacy.

***

<p align="center"><img src="{{ '/assets/images/vm.png' | relative_url }}" alt="viewmaster"></p>
<p align="center"><img src="{{ '/assets/images/erd.png' | relative_url }}" alt="db"></p>

***

## Core Gems

{% highlight ruby %}
gem "haml"
gem "sendgrid-ruby", "~> 6.1.0"
gem "prawn", "2.2.2"
gem "azure", "0.7.10"
gem "redis"
gem "mini_magick"
{% endhighlight %}
