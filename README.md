# laravel-vue-resourcemngr
# Introduction 
 This repo contains a resource manager app using Laravel and Vue.
 
 Resources are divided into 3 types (each with it's own properties): 
 * **File** - title, .pdf file
 * **Code** - title, description, code snippet
 * **Link** - title, path
 
 'Visitors' can use these resources based on their type:
  * **File** - show preview in ```embed``` tag or download the **.pdf** file 
 * **Code** - copy snippet to clipboard
 * **Link** - open (current/new tab depends on editor)

'Editors' can create, edit and delete resources.

# Tech 
 ## Laravel & API
 Laravel side contains an API from which the app retrieves & manipulates data. 
 The API is divided into 2 groups (visitor/editor), each has it's own controller (`VisitorController`, `EditorController`). 
 All API access points are specified in `routes/api.php`, each resource type has an endpoint for creating, editing and deleting, as well as retrieving.

 ## Models & DB 
 Each resource type has its own model, which is bound to one MySQL DB table (model `File` is bound to table `files`, model `Code` is bound to table `codes` etc). Each table has it's own 'create table' migration ready.
 
 ## Vue.js & Styling
 Frontend app is created in Vue.js in combination with SASS and third party libraries such as Vuex, Vue Router and Axios.
 Vue.js structure (`/app/resources/vue`) is divided into several folders:
 * `components` - custom Vue reusable components
 * `helpers` - pieces of plain .js functions used across the app
 * `models` - "blueprints" for generating dynamic form inputs    
 * `pages`
 * `router` - SPA routing details
 * `store` - Vuex modules, each resource type has it's own module, each module has actions for API calls. Also includes state management for modal window.
 
 SASS structure (`/app/resources/styles`) is based on modularity and BEM-friendly methodology that properly reflects Vue's components' architecture.
 
# Setup & Installation
 In order to install this app locally, you need to follow these steps:
 
 1. Clone or download this repo. Extract it, in my case, it is at `D:\Projects\Code\resourcemngr`
 2. Setup server-related tech 

    ### If you use Laravel Homestead:
    Add `192.168.10.10 resourcemngr.test` to your `/etc/hosts` (windows). In `Homestead.yaml` file:
    ```
    ip: "192.168.10.10"
    .
    .
    .
    folders:
        - map: D:\Projects\Code\resourcemngr
          to: /home/vagrant/resourcemngr
          
    sites:
        - map: resourcemngr.test
          to: /home/vagrant/resourcemngr/public
          
    databases:
        - resourcemngr
    ```
    ### Otherwise:
    Install PHP, Composer and MySQL. Create database `resourcemngr`
    
 3. Go to your cloned/downloaded folder's root, run `cp .env.example .env`, `composer install` and `php artisan migrate` (Set the database connection in .env before migrating)
 4. Install Node.js (16.8) and NPM (7.2) and run `npm i`
 5. Build the app via `npm run dev` or `npm run prod`, open browser and add your server's address (my is `resourcemngr.test`)



# Inside the app
After successfull setup, the app should look like this:
![alt text](https://user-images.githubusercontent.com/33912290/137171764-328225ab-980a-4d89-b0e7-381f72115344.png)

Resources are empty, you need to add them. click on "Editor" on the bottom navigation and Create a new resource, f.e File (pdf).
![alt text](https://user-images.githubusercontent.com/33912290/137172603-bb2eefc6-c8c5-4862-b1cb-b4015ef0bd23.png)

After creating a couple of resources, the visitors' page should look like this:
![alt text](https://user-images.githubusercontent.com/33912290/137178710-f9ac70fc-d390-4215-aba2-8fb3c7e6813f.png)

 
 
 
 
 
 
