---
title: Scaffold a New Rails 5 API.
description: Make a Rails/React API from start to finish
layout: post
---

## Rails API 💎

The new rails api command scaffolds everything we need to get up and running.

1.  Run the following: ```rails new my-first-api --api -T```

What's going on here? The `--api` command tells rails that we want an API structure application instead of a standard rails structure. The `-T` command also tells rails that we don't want Minitest as our testing suite. You'll most likely be used to Rspec so we'll talk about that later in the guide.

2.  Enable Cross-Origin Resource Sharing (CORS) in your gem and config directory. Locate your gemfile and uncomment the following

```ruby
# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
 gem 'rack-cors'
```

Do not forget to `bundle install` !

Now in your config/initializers directory, you should now see a `cors.rb` file. Add the following to

```ruby
# config/initializers/cors.rb
class Application < Rails::Application

   config.middleware.insert_before 0, "Rack::Cors" do
     allow do
       origins '*'
       resource '*', :headers => :any, :methods => [:get, :post, :patch, :options]
     end
   end

 end
```

Since this tutorial is mainly for testing and toy projects, we are allowing ALL methods from another domain. You should tailor the header and methods to your liking.

## Rails API Versioning

Versioning is the process of seperating and creating new features/data/endpoints for your API. Since this is our first API, let's make our `test-api` v1.

1.  Run the following in your terminal

```shell
mkdir mkdir app/controllers/api && mkdir app/controllers/api/v1
```

If everything looks right you should see your directory identical as below. <br><br>
<a href="http://tinypic.com?ref=3589c11" target="_blank"><img src="http://i67.tinypic.com/3589c11.png" height="250" width="280" border="0" alt="Image and video hosting by TinyPic"></a>

 Now that our versioning is complete, let's test out a model and controller to work with our new url of `localhost:3000/api/v1`.

2.  Let's scaffold a test model/controller and call it `movies`


```ruby
rails g scaffold Movies name:string rating:integer

rails db:migrate
```

The Rails engine creates your controller in the default `/controllers` directory but we need to move our new controller into the `api/v1` directory.

3.  You can either move it manually or the following:


```shell
mv app/controllers/movies_controller.rb app/controllers/api/v1
```

4.  Update the Movies Controller

Our newly generated controller does not properly inherit from the namespace api/v1 (We will update the routes later in the tutorial) so let's change our controller class from

```ruby
class MoviesController < ApplicationController
```

TO

```ruby
class Api::V1::MoviesController < ApplicationController
```

5.  Update the Routes
    Locate to your config folder and open your `routes.rb` file.

```ruby
Rails.application.routes.draw do
  resources :movies
end
```

If we go to `localhost:3000/movies` we will not call the controller. We must update our Routes to:

```ruby
Rails.application.routes.draw do
 namespace :api do
  namespace :v1 do
   resources :movies
  end
 end
end
```

which allows us to call the json data from `localhost:3000/api/v1/movies`

6.  Let's seed our sqlite database with some classic movies so we can practice getting data with GET requests to the API.

Copy and paste the following data to your `db/seeds.rb` file.

```ruby
Movie.create(name: "The Nightmare Before Christmas", rating: 5)
Movie.create(name: "Titanic", rating: 5)
Movie.create(name: "Venom", rating: 4)
Movie.create(name: "A Quiet Place", rating: 5)
Movie.create(name: "Nobody's Fool", rating: 2)
Movie.create(name: "Suspiria", rating: 4)
Movie.create(name: "Hereditary", rating: 4)
Movie.create(name: "Office Space", rating: 5)
Movie.create(name: "Elf", rating: 4)
Movie.create(name: "Dawn of the Planet of the Apes", rating: 3)
Movie.create(name: "Secret life of Pets", rating: 4)
Movie.create(name: "Overlord", rating: 3)
Movie.create(name: "Wonder Woman", rating: 5)
Movie.create(name: "Bohemian Rhapsody", rating: 4)
Movie.create(name: "Ocean's 8", rating: 5)
```

Seed the DB using `rails db:seed && rails db:migrate`

7.  Test the API using a GET request.

Start your Rails server `rails s` and navigate to `localhost:3000/api/v1/movies` and if it is successful you should see the following JSON output: <br><br>

(Optional) I'm using a pretty JSON viewer for chrome which you can download [here.](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)
<a href="http://tinypic.com?ref=2m60ahx" target="_blank"><img src="http://i63.tinypic.com/2m60ahx.png" width="350" height="410" border="0" alt="Image and video hosting by TinyPic"></a>

Congrats! You have successfully created a Rails API and completed your first GET request!
