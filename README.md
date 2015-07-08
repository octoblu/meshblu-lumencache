# meshblu-lumencache

##How to use stand alone

1. Run "npm install meshblu-lumencache" or clone this repo and run "npm install"
2. In Octoblu go to the "Connect" page and add a new "Generic Device" name it anything
3. Go to -> Connect -> Configured Nodes
4. Select your newly created device, keep this page open
5. Open/create the meshblu.json in the directory where meshblu-lumencache is installed
6. Copy the UUID/Token from the Generic Device page into the meshblu.json so it looks like the below

```
{
  "server" : "meshblu.octoblu.com",
  "port"   : 80,
  "uuid"   : "your-uuid",
  "token"  : "your-token"
}

```

7. In the directory, type "npm start" in the terminal to start the plugin
8. In the connect page for your device, set the port options for your serial connection
9. In the Octoblu designer you should now be able to drop in your configured device and have all options available.