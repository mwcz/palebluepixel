#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

for f in *.md;
do
    name=$(head -1 $f | sed 's/Title: //' | sed -e 's/\([A-Z][A-Za-z0-9]*\)/\L\1/g' | sed 's/\s\+/_/g' | sed 's/\W\+//g' | sed 's/_\+/ /g' )
    num=$(echo $f | sed 's/\(....\).*/\1/')
    git mv $f "$num - $name.md"
done

IFS=$SAVEIFS

