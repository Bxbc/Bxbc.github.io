define({ "api": [
  {
    "type": "delete",
    "url": "/ban/delete",
    "title": "deleteBan",
    "group": "banlist",
    "description": "<p>Delete the banname from user's banlist</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "hostname",
            "description": "<p>The name of user that login app now</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "banname",
            "description": "<p>The username that the user want remove from his of her banlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"Sucessful delete from banlist\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/banlist.py",
    "groupTitle": "banlist",
    "name": "DeleteBanDelete"
  },
  {
    "type": "POST",
    "url": "/ban/add",
    "title": "add2Ban",
    "group": "banlist",
    "description": "<p>Add the banname into user's banlist</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "hostname",
            "description": "<p>The name of user that login app now</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "banname",
            "description": "<p>The username that the user want to add in his or her banlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"Successful add to ban\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/banlist.py",
    "groupTitle": "banlist",
    "name": "PostBanAdd"
  },
  {
    "type": "POST",
    "url": "/ban/index",
    "title": "getbanList",
    "group": "banlist",
    "description": "<p>Get the user's banlist</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "username",
            "description": "<p>not null</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "banlist",
            "description": "<p>Including the usernames in banlist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"username\":[name]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/banlist.py",
    "groupTitle": "banlist",
    "name": "PostBanIndex"
  },
  {
    "type": "POST",
    "url": "/reset/getcode",
    "title": "sendVertifycode",
    "group": "reset",
    "description": "<p>Send the vertification code to users who want change their password by mail</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "mail",
            "description": "<p>The mailbox that the user used to register in our app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"get vertification code\",\n    \"error\":\"none\",\n    \"codes\":\"4 random digit number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/reset.py",
    "groupTitle": "reset",
    "name": "PostResetGetcode"
  },
  {
    "type": "POST",
    "url": "/reset/newpassword",
    "title": "changebyOld",
    "description": "<p>Change password by original password</p>",
    "group": "reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "oldkey",
            "description": "<p>The original password</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "newkey",
            "description": "<p>The new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"Change the password successfully!\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/reset.py",
    "groupTitle": "reset",
    "name": "PostResetNewpassword"
  },
  {
    "type": "post",
    "url": "/reset/password",
    "title": "changePassword",
    "description": "<p>Change the password by user's mail</p>",
    "group": "reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "password",
            "description": "<p>The newpassword that the user want to change</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"change password\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/reset.py",
    "groupTitle": "reset",
    "name": "PostResetPassword"
  },
  {
    "type": "POST",
    "url": "/reset/verify",
    "title": "vertifyCode",
    "description": "<p>Compare the vertificaition code with the code that user typed in webpage</p>",
    "group": "reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": "<p>The vertification code that user typed in web</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"verify code\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/reset.py",
    "groupTitle": "reset",
    "name": "PostResetVerify"
  },
  {
    "type": "GET",
    "url": "/movie/newest",
    "title": "getnewest",
    "description": "<p>Get the list of newest movies</p>",
    "group": "search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>List of movies' mids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"movies\": {\n    \"mids\": [\"\"],\n    \"imgs\": [\"\"]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/search.py",
    "groupTitle": "search",
    "name": "GetMovieNewest"
  },
  {
    "type": "POST",
    "url": "/movie/details",
    "title": "shows",
    "description": "<p>Show the details of movies</p>",
    "group": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "mid",
            "description": "<p>The mid of movies</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>json of the detail information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"film\": {\n        \"actors\": \"actors\",\n        \"directors\": \"\",\n        \"img\": \"\",\n        \"mid\": \"\",\n        \"genres\": \"\",\n        \"rate\": \"\",\n        \"time\": \"\",\n        \"brief\": \"\",\n        \"mname\": \"moviename\"\n    },\n    \"recommend\": [{\n        \"name\": \"\",\n        \"img\": \"\",\n        \"mid\": \"\"\n    }],\n    \"comments\": [{\n        \"username\": \"\",\n        \"content\": \"\",\n        \"rate\": \"\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/search.py",
    "groupTitle": "search",
    "name": "PostMovieDetails"
  },
  {
    "type": "POST",
    "url": "/movie/lists",
    "title": "getList",
    "description": "<p>Get the list of movies in specific tag order by time or count or rate</p>",
    "group": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "type",
            "description": "<p>The genres that movies belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "number",
            "description": "<p>How many movies we want to get</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "order",
            "description": "<p>In which order that these movies will be shown</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>List of movies in specific genres and order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"tag\": [{\n    \"mid\": \"\",\n    \"name\": \"\",\n    \"rate\": \"\",\n    \"img\": \"\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/search.py",
    "groupTitle": "search",
    "name": "PostMovieLists"
  },
  {
    "type": "POST",
    "url": "/movie/search",
    "title": "searchs",
    "description": "<p>Search the movie according to the key words that user has typed in</p>",
    "group": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "target",
            "description": "<p>The key words that want to search in our app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>list of mids of movies</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"mid\":\"The result id of search\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/search.py",
    "groupTitle": "search",
    "name": "PostMovieSearch"
  },
  {
    "type": "DELET",
    "url": "/user/logout",
    "title": "logout",
    "description": "<p>Make user logout our app and clean the session</p>",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"successful logout\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "DeletUserLogout"
  },
  {
    "type": "GET",
    "url": "/user/index",
    "title": "index",
    "description": "<p>Get the user's basic infomation</p>",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>User's information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"username\": \"\",\n    \"mailbox\": \"\",\n    \"Dob\": \"\",\n    \"gender\": \"\",\n    \"hobby\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "GetUserIndex"
  },
  {
    "type": "GET",
    "url": "/user/session",
    "title": "check_session",
    "description": "<p>Check the status of login</p>",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"user is login\",\n    \"error\":\"none\",\n    \"username\":\"current user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "GetUserSession"
  },
  {
    "type": "POST",
    "url": "/user/addreviews",
    "title": "addreviews",
    "description": "<p>Insert reviews from users on movie into DB</p>",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "mid",
            "description": "<p>The unique mid of novies</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "rate",
            "description": "<p>The rate for movies from 0-10</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "title",
            "description": "<p>The title of movie reviews</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "content",
            "description": "<p>The content of reviews</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>List of reviews for movies that this user has commited</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"reviews\": [{\n    \"username\": \"\",\n    \"content\": \"\",\n    \"rate\": \"\",\n    \"movie\": \"\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "PostUserAddreviews"
  },
  {
    "type": "POST",
    "url": "/user/login",
    "title": "login",
    "description": "<p>User login app by username and password</p>",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "username",
            "description": "<p>The account name</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "password",
            "description": "<p>The account password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"Successful login\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "PostUserLogin"
  },
  {
    "type": "POST",
    "url": "/user/logine",
    "title": "logine",
    "description": "<p>User login by mailbox and password</p>",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "mailbox",
            "description": "<p>The account mail</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "pasword",
            "description": "<p>The account password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"successful login\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "PostUserLogine"
  },
  {
    "type": "POST",
    "url": "/user/register",
    "title": "register",
    "description": "<p>Get the register information and insert them into DB</p>",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "username",
            "description": "<p>The name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "password",
            "description": "<p>The password of this account</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "gender",
            "description": "<p>The gender of user</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "DoB",
            "description": "<p>The birthday of user</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "mailbox",
            "description": "<p>The mail address of user's</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "hobby",
            "description": "<p>What user like doing in their life</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"successful register\",\n    \"username\":\"\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "PostUserRegister"
  },
  {
    "type": "POST",
    "url": "/user/reviews",
    "title": "showreviews",
    "description": "<p>Get the user's history reviews for movies</p>",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "username",
            "description": "<p>The username of whom that the user want watch his or her history reviews</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>List of reviews for movies that this user has commited</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"reviews\": [{\n    \"username\": \"\",\n    \"content\": \"\",\n    \"rate\": \"\",\n    \"movie\": \"\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/user.py",
    "groupTitle": "user",
    "name": "PostUserReviews"
  },
  {
    "type": "DELETE",
    "url": "/wish/delete",
    "title": "delete",
    "description": "<p>Delete the movie from user's wish list</p>",
    "group": "wish",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"successful delete\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/wishlist.py",
    "groupTitle": "wish",
    "name": "DeleteWishDelete"
  },
  {
    "type": "GET",
    "url": "/wish/add",
    "title": "add",
    "description": "<p>add the movie into wish list</p>",
    "group": "wish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "moviename",
            "description": "<p>The movie that user want to add in wish list</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Including execution information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\":\"successful add wishlist\",\n    \"username\":\"current user\",\n    \"error\":\"none\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/wishlist.py",
    "groupTitle": "wish",
    "name": "GetWishAdd"
  },
  {
    "type": "GET",
    "url": "/wish/index",
    "title": "index",
    "description": "<p>Get the wish list of users</p>",
    "group": "wish",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>The wish list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"movie\":[\"movie name\"],\n    \"mid\":[\"mids\"],\n    \"time\":[\"addtime\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/wishlist.py",
    "groupTitle": "wish",
    "name": "GetWishIndex"
  },
  {
    "type": "GET",
    "url": "/wish/others",
    "title": "index",
    "description": "<p>To get other's wishlist</p>",
    "group": "wish",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>Including list of moviename, mid, addtime</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"username\":[\"\"],\n    \"mid\":[\"\"],\n    \"time\":[\"\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/wishlist.py",
    "groupTitle": "wish",
    "name": "GetWishOthers"
  }
] });
