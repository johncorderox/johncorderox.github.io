---
layout: post
title: Add a Rails Env to your Vagrant Server
description: Create configurable development environments
---

## Vagrant

A great server to contain all of your ruby+rails projects for better workflow development:

```
#!/usr/bin/env bash
# upgrade and update the system
echo upgrading and updating the system
sudo apt-get update
sudo apt-get -y upgrade
# install node.js for js runtime when using Rails
echo installing nodejs for ExecJS runtime and git
sudo apt-get install -y nodejs
sudo apt-get install -y git
# install RVM
echo installing RVM
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash -s stable
source /home/vagrant/.rvm/scripts/rvm
rvm requirements
# install Ruby and make 2.3.1 the default
echo installing ruby
rvm install 2.3.1
rvm use 2.3.1 --default
# install Bundler and Rails
echo installing bundler and rails
gem install bundler --no-ri --no-rdoc
gem install rails -v 4.2.7 --no-ri --no-rdoc
# install postgres and its dependencies
echo installing psql and its dependencies
sudo apt-get install -y postgresql postgresql-contrib libpq-dev
```


Make sure your Vagrantfile has some of this options so we can port forward (open traffic in specific ports)

```
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
  config.vm.provision :shell, path: "bootstrap.sh", privileged: false
  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "2048"]  
    vb.customize ["modifyvm", :id, "--cpus", "2"]  
  end
end
```

Finally, run these commands so your vagrant server can run the script and configure your development server:

```
$ vagrant halt
==> default: Attempting graceful shutdown of VM...
$ vagrant up --provision
```
