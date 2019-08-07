---
title: Metaprogramming - define_method
layout: post
description: Make methods on the fly!
---

define_method is a wonderful metaprogramming technique used to create methods on the fly and ultimately dry up your code.


Heres an example of a basic ruby class with some basic methods:

```
class House

def house_lights
	puts "lights are on!"
end

def house_water
	puts "water is on!"
end

def power
	puts "power is on!"
end

end
apartment = House.new

apartment.house_lights
# => lights are on!

apartment.house_water
# => water is on!
```
This code is far from dry and you can see it can get repetitive if we added more methods very similar. Adding ```define_method``` can create methods for you easily and check this out:

```
class House

  ["lights", "water", "garbage"].each do |method|
    define_method "house_#{method}" do
      puts method.to_s + " is on!"
    end
  end

end

apartment = House.new

apartment.house_lights
# => lights are on!

apartment.house_water
# => water is on!
```