# Requirements 

Make sure that you have the following installed:

- installation of node 
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

- MongoDB Communtiy Edition(local database server)- can be used on local machine 
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

NOTE: To use MongoDB Shell in this case CLI to write queries run this on root directory `mongosh`

# Running the application 

- On the root directory of the project run: 
`npm start` or `node server.js`

# Iac tools 
## What project entails 

- The project involves using Terraform and Ansible, which are Infrastructure as Code (IaC) tools, to manage servers and configurations.
- DevOps tools used in the project include Vagrant, VirtualBox, Ansible (for writing playbooks), and Terraform to configure our application (including monitoring tools).
- Terraform will automate the provisioning and management of the infrastructure(additonal config), while Ansible will handle configuration management through playbooks.
- Instead of using vagrant up to start the virtual machines (VMs), Terraform will be used to automate the entire process, specifying whether the VMs should run on Ubuntu or Windows for our monolithic application.