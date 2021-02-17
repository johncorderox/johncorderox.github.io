---
layout: content
permalink: /projects/
title: Infowerks Data Services
---
# ViewMaster &copy;
 This record retention software meets HIPAA and HITRUST regulations with encrypted and secure data. With ViewMaster, you can satisfy all the requirements for record retention and reporting from entities such as the Board of Pharmacy, CMS, DEA, and more. 

 We've archived over <span style="color:#5F9731 ;">5 billion records</span> for healthcare organizations since launching!

 <b>Our Stack:</b> Ruby, Rails, Rails API, RSpec, Capybara, Postgres, Redis, Sidekiq 🔍 ✨
<br>

<img src="../assets/erd.png" alt="erd" />
<br>
<br>
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/TVgl5NYqqj4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>
<br>
<img src="../assets/crd.png" alt="erd" />
<br><br>
{% highlight ruby %}
gem "haml"
gem "dalli"
gem "sendgrid-ruby", "~> 6.1.0"
gem "prawn", "2.2.2"
gem "azure", "0.7.10"
gem "redis"
gem "mini_magick"
{% endhighlight %}
<br><br>

<h1 style="font-size: 3.2rem;">Evolution</h1>
Evo is a rails application that allows travel agents to create, customize and edit their own personal website. Each agent can customize each module to their own liking, and even have clients book and schedule trips with built-in air/cruise/hotel APIs.

Frontend: HTML CSS3 React JS+Axios Bootstrap 4 <br>
Backend: Rails API  

<center>
<img src="../assets/evo.jpg"
     alt="erd" style="height: 700px; width: auto;" />
 </center>
We also released a public rails API for a hub of our own travel specials that work with React JS and Axios. Each component is resuable and made with the react-rails gem to be monolithic.

<center>
<img src="../assets/diagram.jpeg"
     alt="erd" style="height: 600px; width: auto;" />
</center>
<br><br>

<h1 style="font-size: 3.2rem;">Etc ✨</h1>
Here are some other things I've built with teams and Web Development Agencies:
<br>
<div class="photos">
  <a href="" class="p0 photo" rel="noopener">
    <img alt="evo" src="{{ '/assets/images/evo.png' | relative_url }}">
  </a>
  <a href="" class="p1 photo" rel="noopener">
    <img alt="cafe" src="{{ '/assets/images/cafe.png' | relative_url }}">
  </a>
  <a href="https://avitamedical.com" class="p2 photo"rel="noopener">
    <img alt="Avita" src="{{ '/assets/images/virus.gif' | relative_url }}">
  </a>
  <a href="https://github.com/johncorderox/evo-specials" class="p3 photo"rel="noopener">
    <img alt="specials" src="{{ '/assets/images/specials.gif' | relative_url }}">
  </a>
</div><br> <br>
<style>
	.photos {
  position: relative;
  margin-bottom: 15px;
  margin-top: 45px;
}
.photo {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
  float: left;
}
.photo img {
  width: 65px;
  height: 65px;
  border-radius: 10px;
}
	</style>
