---
title: What are the most popular HTTP Status Codes?
layout: post
description: What does 404 mean? What about 201?
---

HTTP status codes are numbered 100-500. Each 100 intervals are split into categories!

| 100s | Informational 		    | 100 - Continue                |
| 200s | Success Codes          | 201 - Resource created        |
| 300s | Redirect Codes         | 301 - Resource has been moved |
| 400s | Client Errors          | 401 - Unauthorized            |
| 500s | Server Errors          | 503 - Service unavailable     |

<br><br>
You can also do some great error handling with rails APIs in the application controller and create more readable, human-like errors.
<br><br><br><br>
```ruby

class ApplicationController < ActionController::API
	rescue_from ActiveRecord::RecordNotFound, with: :some_cool_method_here

	def some_cool_method_here
		hash = {
			'status': 404,
			'message': "The record you attempted to query was not found! Contact the admin! Etc!"
		}
		render json: hash, status: not_found
	end
end
```