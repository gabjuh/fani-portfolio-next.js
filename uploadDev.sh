#!/bin/bash

# set variables
HOST="s213.goserver.host"
USERNAME="web34"
LOCAL_DIR=".next"
REMOTE_DIR="www/franciskahajdu.de/next"
BACKUP_DIR="backups"
BACKUP_TMP_DIR="backups/tmp"
BACKUP_DEV_DIR="backups/dev"

# create backup directory if it does not exist
mkdir -p $BACKUP_DIR
mkdir -p $BACKUP_TMP_DIR
mkdir -p $BACKUP_DEV_DIR

# use rsync over ssh to download the current files and create a backup zip
rsync -az --progress -e "ssh -o StrictHostKeyChecking=no" $USERNAME@$HOST:$REMOTE_DIR/* $BACKUP_TMP_DIR/
zip -r "$BACKUP_DEV_DIR/$(date '+%Y-%m-%d-%H-%M-%S').zip" $BACKUP_TMP_DIR/*

# use rsync over ssh to upload files
rsync -az --progress -e "ssh -o StrictHostKeyChecking=no" $LOCAL_DIR/* $USERNAME@$HOST:$REMOTE_DIR

# check for errors and print message
if [ $? -eq 0 ]; then
    echo "DEV upload successful!"
else
    echo "DEV upload failed."
fi
