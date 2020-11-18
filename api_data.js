define({ "api": [
  {
    "type": "classmethod",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "SQLhelper.executes",
    "description": "<p>Execute SQL syntax</p>",
    "group": "SQLhelper",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>No error massage will be printed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "SQLhelper",
    "name": "ClassmethodFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "classmethod",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "SQLhelper.selectone",
    "description": "<p>Fetch only one result after executing SQL search</p>",
    "group": "SQLhelper",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "tupple",
            "optional": false,
            "field": "tupple-list",
            "description": "<p>Only one tupple list including search results</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "SQLhelper",
    "name": "ClassmethodFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "classmethod",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "SQLhelper.selects",
    "description": "<p>Fetch multiple results after executing SQL search</p>",
    "group": "SQLhelper",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "tupple",
            "optional": false,
            "field": "tupple-list",
            "description": "<p>Multiple tupple list including search results</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "SQLhelper",
    "name": "ClassmethodFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "Object",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "SQLhelper",
    "description": "<p>The multi-thread DB pool which support execute Mysql syntax</p>",
    "group": "SQLhelper",
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "SQLhelper",
    "name": "ObjectFilmappStructureViewsSqlpoolPy"
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
    "name": "PostBanDelete"
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
    "type": "function",
    "url": "./filmApp/Structure/views/utli/dataCompress.py",
    "title": "preprocessing",
    "description": "<p>Remove the punctuations in search keywords</p>",
    "group": "dataCompress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "s",
            "description": "<p>The string that need to be encoded</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "preq",
            "description": "<p>The list of key words after preprocessing</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/utli/dataCompress.py",
    "groupTitle": "dataCompress",
    "name": "FunctionFilmappStructureViewsUtliDatacompressPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/utli/dataCompress.py",
    "title": "bwtencode",
    "description": "<p>Encode string with BWT algorithm</p>",
    "group": "dataCompress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "s",
            "description": "<p>The string that need to be encoded</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "L",
            "description": "<p>The L string after BWT</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/utli/dataCompress.py",
    "groupTitle": "dataCompress",
    "name": "FunctionFilmappStructureViewsUtliDatacompressPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/utli/dataCompress.py",
    "title": "bwtdecode",
    "description": "<p>Decode string from BWT to original string</p>",
    "group": "dataCompress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "s",
            "description": "<p>The string that need to be encoded</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sep",
            "description": "<p>The ascii value of the mark symbol</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "s",
            "description": "<p>The  original string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/utli/dataCompress.py",
    "groupTitle": "dataCompress",
    "name": "FunctionFilmappStructureViewsUtliDatacompressPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/utli/dataCompress.py",
    "title": "rle",
    "description": "<p>Encode string with RLE(run length encoding) algorithm</p>",
    "group": "dataCompress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "l",
            "description": "<p>The string that need to be encoded</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "L",
            "description": "<p>The L string after RLE</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/utli/dataCompress.py",
    "groupTitle": "dataCompress",
    "name": "FunctionFilmappStructureViewsUtliDatacompressPy"
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
    "type": "GET",
    "url": "/movie/recommend",
    "title": "getrecom",
    "description": "<p>Get the reccommend by user's history click</p>",
    "group": "search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "mids",
            "description": "<p>List of movies' mids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"mids\": [\"\"]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Structure/views/search.py",
    "groupTitle": "search",
    "name": "GetMovieRecommend"
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
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getwholeInfo",
    "description": "<p>Get the whole user info by mailbox or username</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "param",
            "description": "<p>The mailbox or username</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flag",
            "description": "<p>Determine the param is mailbox or username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "tupple",
            "optional": false,
            "field": "info",
            "description": "<p>Return the tupple list contains the info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "changepasswordbyMail",
    "description": "<p>Change the user password</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "mail",
            "description": "<p>The mailbox</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "password",
            "description": "<p>The newpassword</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>Return 0 when success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getwishlist",
    "description": "<p>Get the wishlist</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "username",
            "description": "<p>The user we want to check his or her wishlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "tupple",
            "optional": false,
            "field": "wishlist",
            "description": "<p>The tupple contains moviename, mid, addtime</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "addwishlist",
    "description": "<p>Add movie into wishlist</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "username",
            "description": "<p>The user who want to add movie into wishlist</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mid",
            "description": "<p>The unique mid of movies</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "moviename",
            "description": "<p>The name of movie</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 means success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "changepasswordbyPassword",
    "description": "<p>Change the user password</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "usr",
            "description": "<p>The usrname</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "newkwy",
            "description": "<p>The newpassword</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>Return 0 when success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getMid",
    "description": "<p>Get the mid of movies by its name</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "moviename",
            "description": "<p>The name of movies</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "mid",
            "description": "<p>The unique mid of movie</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getMname",
    "description": "<p>Get the moviename by its mid</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mid",
            "description": "<p>The unique mid of movies</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "moviename",
            "description": "<p>The moviename</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getMimage",
    "description": "<p>Get the poster of movies</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mid",
            "description": "<p>The unique mid of movies</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "link",
            "optional": false,
            "field": "url",
            "description": "<p>The image link of this movie</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getReviews",
    "description": "<p>Get the reviews for this movie</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mid",
            "description": "<p>The unique mid of movies</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>How many reviews we want to get</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "usr",
            "description": "<p>The current username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "reviews",
            "description": "<p>The list contain reviews for this movie</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "addReviews",
    "description": "<p>Insert user review for movie into DB</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "uid",
            "description": "<p>The unique uid of users</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mid",
            "description": "<p>The unique mid of movies</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "rate",
            "description": "<p>The rate for this movie</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "title",
            "description": "<p>The review title</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "content",
            "description": "<p>The review content</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 means success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getReviewsbyuid",
    "description": "<p>Get the reviews by uid</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "uid",
            "description": "<p>The unique uid of users</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>How many results we want to get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "reviews",
            "description": "<p>Conatin username,content,rate,moviename</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getTaglist",
    "description": "<p>Get the movies info according to different tag order by time,rate,count</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "tag",
            "description": "<p>Which kind of movies we want to get</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "num",
            "description": "<p>How many movies we want to get</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "order",
            "description": "<p>The sequence of movies to show, default is time</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "movies",
            "description": "<p>Contains moviename,rate,time,count,post</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "insertBuser",
    "description": "<p>Insert data into banlist</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "host",
            "description": "<p>The current user</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "banname",
            "description": "<p>The name of user that this current user want to ban</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 means success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "deleteBuser",
    "description": "<p>Remove user from current user's banlist</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "host",
            "description": "<p>The current user</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "banname",
            "description": "<p>The user will be removed from banlist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 means success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getmidIndex",
    "description": "<p>Get the relative movies' mids according to the key words</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "words",
            "description": "<p>The key words to search relative moves</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "set",
            "optional": false,
            "field": "Movie-set",
            "description": "<p>The set contains mids</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "trackClick",
    "description": "<p>Track the click on movie page from users to improve recommendation algorthm</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "uid",
            "description": "<p>The unique uid of users</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "banname",
            "description": "<p>The unique mid of movies</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 means success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "getClick(uid)",
    "description": "<p>Get the click history of user to execute recommendation algorithm</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "uid",
            "description": "<p>The unique uid of users</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "click-info",
            "description": "<p>Contains uid,mid,click-time,click-count</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "insertUser",
    "description": "<p>Insert user info into DB</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "The",
            "description": "<p>list contains username, password, gender, DoB, mailbox, hobby</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>No error massage will be printed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "checkSame",
    "description": "<p>Check whether the mail or username have been registered</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "mail",
            "description": "<p>The mailbox</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "usrname",
            "description": "<p>The username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean-Value",
            "description": "<p>False: has been registered, True: has not been registered</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "checkPassword",
    "description": "<p>Get the password by mailbox or username</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "param",
            "description": "<p>The mailbox or username</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flag",
            "description": "<p>Determine the param is mailbox or username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "password",
            "description": "<p>Return the password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/views/sqlPool.py",
    "title": "removeWishlist",
    "description": "<p>Remove movies from user's wishlist</p>",
    "group": "sqlpool",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "username",
            "description": "<p>The user who want to remove movies from his or her wishlist</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "moviename",
            "description": "<p>The name of movie will be removed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 means success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/views/sqlPool.py",
    "groupTitle": "sqlpool",
    "name": "FunctionFilmappStructureViewsSqlpoolPy"
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
            "field": "birth",
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
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "getPage",
    "description": "<p>Get the html page according to the url</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "url",
            "description": "<p>The url of the webpage that we want to collect data from</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "html",
            "optional": false,
            "field": "page",
            "description": "<p>The html page we get from url</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "withcoockie",
    "description": "<p>Get html page according the url with fake cookie</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "url",
            "description": "<p>The url of the webpage that we want to collect data from</p>"
          },
          {
            "group": "Parameter",
            "type": "dict",
            "optional": false,
            "field": "cookie",
            "description": "<p>The fake cookie we generated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "html",
            "optional": false,
            "field": "page",
            "description": "<p>The html page we get from url</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "trans",
    "description": "<p>Translate the words from a language to another language</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "oringin",
            "description": "<p>The words need to be translated</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "sc",
            "description": "<p>Source language type,default: Chinese</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "dt",
            "description": "<p>target language type,default: Englisg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "text",
            "description": "<p>The translation results</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "doubanLogin",
    "description": "<p>Simulate the behaviour of browser login www.douban.com</p>",
    "group": "webspider",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 when success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "getDouban",
    "description": "<p>Get the movie information from WWW.douban.com and save them in xls file</p>",
    "group": "webspider",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "msg",
            "description": "<p>print success massgae</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "imdb",
    "description": "<p>Get basic movie info from www.imdb.com</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "url",
            "description": "<p>The url of the webpage that we want to collect data from</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "content",
            "description": "<p>The list contains the basic movie info on IMDB</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "imdbDetail",
    "description": "<p>Get more details movie info from www.imdb.com like genres,poster,directors,actors,brief</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "url",
            "description": "<p>The url of the webpage that we want to collect data from</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "path",
            "description": "<p>The path of xls file which contains movies main page code on IMDB</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "content",
            "description": "<p>The list contains the movie details on IMDB</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "getIMDBreviews",
    "description": "<p>Get user reviews of movie on IMDB</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "url",
            "description": "<p>The url of the webpage that we want to collect data from</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "path",
            "description": "<p>The path of xls file which contains movies main page code on IMDB</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "content",
            "description": "<p>The list contains the reviews info on IMDB</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "makeTable",
    "description": "<p>Save data into xls file</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "content",
            "description": "<p>The list of data</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "path",
            "description": "<p>The path we want save the xls file in</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "int-value",
            "description": "<p>0 means success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
  },
  {
    "type": "function",
    "url": "./filmApp/Structure/getData/webspider.py",
    "title": "testip",
    "description": "<p>Test which proxy ip in pool can be used</p>",
    "group": "webspider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "ipp",
            "description": "<p>The list contains proxy ips to be test</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "ipp",
            "description": "<p>The list contains the proxy ip that can work well</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Structure/getData/webspider.py",
    "groupTitle": "webspider",
    "name": "FunctionFilmappStructureGetdataWebspiderPy"
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
    "type": "POST",
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
    "name": "PostWishDelete"
  },
  {
    "type": "POST",
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
    "name": "PostWishOthers"
  }
] });
