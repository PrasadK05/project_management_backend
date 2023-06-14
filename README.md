# project_management_backend
It is a backend server of project management web application which is deployed on [Render.com]("https://dashboard.render.com/") 



## Tech Stack

**Server:** Node, Express, Mongoose, JWT, argone2

**Database:** MongoDB


## API Reference

#### Base URL

```http
   https://project-management-zyyv.onrender.com
```


#### Login api

```http
  POST /login
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.  |
| `password` | `string` | **Required**. |

Responses
```
status:200 (successful)
res={
    Succsess:true,
    Messege:"Valid User"
    toekn:"andkfsafkp[@kfkfk255FFF",   
    }

status:400 (unsuccessful) 
res={
    Succsess:false,
    messege:"Invalid User"
    }
status:404 (unsuccessful) 
res={
    Succsess:false,
    Messege:"User not found"
    }     
```

#### Logout api

```http
  GET /logout
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |


Responses
```
status:200 (successful)
res={
    status:true,
    messege: "User logout successfully"
    }

status:400 (unsuccessful) 
res={
    status:false,
    messege: "something went wrong"
    }
```    

#### Project api

```http
  GET /projects
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

| query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `sort` | `string` | **Not Required**.  |
| `q` | `string` | **Not Required**.  |
| `limit` | `number` | **Not Required**.  |
| `page` | `numeber` | **Not Required**.  |

Responses
```
status:200 (successful)
res={
    status:true,
    result:[...result],
    total: total numnber
    }

status:400 (unsuccessful) 
res={
        messege: "Something went wrong"
        status: false
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```    


```http
  POST /projects
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `projectName` | `string` | **Required**.  |
| `location` | `string` | **Required**.  |
| `startDate` | `string` | **Required**.  |
| `endDate` | `string` | **Required**.  |
| `priority` | `string` | **Required**.  |
| `reason` | `string` | **Required**.  |
| `type` | `string` | **Required**.  |
| `division` | `string` | **Required**.  |
| `department` | `string` | **Required**.  |
| `category` | `string` | **Required**.  |
| `status` | `string` | **Not Required**.  |

Responses
```
status:200 (successful)
res={
    stattus:true,
    messege:"New project added successfully"
    }

status:400 (unsuccessful) 
res={
        stattus:true,
    messege:"New project added unsuccessfull"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```    

```http
  PATCH /projects/:id
```
 body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status` | `string` | **Required**.  |

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

 params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
   status: true,
        message: "Project status updated successfully"
    }

status:400 (unsuccessful) 
res={
        
        status: false,
        message: "Project status not get updated"
    }


status:401 (unsuccessful) 
res={message: "Unauthorized"}
```    
#### Get overview data

```http
  GET /projects/overview
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
    status: true,
    project: {...data}
    }

status:400 (unsuccessful) 
res={
        status: false,
        message: "Error"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```  

#### Get chart data

```http
  GET /projects/stats
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
    status: true,
    project:{...data}
    }

status:400 (unsuccessful) 
res={
        status: false,
        message: "Error"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```  
## Run Locally

Clone the project

```bash
  git clone https://github.com/PrasadK05/project_management_backend
```

Install dependencies

```bash
  npm install
```

Start the server for developement

```bash
  npm run dev
```

Start the server for production

```bash
  npm run start
```

## Related

Checkout front end repo and live website

[Frontend_Repo](https://github.com/PrasadK05/project_management_client)

[Deployed](https://coruscating-gaufre-572478.netlify.app/)

## Authors

- [Prasad Karde](https://github.com/PrasadK05)

