#!/bin/bash
cd /home/ec2-user/server
rm -rf build/*
unzip -d build/ package.zip
pm2 stop easyshop
pm2 delete easyshop
sudo kill -9 $(sudo lsof -t -i:3000)
pm2 serve ./build 3000 --name "easyshop" --spa
pm2 startup
pm2 save