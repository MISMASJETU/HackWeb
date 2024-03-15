Hackweb is a simple school project, with a goal of not being breachable.

If you want to try yourself, here is some info of how the web works.

Frontend used HTML, CSS and JS while backend runs on Pyhon, specifically Flask.

I will not describe how everything works, but only the parts which could be potentially attacked.


### SQL
First, here is a database diagram, so we have that out of the way. Database runs on MSSQL server locally hosted on your PC.
![Database Diagram](/img/er.png "Database Diagram")

### REGISTRATION
![Registration](/img/reg.png "Registration")
Registration is handled by a form.
![Code](/img/reg1.png "Code")
![Code](/img/reg2.png "Code")

As you can see, the backend uses parameter input system. Which prevents SQL injection. 
Backend also never uses any information which could be used maliciously.
On top of that the password is encrypted.
Encryption should normally be done on frontend, but I figured doing this in a school project is okay.


### LOGIN
![Login](/img/log.png "Login")
Login is handled by a form.
![Code](/img/log1.png "Code")
Similarly to registration, the backend once again doesn't send client any malicious data.
There could be one possible vulnerability. If user doesn't log out and closes the browser instead.
They are still in the session. This could be used by a hacker. Let's say the hacker uses XSS
attack to convince client, he is another user in a session. Not sure if that could be used for anything. Since backend
should be immune to that.
### ORDER CREATION
![Order Creation](/img/ord.png "Order Creation")
Ordering is handled by a form.  
![Code](/img/ord1.png "Code")
Once again, when it comes to SQL, the backend should be immune to injection.
However, I could see potential risk with the "convincing" from previous section. 
Not sure what backend does when that occurs.

### HTML
Last part which I kinda mentioned in Login section.
As you know, flask can be reached by multiple HTTP requests, like /api/login and so on.
First thing which came to my mind was /api/rooms. I tried sending that as not logged-in user.
The backend was immune to it. (Exception occurred because no username was provided)

Hopefully attacks like these are not possible, but not each possibility was tested before.