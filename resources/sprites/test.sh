#!/bin/bash

for i in `ls`
do
    convert -crop 128x183+7+6 $i $i    
done
