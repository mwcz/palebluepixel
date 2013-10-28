#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

FN='0001 - nebulous.md'
for (( i = 2; i < 132; i++ )); do
    NEWFN=$(printf '%.4d' $i)
    cat $FN | sed 's/NUMBER/'$i'/' | sed 's/NAME PLACEHOLDER/photo '$i'/' > $NEWFN' - placeholder name.md'
done



IFS=$SAVEIFS
